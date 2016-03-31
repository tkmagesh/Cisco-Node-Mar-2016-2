function f1Sync(){
	console.log('f1Sync started');
	console.log('f1Sync completed');
}

function f2Sync(){
	console.log('f2Sync started');
	console.log('f2Sync completed');
}

function f3Sync(){
	console.log('f3Sync started');
	console.log('f3Sync completed');
}

function f4Sync(){
	console.log('f4Sync started');
	console.log('f4Sync completed');
}


function f1Async(){
	console.log('f1Async started');
	setTimeout(function(){
		console.log('f1Async completed');
	}, 3000);
}

function f2Async(){
	console.log('f2Async started');
	setTimeout(function(){
		console.log('f2Async completed');	
	}, 3000);
}

function f3Async(){
	console.log('f3Async started');
	setTimeout(function(){
		console.log('f3Async completed');
	}, 3000);
}

function f4Async(){
	console.log('f4Async started');
	setTimeout(function(){
		console.log('f4Async completed');	
	}, 3000);
}

module.exports.runSync = function(){
	f1Sync();
	f2Sync();
	f3Sync();
	f4Sync();
};


module.exports.runAsync = function(){
	f1Async();
	
};