// utils/emailSender.js
import nodemailer from 'nodemailer';

async function sendEmail(to, subject, text) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'aravindsusila200409@gmail.com', 
      pass: 'adpemdldltrklwyc' 
    }
  });

  const mailOptions = {
    from: 'aravindsusila200409@gmail.com', 
    to :to,
    subject:subject,
    text:text
  };

  await transporter.sendMail(mailOptions);
}

export default sendEmail;
