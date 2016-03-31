var path = require('path'),
	fs = require('fs')

var staticExtns = ['.html', '.js', '.png', '.ico', '.json', '.xml'];
function isStatic(resource){
	return staticExtns.indexOf(path.extname(resource)) !== -1;
}

module.exports = function(req, res){
	var resource = path.join(__dirname, req.url.pathname);
	if (isStatic(resource)){
		if (!fs.existsSync(resource)){
			res.statusCode = 404;
			res.end();
			return;
		}
		var stream = fs.createReadStream(resource);
		stream.pipe(res);
	} 
}
