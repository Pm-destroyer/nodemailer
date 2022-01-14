const express = require('express');
const app = express();
const nodeoutlook = require('nodejs-nodemailer-outlook');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587,
    auth: {
        user: 'pritam.mondal@adamastechconsulting.com',
        pass: 'Destroyer@7044'
    },
    tls: {
        // rejectUnauthorized: false,
        ciphers:'SSLv3'
    }
});

let mailoption = {
    from: 'pritam.mondal@adamastechconsulting.com',
    to: 'neelabja@adamastechconsulting.com',
    subject: 'Testing',
    text: 'Yo man!',
    attachment: [
        {
            path: '/'
        }
    ]
}

transporter.sendMail(mailoption, (err, response) => {
    if(err)
        console.log(err)
    else console.log(response);
})