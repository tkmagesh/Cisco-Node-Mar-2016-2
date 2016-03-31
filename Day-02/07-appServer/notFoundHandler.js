module.exports = function(req, res){
	console.log('log from notFoundHandler');
	res.statusCode = 404;
	res.end();
}