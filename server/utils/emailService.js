const nodemailer = require('nodemailer');

// Create the transporter
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'fioreofficialproject@gmail.com',    // Your Gmail address
    pass: 'lkfp idlz ctol xkyk'                // Your Gmail App Password
  }
});

// Create the sendEmail function
const sendEmail = async (to, subject, text) => {
  try {
    const info = await transporter.sendMail({
      from: '"FIORE Events" <fioreofficialproject@gmail.com>',  // Sender Name and Email
      to,        // Recipient Email
      subject,   // Email Subject
      text       // Email Body (Plain text)
    });
    console.log(`Email sent successfully: ${info.messageId}`);
  } catch (error) {
    console.error('Error sending email:', error.message);
  }
};

module.exports = sendEmail;
