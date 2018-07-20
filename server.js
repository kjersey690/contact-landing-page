
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

app.listen(3000);
console.log("listening on port 3000");

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// var server = app.listen(app.get('port'), function() {
//   var port = server.address().port;
//   console.log('Magic happens on port ' + port);
// });
app.get('/', (req, res)=>{
    res.send('hello world');
    console.log(req.body);
    console.log(req.body.to);
})
smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: 'kjersey690@gmail.com',
    pass: 'Masbtcal4!'
  }
}));
app.post('/send-email', function(req, res) {
    console.log(req.body.to);
    var mailOptions = {
        from: '<omonataw@Aol.com>', // sender address
        to: "kjersey690@gmail.com", // list of receivers
        subject: 'Request ', // Subject line
        text: req.body.
        // plaintext body

    };
        smtpTransport.sendMail(mailOptions, function(error, info) {
         if (error) {
             return console.log(error);
         }
         console.log('Message sent: ' + info.response);
     });

     res.redirect("/index.html");
 });

