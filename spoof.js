const nodemailer = require("nodemailer");

// Create a transport object to send our email through
// nodemailer automatically configrues the port

// There is one IP address in stevens-edu.mail.protection.outlook.com that gets filtered for spam, but the rest are good.
// Just brute force through them. I think one of them is a remnant from the old Stevens IT days
const transporter = nodemailer.createTransport({
    host: 'stevens-edu.mail.protection.outlook.com',
    auth: {
        user: 'nfarvard@stevens.edu',
        pass: "Random_Password_Here"
    },
    port: 25            // For some reason, Stevens mail is still using the old port for SMTP
});

transporter.sendMail({
    from: 'Nariman Farvardin <nfarvard@stevens.edu>',
    to: 'insert_email_here@stevens.edu',
    subject: 'Hello World',
    text: 'testing'
}, (err, info) => {
    if (err)
    {
        console.error(err);
    }
    else
    {
        console.dir(info);
    }
});