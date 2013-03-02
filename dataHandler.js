exports.handle = function(data) {
	console.log("Received data" + data);
	var carrotData = JSON.parse(data);

	var db = require('nano')('http://localhost:5984/carrot');
	
	console.log("Persisting data");
	db.insert(carrotData, '',  function(err, body) {
	  if (!err)
	  	console.log(body);
	});

	return true;
}