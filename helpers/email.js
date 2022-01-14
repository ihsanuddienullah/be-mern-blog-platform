const nodeMailer = require("nodemailer");

exports.sendEmailWithNodemailer = (req, res, emailData, forgotPasswordEmail) => {
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_FROM, // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
            pass: "kmmmhkerysziyrmm", // MAKE SURE THIS PASSWORD IS YOUR GMAIL APP PASSWORD WHICH YOU GENERATED EARLIER
        },
        tls: {
            ciphers: "SSLv3",
        },
    });

    return transporter
        .sendMail(emailData)
        .then((info) => {
            console.log(`Message sent: ${info.response}`);
            if (forgotPasswordEmail) {
                return res.json({
                    message: `Email has been sent to ${forgotPasswordEmail}. Follow the instructions to reset your password. Link expires in 10min.`,
                });
            } else {
                return res.json({
                    success: true,
                });
            }
        })
        .catch((err) => console.log(`Problem sending email: ${err}`));
};
