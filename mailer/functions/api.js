const express = require('express');
const bodyParser = require("body-parser");
const sendMail = require("./mailer_sender")
const cors = require('cors');
const path = require('path');
const serverless = require("serverless-http");
require('dotenv').config();


const app = express();
const PORT = 3000;

const router = express.Router();


// remove this when build the react app
const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
}
router.use(cors(corsOptions));



router.use(bodyParser.urlencoded({ extended: true }))

router.use(express.static(path.resolve(__dirname, '../dist')));

router.get('/', (req, res) => {
    res.sendFile();
})

router.post("/send-mail", async (req, res) => {
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

router.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

// app.listen(PORT, () => {
//     console.log(`App is running on port ${PORT}`)
// })

app.use("/.netlify/functions/app", router);
module.exports.handler = serverless(app);