var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('Hello world - test3 - ver1.0!\n');
});

var port = 9000;
app.listen(port);
console.log('Listening on port', port);


