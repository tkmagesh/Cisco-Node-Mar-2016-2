var http = require('http'),
	logger = require('./logger'),
	dataParser = require('./dataParser.js'),
	serveStatic = require('./serveStatic.js'),
	calculatorReqHandler = require('./calculatorReqHandler.js'),
	notFoundHandler = require('./notFoundHandler.js');

var middlewares = [logger, dataParser, serveStatic, calculatorReqHandler, notFoundHandler];

function exec(middlewares, req, res){
	var first = middlewares[0],
		remaining = middlewares.slice(1),
		next = function(){
			exec(remaining, req, res);
		};
		if (typeof first === 'function')
			first(req, res, next);
}
var server = http.createServer(function(req, res){
	exec(middlewares, req, res);
});

server.listen(8080);
console.log('Server listening on port 8080');