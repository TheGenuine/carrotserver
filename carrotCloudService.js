var net = require('net');
var s = new net.Server();
s.on('connection', function(socket) { 
	socket.write("I'm here");
	console.log("Connection!"); 
});
s.listen(48995);