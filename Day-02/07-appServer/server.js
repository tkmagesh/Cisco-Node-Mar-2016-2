var http = require('http'),
	logger = require('./logger'),
	dataParser = require('./dataParser.js'),
	serveStatic = require('./serveStatic.js'),
	calculatorReqHandler = require('./calculatorReqHandler.js'),
	notFoundHandler = require('./notFoundHandler.js'),
	app = require('./app');

app.use(logger);
app.use(dataParser);
app.use(serveStatic);
app.use(calculatorReqHandler);
app.use(notFoundHandler);

http.createServer(app).listen(8080);
console.log('Server listening on port 8080');