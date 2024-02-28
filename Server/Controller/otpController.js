import userModel from "../Models/authModel.js";
import utils from "../utils/utils.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";



async function resetPassword(req, res) {
  try {
    const { email } = req.body;
    if(!(email && utils.validateEmail(email))) return res.status(400).send("Invalid Email")
    const user = await userModel.findOne({ email });
    if (user) {
      //const token = Math.random().toString(36).slice(-8);
      const token = Math.floor(Math.random() * 900000) + 100000;

      console.log(token);
      user.resetPasswordToken = token;
      user.tokenExpires = Date.now() + 600000;
      await user.save();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      });
      console.log(process.env.MAIL_USER,process.env.MAIL_PASSWORD)
      const message = {
        from: process.env.MAIL_USER,
        to: user.email,
        subject: "Password reset request",
        text: `Dear ${user.email},\n\nWe've received a request to reset the password for your account.\nBelow is your unique reset code. Please copy and paste it into the designated field on the password reset page:\nReset Code: ${token} \nThis token only valid for 10 minutes\n\nIf you did not request this password reset, please disregard this email. Your account security is important to us, and we recommend contacting our support team immediately if you suspect any unauthorized activity.`,
      };
      transporter.sendMail(message, (err, info) => {
        if (err) {
          return res.status(400).send("Somthing went wrong, try again");
        }
        return res
          .status(200)
          .send(`Email sent to reset your password`);
      });
    } else {
      res.status(400).send("user not found");
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.error(err.message);
  }
}

async function resetPasswordConfirm(req, res) {
  try {
    const { otp } = req.params;
    const value = +otp
    console.log(value);
    //const { password } = req.body;
    const user = await userModel.findOne({
      resetPasswordToken: value,
      tokenExpires: { $gt: Date.now() },
    });
    if (!user) {
      return res.status(400).send("Invalid OTP");
    }

    const resetToken = utils.generateToken(user)

    /* const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.tokenExpires = null;
    await user.save(); */

    res.json({"message":"OTP verified successfully",resetToken});
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.error(err);
  }
}

async function newPassword(req, res) {
  try {
    const { password } = req.body;
    const user = req.user;

    const hashedPassword = await bcrypt.hash(password, 10);
    user.password = hashedPassword;
    user.resetPasswordToken = null;
    user.tokenExpires = null;
    await user.save(); 

    res.send("Password changed successfully");
  } catch (err) {
    res.status(500).send("Internal Server Error");
    console.error(err.message);
  }
}






export default {
  resetPassword,
  resetPasswordConfirm,  
  newPassword
};