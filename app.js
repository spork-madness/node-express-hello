
const express = require("express");
const app = express(); 
const path = require('path');
const os = require('os');
let cnt = 0;

// static page serving
app.use(express.static(path.join(__dirname, 'html')));
app.get("/", async(req,res,next) => {
  res.render('index');
})

app.get("/hello", async(req, res) => {
	try {
		res.end(`Node Hello on ${os.hostname()}:${cnt++} \n`);
	} catch (err) {
		console.error(err.message);
	}  
})

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('my Node app listening on port ' + port + '!');
});