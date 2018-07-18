

const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

app.listen(3000);
console.log("listening on port 3000");

app.use('/static', express.static(path.join(__dirname, 'public')))
app.get("/", (req, res)=>{
  res.send("hello world");
})
app.use(bodyParser.urlencoded({ extended: false }));

smtpTransport = nodemailer.createTransport(smtpTransport({
  service: 'Gmail',
  auth: {
    user: '',
    pass: ''
  }
}));
app.post('/send-email', function(req, res) {
	console.log(req.body.to);
    var mailOptions = {
        from: '<omonataw@Aol.com>', // sender address
        to: "kjersey690@gmail.com", // list of receivers
        subject: 'Request ', // Subject line
        text: req.body.to
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


// Google maps api
// function initMap(){
// 	var location = {lat: 39.382017, lng: -74.555795};
// 	var map = new google.maps.Map(document.getElementById("map"),
// 		{zoom: 15,
// 			center: location
// 		})
//   var marker = new google.maps.Marker({
//     position: location,
//     map: map
//   });
// }
