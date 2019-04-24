const chai = require('chai');
const expect = chai.expect;
const request = require('superagent');
const status = require('http-status');


const apiRoot = 'http://localhost:3000/'

describe('hello Api', function(){


	// a variable to store the server in, so the before block can share the same server as the after block. after needs block to close off the server.
	var server;
	
	
	before(function(done){
		//code to start server, needs to call the done callback when it is finished, idk why
		
		
		var express = require('express');
		var app = express();



		// what to do in the event of a get request
		app.get('/',function(req,res){
			res.send('Hello, World!');
		});


		//what to do in the event of a post request
		app.post('/', function(Req,res){
			res.status(405).send();
		});


		var port = 3000;

		
		// incorporate the done callback
		server = app.listen(port,function(){ done()});
		
	
	
	});
	
	
	after(function(){
		// code to stop server, as it happens this code will be synchronous so no need for a done callback
		
		server.close();
	});
	
	// the tests to run, happens prior to the after function obv
	
	it('Get request returns text "Hello, World!.', function(done){
		request.get(apiRoot)
		.end(function(err,res){
			expect(err).to.not.be.an('error');
			expect(res.statusCode).to.equal(status.OK);
			expect(res.text).to.equal('Hello, World!');
			done();
		});
	});
	
	it('POST request is not allowed', function(done){
		request.post(apiRoot)
		.end(function(err,res){
			expect(err).to.be.an('error');
			expect(res.statusCode).to.equal(status.METHOD_NOT_ALLOWED);
			done();
		});
	});
});