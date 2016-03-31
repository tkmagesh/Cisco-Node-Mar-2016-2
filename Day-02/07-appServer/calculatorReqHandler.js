var querystring = require('querystring'),
	calculator = require('./calculator');

module.exports = function(req, res){
	if (req.url.pathname === '/calculator' && req.method === 'GET'){
		var input = querystring.parse(req.url.query);
		var n1 = parseInt(input.n1, 10),
			n2 = parseInt(input.n2, 10),
			op = input.op;

		var result = calculator[op](n1, n2);
		res.write(result.toString());
		res.end();
	} else if (req.url.pathname === '/calculator' && req.method === 'POST'){
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
	}
}