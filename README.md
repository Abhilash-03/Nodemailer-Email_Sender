# Project Name
- Nodemailer-Email_Sender
- It is email sending project using nodemailer.

## Requirements

- Node.js
- Nodemailer
- Dotenv
- Express.js

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Create a `.env` file in the root directory and add the following environment variables:
    - `USER_EMAIL`: Your email address.
    - `USER_PASSWORD`: Your email password.
4. Run the application using `npm start`.

## Usage

1. Open your browser and navigate to `http://localhost:5000`.

## Configuring an email address for Nodemailer
  `Gmail configuration`
### Here are the steps to configure 2-step verification and add an app password:

1. Open your Google Account by navigating to myaccount.google.com.
2. Click on Security in the left-hand menu.
3. Scroll down to the Signing in to Google section and click on 2-Step Verification.
4. Follow the on-screen instructions to set up 2-Step Verification.
5. Once you have set up 2-Step Verification, Scroll down to App passwords and click the arrow, >.
6. Select Mail as the app and Other (Custom name) as the device.
7. Click on Generate.
8. Copy the app password that is generated.
9. Use this app password in your Node.js application to send emails using Nodemailer. { user: your@gmail.com, pass: your_APP_PASSWORD (remove spaces if your 16 digits password contains spaces) }

## Happy Coding !!! 💻👨‍💻🔥

