var http = require('http'),
	dataParser = require('./dataParser.js'),
	serveStatic = require('./serveStatic.js'),
	calculatorReqHandler = require('./calculatorReqHandler.js'),
	notFoundHandler = require('./notFoundHandler.js');

var server = http.createServer(function(req, res){
	dataParser(req, res);
	serveStatic(req, res);
	calculatorReqHandler(req, res);
	notFoundHandler(req, res);
});

server.listen(8080);
console.log('Server listening on port 8080');