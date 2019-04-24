console.log('index.js executing');

var express = require('express');
var router = require('./routes/hello.js');
var app = express();



// whenever i get something of root /, use router as defined
app.use('/', router);

// basically, here the logic is actually defined within the Router object or whatnot, which can be imported into the main file


var port = 3000;

app.listen(port,function(){
	console.log('Listening on port ' + port);
});