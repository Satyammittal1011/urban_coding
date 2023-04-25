const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'myemail@gmail.com',
    pass: 'password'
  }
});

var mailOptions = {
    from: 'myemail@gmail.com',
    to: 'toemail@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
        res.send('Please try again!');
    } else {
        console.log('Email sent: ' + info.response);
        res.send('Thanks for registering! Please confirm your email! We have sent a link!'); 
    }
});