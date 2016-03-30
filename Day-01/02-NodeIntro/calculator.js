/*
create a calculator object that has the following methods
	- add(x,y)
	- subtract(x,y)
	- multiply(x,y)
	- divide(x,y)

Invoke all the methods for x = 200 and y = 100 and print the result
*/

var calculator = {
	add : function(x,y){
		return x + y;
	},
	subtract : function(x,y){
		return x - y;
	},
	multiply : function(x,y){
		return x * y;
	},
	divide : function(x,y){
		return x / y;
	}
}
var x = 200,
	y = 100;

console.log(calculator.add(x,y));
console.log(calculator.subtract(x,y));
console.log(calculator.multiply(x,y));
console.log(calculator.divide(x,y));
