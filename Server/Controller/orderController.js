import Order from '../Models/orderModel.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'aravindsusila200409@gmail.com', 
    pass: 'qpzzlgvvxnhikuij' 
  }
});

export const createOrder = (req, res) => {
  const { to, subject, message } = req.body;

  if (!to || !subject || !message) {
    return res.status(400).json({ error: 'Please provide email, subject, and message' });
  }

  const order = new Order({
    to: to,
    subject: subject,
    message: message
  });

  const mailOptions = {
    from: 'aravindsusila200409@gmail.com',
    to: order.to,
    subject: order.subject,
    text: order.message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: 'Error sending email' });
    }
    console.log('Email sent: ' + info.response);
    res.status(200).json({ message: 'Email sent successfully' });
  });
};
