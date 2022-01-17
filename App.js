const express = require('express');
const app = express();
const nodeoutlook = require('nodejs-nodemailer-outlook');
const pdf2base64 = require('pdf-to-base64');
var fs = require('fs');
const base64 = require('base64topdf');

let encodedPdf = base64.base64Encode('sample.pdf');

let decodedBase64 = base64.base64Decode( encodedPdf, 'sample.pdf');

console.log(typeof encodedPdf);

let mailoption = {
    auth: {
        user: 'pritam.mondal@adamastechconsulting.com',
        pass: 'Destroyer@7044'
    },
    from: 'pritam.mondal@adamastechconsulting.com',
    to: 'neelabja@adamastechconsulting.com',
    subject: 'Testing',
    text: 'Yo man!!!!!!!!!!!!!!!',
    attachments: [
        {   
            filename: 'text1.txt',
            content: encodedPdf,
            encoding: 'base64'
        }
    ],
    onError: (e) => { console.log(e) },
    onSuccess: (i) => { console.log(i) }

}

nodeoutlook.sendEmail(mailoption)
