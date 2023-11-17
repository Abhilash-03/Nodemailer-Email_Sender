import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("<h1>App is listening you....</h1>");
})

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD
    }

})

// send mail with defined transport object
let mailOptions = {
    from: process.env.USER_EMAIL, // sender address
    to: process.env.RECEIPITENT_EMAIL, // list of receivers
    subject: 'Message from Nodemailer', // Subject line
    text: 'Hello this is plain message for you!!!', // plain text body
    html: `<h1>This message from nodemailer</h1>`
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}...`);
});
