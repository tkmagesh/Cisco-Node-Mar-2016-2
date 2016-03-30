var fs = require('fs');
var filename = './test.txt';

var stream = fs.createReadStream(filename, {encoding : 'utf8'}); //returns a readable stream
/* Events of readable stream - open, data, end, close, error*/

var readCount = 0;
stream.on('data', function(chunk){
	++readCount;
	console.log(chunk);
});
stream.on('end', function(){
	console.log('===================== eod of stream ======================= with ' + readCount + ' reads');
});
