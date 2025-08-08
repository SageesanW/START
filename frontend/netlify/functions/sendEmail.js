const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const { name, email, company, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "info.kairodev@gmail.com",
    subject: `New Message from ${name}`,
    html: `
      <h3>Contact Details</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || "N/A"}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Email sent successfully" }),
    };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed to send email" }),
    };
  }
};
