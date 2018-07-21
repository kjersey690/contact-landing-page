
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
const xoauth2 = require('xoauth2');
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
    
})
smtpTransport = nodemailer.createTransport(smtpTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    xoauth2: xoauth2.createXOAuth2Generator({
        user: 'kjersey690@gmail.com',
    clientId: '221290262573-298vqrbig83skm8ppommci7emmfbgjdd.apps.googleusercontent.com',
    clientSecret: 'BcOaLMdRl-23A32SUNS2osq0',
    refreshToken: '1/a-VJSPh6BvHx7d9oTyhTrerHoqMvsBr-Pk9LYtrwpJU',
     accessToken: 'ya29.Glv_BRjxkfRkd3wiBinmq4aXYXge0jp1p1XeP36xWgu213tffruQvKAT7YYkJHTU6rbA0vYdNSCs-njf-oXBDhaiNruSDo4QUyaeWo18-1aumUrVD6TTqAslzPBo'
    })
    
    
  }
}));
app.post('/send-email', function(req, res) {
    
    var mailOptions = {
        from: '<omonataw@Aol.com>', // sender address
        to: "kjersey690@gmail.com", // list of receivers
        subject: 'Request ', // Subject line
        text: req.body.message
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

