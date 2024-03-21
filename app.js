const express = require('express');
const app = express();
const port = process.env.PORT || 443;
const fs = require('fs')
const https = require('https')


const options = {
	key: fs.readFileSync('/etc/letsencrypt/live/brandonlanoue.net/privkey.pem'),
	cert: fs.readFileSync('/etc/letsencrypt/live/brandonlanoue.net/fullchain.pem')
};


app.get('/blog', (req,res) => {
	res.send("hello World");
});

https.createServer(options, app).listen(port, () =>{
console.log("example app is listening, bu face")
});
