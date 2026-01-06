"use server";

import nodemailer from "nodemailer";

export async function sendEmail(formData: { name: string; email: string; message: string }) {
    const { name, email, message } = formData;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to self
            replyTo: email,
            subject: `New Project Request from ${name}`,
            text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
            html: `
        <h3>New Project Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
        });

        return { success: true };
    } catch (error) {
        console.error("Error sending email:", error);
        return { success: false, error: "Failed to send email" };
    }
}
