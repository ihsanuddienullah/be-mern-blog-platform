const { sendEmailWithNodemailer } = require("../helpers/email");
 
exports.contactForm = (req, res) => {  
  const { name, email, message } = req.body;
 
  const emailData = {
    from: process.env.EMAIL_FROM, // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
    to: process.env.EMAIL_TO, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
    subject: `Website Contact Form - ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4>Email received from contact form:</h4>
        <p>Sender name: ${name}</p>
        <p>Sender email: ${email}</p>
        <p>Sender message: ${message}</p>
        <hr />
        <p>This email may contain sensitive information</p>
        <p>https://onemancode.com</p>
    `,
  };
 
  sendEmailWithNodemailer(req, res, emailData);
};

exports.contactBlogForm = (req, res) => {  
  const { authorEmail, name, email, message } = req.body;
 
  let mailList = [authorEmail, process.env.EMAIL_TO]

  const emailData = {
    from: process.env.EMAIL_FROM, // MAKE SURE THIS EMAIL IS YOUR GMAIL FOR WHICH YOU GENERATED APP PASSWORD
    to: mailList, // WHO SHOULD BE RECEIVING THIS EMAIL? IT SHOULD BE YOUR GMAIL
    subject: `Someone message you from - ${process.env.APP_NAME}`,
    text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    html: `
        <h4>Message received from:</h4>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
        <hr />
        <p>This email may contain sensitive information</p>
        <p>https://onemancode.com</p>
    `,
  };
 
  sendEmailWithNodemailer(req, res, emailData);
}
