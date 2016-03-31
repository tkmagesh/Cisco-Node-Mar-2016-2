var path = require('path'),
	fs = require('fs')

var staticExtns = ['.html', '.js', '.png', '.ico', '.json', '.xml'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	console.log('log from serveStatic');
	var resource = path.join(__dirname, req.url.pathname);
	if (isStatic(resource)){
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		
		//Async
		var stream = fs.createReadStream(resource);
		//stream.pipe(res);
		stream.on('data', function(chunk){
			console.log('writing file chunk to response object');
			res.write(chunk);
		});

		stream.on('end', function(){
			console.log('finished writing file chunk to response object');
			res.end();
		});

		//Sync
		/*var fileContents = fs.readFileSync(resource, {encoding : 'utf8'});
		res.write(fileContents);
		console.log('finished writing file response object');
		res.end();*/
	} 
}
