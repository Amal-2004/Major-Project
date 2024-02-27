// routes/forgetPassword.js
import express from 'express';
import generateOTP from '../utils/otpGenerator.js';
import sendEmail from '../utils/emailSender.js';

const router = express.Router();


router.post('/forgetpassword', async (req, res) => {
  try {
    const { email } = req.body;

  /*   const user = await users.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'Email not found' });
    } */

    // Generate OTP
    const otp = generateOTP();

    const subject = 'Forget Password OTP';
    const text = `Your OTP for forget password is: ${otp}`;
    console.log(text)
    await sendEmail(email, subject, text);

    res.status(200).json({ message: 'OTP sent successfully' });
  } catch (error) {
    console.error('Error sending OTP:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
