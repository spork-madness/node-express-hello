
const express = require("express");
const app = express(); 
const path = require('path');
const os = require('os');
let cnt = 0;

// static page serving
app.use(express.static(path.join(__dirname, 'html')));

var PORT = process.env.PORT || 8080;

app.get("/", async(req,res,next) => {
  res.render('index');
})

app.get("/hello", async(req, res) => {
	try {
		res.end(`Node Hello on ${os.hostname()}:${PORT} - ${cnt++} \n`);
	} catch (err) {
		console.error(err.message);
	}  
})


app.listen(PORT, function () {
  console.log('my Node app listening on PORT ' + PORT + '!');
});