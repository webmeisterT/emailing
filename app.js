const http = require('http');
const nodemailer = require('nodemailer');
const fs = require('fs');


http.createServer(function (req, res) {
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      });
const transporter = nodemailer.createTransport({
    host: 'mail.missionschannel.org.ng',
    port: 465,
    auth: {
        user: 'kauna@missionschannel.org.ng',
        pass: 'pass'
    }
});

const mailOptions = {
  from: '"Oluwatoyin Akinlua" <kauna@missionschannel.org.ng>',
  to: 'oltyhope2@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'I am sending you this email as a proof of my finished assignment on sending mails through nodemailer in nodejs'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

}).listen(3000, () => { console.log('app starting now on PORT ' + 3000) });
