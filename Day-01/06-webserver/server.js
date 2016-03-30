var http = require('http'),
	path = require('path'),
	fs = require('fs'),
	querystring = require('querystring'),
	url = require('url'),
	calculator = require('./calculator');

var staticExtns = ['.html', '.js', '.png', '.ico', '.json', '.xml'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}
var server = http.createServer(function(req, res){
	var urlObj = url.parse(req.url);
	var resource = path.join(__dirname, urlObj.pathname);
	if (isStatic(resource)){
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resource);
		stream.pipe(res);
	} else if (urlObj.pathname === '/calculator' && req.method === 'GET'){
		var input = querystring.parse(urlObj.query);
		var n1 = parseInt(input.n1, 10),
			n2 = parseInt(input.n2, 10),
			op = input.op;

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (urlObj.pathname === '/calculator' && req.method === 'POST'){
		var reqData = '';
		req.on('data', function(chunk){
			reqData += chunk;
		});
		req.on('end', function(){
			console.log('incoming data -> ', reqData);
			var input = querystring.parse(reqData);
			var n1 = parseInt(input.n1, 10),
				n2 = parseInt(input.n2, 10),
				op = input.op;

			var result = calculator[op](n1, n2);
			res.write(result.toString());
			res.end();	
		});
	} else {
		res.statusCode = 404;
		res.end();
	}
});

server.listen(8080);
console.log('Server listening on port 8080');