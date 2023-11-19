import nodemailer from "nodemailer";

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
        <p>Name:- <strong>${username}</strong> </p>
        <p>Email:- <strong>${email}</strong> </p>
        <div>
        <p>Message:- </p>
        <p>${message}</p>
        </div>
       
       `;

    // send mail with defined transport object
    let mailOptions = {
      from: `${username} <${email}>`, // sender address
      to: process.env.RECEIPITENT_EMAIL, // list of receivers
      subject: ` Nodemailer - Message from ${username}`, // Subject line
      html: template,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(200).json({ info: {username, email, message} });
  } catch (err) {
    res.status(400).json({ err: err });
  }
};

export { sendMessage };
