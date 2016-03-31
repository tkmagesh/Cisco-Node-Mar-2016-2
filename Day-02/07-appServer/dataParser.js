var url = require('url');

module.exports = function(req, res){
	console.log('log from dataParser');
	req.url = url.parse(req.url);
}