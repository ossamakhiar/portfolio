const express = require('express');
const bodyParser = require("body-parser");
const sendMail = require("./mailer_sender")
const cors = require('cors');
require('dotenv').config();


const app = express();
const PORT = 3000;

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: true }))

// app.use(bodyParser.json())

app.use(express.static(path.resolve(__dirname, '../client/build')));


app.post("/send-mail", (req, res) => {
    if (!req.body)
        res.status(500).json({ error: "Failed to send mail" });

    const { name, email, message } = req.body;

    console.log(name, email, message)

    if (!(name && email && message))
        return res.status(400).json({error: 'Missing required fields'});
    try {
        sendMail(name, email, message);
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ error: "Failed to send mail" });
    }

    res.status(200).json({ message: "Mail sent successfully" });
})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})