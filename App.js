const express = require('express');
const app = express();
const nodeoutlook = require('nodejs-nodemailer-outlook');
const pdf2base64 = require('pdf-to-base64');
var fs = require('fs');
const base64 = require('base64topdf');
var cors = require('cors');

app.use(cors());

app.post('/send_mail/', function (req, resp) {

    let encodedPdf = base64.base64Encode('sample.pdf');

    let decodedBase64 = base64.base64Decode(encodedPdf, 'sample.pdf');

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
                filename: 'sample.pdf',
                content: fs.createReadStream('sample.pdf'),
                encoding: 'base64'
            }
        ],
        onError: (e) => { console.log(e) },
        onSuccess: (i) => { console.log(i) }

    }

    nodeoutlook.sendEmail(mailoption);
    var responseData = {
        status: 'success',
        data: 'true',
        message: 'mail sent successfully'
    }
    resp.send(responseData)
});

app.listen(5000, () => console.log('Server started on port 5000'));
