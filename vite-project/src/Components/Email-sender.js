// email-sender.js
const nodemailer = require('nodemailer');

// Create a transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Replace with your Gmail email address
    pass: 'your-password', // Replace with your Gmail password
  },
});

// Define the email options
const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'your-email@gmail.com', // Replace with your target email address
  subject: 'Test Email',
  text: 'Hello, this is a test email from Node.js!',
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
