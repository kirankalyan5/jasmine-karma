require(['index'], function() {

	require(['hello', 'mathOperation'], 
	function(hello, mathOperation) {
		console.log(hello);
		var mathOperation = require("mathOperation");
		console.log(mathOperation.add(2,3));
	});

});