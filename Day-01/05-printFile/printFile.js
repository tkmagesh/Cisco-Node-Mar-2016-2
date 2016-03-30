/* node printFile.js <<filename>>
process.argv
*/
var fs = require('fs');
/*var fileContents = fs.readFileSync('./test.txt', {encoding : 'utf8'});
console.log(fileContents);*/


fs.readFile('./test.txt', {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log(err);
		return;
	}
	console.log(fileContents);
});