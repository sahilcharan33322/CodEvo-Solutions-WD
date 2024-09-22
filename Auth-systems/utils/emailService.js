const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendVerificationEmail = async (to, token) => {
  const verificationLink = `http://localhost:${process.env.PORT}/auth/verify/${token}`;
  
  const mailOptions = {
    from: process.env.EMAIL_FROM,
    to: to,
    subject: 'Email Verification',
    html: `
      <h1>Verify Your Email</h1>
      <p>Please click the link below to verify your email address:</p>
      <a href="${verificationLink}">${verificationLink}</a>
    `
  };

  await transporter.sendMail(mailOptions);
};