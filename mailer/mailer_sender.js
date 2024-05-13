const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
});

async function bootstrap(name, email, text_msg) {
    console.log(process.env.EMAIL);
    try {
        const info = await transporter.sendMail({
            from: `"${name}" <${email}>`, // sender address
            to: `${process.env.EMAIL}`, // list of receivers
            subject: "Contact me ✔", // Subject line
            html: `email: <b>${email}</b><br/>message: <b>${text_msg}</b>`, // plain text body
        });

        console.log("Mail sent:", info);
    } catch (error) {
        console.error("Error sending mail:", error);
    }
}

module.exports = bootstrap;