import nodemailer from "nodemailer";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sendMessage = async (req, res) => {
  const { username, email, message } = req.body;

  try {
    if (!username || !email || !message) {
      return res
        .status(400)
        .json({ msg: "Username, Email and Password must be provided!!" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASSWORD,
      },
    });

    const template = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>My Email Template</title>
        <style>
          /* Add your custom CSS styles here */
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
            border-radius: 10px;
            font-family: Arial, sans-serif;
          }
    
          .logo {
            display: block;
            margin: 0 auto;
            height: 100px;
            width: 100px;
            border-radius: 50%;
          }
    
          .message {
            margin-top: 20px;
            font-size: 18px;
            line-height: 1.5;
            text-align: center;
          }
       
        </style>
      </head>
      <body>
        <div class="container">
        <img src="cid:logo" alt="logo" class="logo" />
          <h3>Name: <em>${username} </em> </h3>
          <h3>Email: <em>${email}</em> </h3>
          <p class="message">
            <b>
            “ ${message} ”
            </b>
          </p>
        </div>
      </body>
    </html>
    
       `;

    // send mail with defined transport object
    let mailOptions = {
      from: `${username} <${email}>`, // sender address
      to: process.env.RECIPIENT_EMAIL, 
      cc: `${email}`,// list of receivers
      subject: ` Nodemailer - Message from ${username}`, // Subject line
      html: template,
      attachments: [{
        filename: 'logo.png',
        path: __dirname + '/logo.png',
        cid: 'logo' //same cid value as in the html img src
    }]
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(400).json({error, info: "Check your internet connection!!"})
      } else {
        console.log("Email sent: " + info.response);
        res.status(200).json({ info: {username, email, message} });

      }
    });

  } catch (err) {
    res.status(400).json({ err: err });
  }
};

export { sendMessage };
