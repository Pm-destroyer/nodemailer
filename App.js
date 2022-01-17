var nodeoutlook = require('nodejs-nodemailer-outlook');
var fs = require('fs');
var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

app.post('/send_mail/', function (req, resp) {

    nodeoutlook.sendEmail({
        auth: {
            user: "neelabja@adamastechconsulting.com",
            pass: "Neel@2000"
        },
        from: 'neelabja@adamastechconsulting.com',
        to: 'pritam.mondal@adamastechconsulting.com',
        subject: 'Mail by node-mailer',
        text: 'node mailer mail',
        attachments: [
            {   
                filename: 'test.pdf',
                content: fs.createReadStream('sample.pdf')
            },
        ],
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    });
    var responseData = {
        status: 'success',
        data: 'true',
        message: 'mail sent successfully'
      }
      resp.send(responseData)
  });

  app.listen(5000, () => console.log('Server started on port 5000'));
