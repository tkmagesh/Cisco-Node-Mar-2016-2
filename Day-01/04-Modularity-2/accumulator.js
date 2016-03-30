/*
	Create a accumulator.js that returns an object exhibiting the following methods
		- add(x)
		- subtract(x)
		- multiply(x)
		- divide(x)
		- getResult()

	var acc = require('./accumulator.js');
	acc.add(100);
	acc.subtract(50);
	acc.multiply(10);
	acc.divide(2);
	console.log(acc.getResult()); //-> 250
*/
module.exports = function(){
	var result = 0;
	return {
		add : function(x){
			result += x;
		},
		subtract : function(x){
			result -= x;
		},
		multiply : function(x){
			result *= x;
		},
		divide : function(x){
			result /= x;
		},
		getResult : function(){
			return result;
		}
	}
};