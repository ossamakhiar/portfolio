const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
});

async function bootstrap(name, email, text_msg) {
    console.log(process.env.EMAIL, "email");
    try {
        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: `${process.env.EMAIL}`,
            subject: "Contact me ✔, portfolio",
            html: `email: <b>${email}</b><br/>message: <b>${text_msg}</b>`,
        });

        console.log("Mail sent:", info);
    } catch (error) {
        console.error("Error sending mail:", error);
        throw error;
    }
}

module.exports = bootstrap;