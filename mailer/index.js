const express = require('express');
const bodyParser = require("body-parser");
const sendMail = require("./mailer_sender")
const cors = require('cors');
const path = require('path');
require('dotenv').config();


const app = express();
const PORT = 3000;

// remove this when build the react app
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));



app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static(path.resolve(__dirname, '../client/dist')));


app.post("/send-mail", async (req, res) => {
    if (!req.body)
        res.status(500).json({ error: "Failed to send mail" });

    const { name, email, message } = req.body;

    console.log(name, email, message)

    if (!(name && email && message))
        return res.status(400).json({error: 'Missing required fields'});
    try {
        await sendMail(name, email, message);
        res.status(200).json({ message: "Mail sent successfully" });
    } catch (error) {
        console.error("Error sending mail:", error);
        res.status(500).json({ error: "Failed to send mail" });
    }

})

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`)
})