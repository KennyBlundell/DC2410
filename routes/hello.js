var express = require('express');
var router = express.Router();



// what to do in the event of a get request
router.get('/',function(req,res){
	res.send('Hello, World!');
});


//what to do in the event of a post request
router.post('/', function(Req,res){
	res.status(405).send();
});



// basically the / defines "who" the given function applies to e.g. /people, /pets 

/*
	router.post('/people', function(Req,res){
		res.status(405).send();
	});

*/


//allows to be imported
module.exports = router;