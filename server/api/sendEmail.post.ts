import nodemailer from "nodemailer";
import { useRuntimeConfig } from "#imports";
import { readBody } from "h3";
export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: config.smtpPort,
    secure: false,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  const mailOptions = {
    from: config.smtpUser,
    to: config.toEmail,
    subject: `New Contact Form Message from ${body.name}`,
    text: `
      Name: ${body.name}
      Email: ${body.email}
      Message: ${body.message}
    `,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong></p>
      <p>${body.message}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: "success", message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to send email",
    });
  }
});
