var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res, next){
	if (req.url.pathname === '/calculator'){
		var input = req.method === 'GET' ? req.url.query : req.body;
		var n1 = parseInt(input.n1, 10),
			n2 = parseInt(input.n2, 10),
			op = input.op;
		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else {
		next();
	}
}