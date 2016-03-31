var url = require('url'),
	querystring = require('querystring');

module.exports = function(req, res, next){
	req.url = url.parse(req.url, true);
	req.body = {};
	if (req.method === 'POST'){
		var reqData = '';
		req.on('data', function(chunk){
			reqData += chunk;
		});
		req.on('end', function(){
			req.body = querystring.parse(reqData);
			next();
		});
	} else {
		next();
	}
}