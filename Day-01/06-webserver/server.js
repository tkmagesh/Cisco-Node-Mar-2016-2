var http = require('http'),
	path = require('path'),
	fs = require('fs');

/*
res.statusCode = 404;
res.end();

*/
var server = http.createServer(function(req, res){
	var resource = path.join(__dirname, req.url);
	if (!fs.existsSync(resource)){
		res.statusCode = 404;
		res.end();
		return;
	}
	var stream = fs.createReadStream(resource);
	stream.on('data', function(chunk){
		res.write(chunk);
	});
	stream.on('end', function(){
		res.end();
	});
});

server.listen(8080);
console.log('Server listening on port 8080');