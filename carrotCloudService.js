// Load the http module to create an http server.
var net = require('net');
var express = require('express');

/**
 * Web server
 */
var app = express();
app.use(express.logger());
app.use(express.static(__dirname + '/www'));

app.post('/', function(req, resp, next){
	resp.sendfile(__dirname + '/www/home.html');
});

app.listen(80);
console.log("Web Server listening on Port 80")

/**
 * Low level data server
 */
var s = new net.Server();
var socket_global;

var dataListener = function(data) {
	console.log("Received Data");
	console.log("Handling input ...");
	var result = require('./dataHandler').handle(data);
	if(result && socket_global != null) {
		socket_global.send(200);
	} else {
		socket_global.send(500);
	}
};

s.on('connection', function(socket) { 
  console.log("Connection!"); 
  socket.setEncoding("UTF-8");
  socket_global = socket;
  socket.on('data', dataListener);
});

s.on('close', function(had_error) {
	socket_global = null;
	console.log("Disconnected");
});
s.listen(42424);
console.log("Data Server listening on Port 42424");

// Put a friendly message on the terminal
console.log("Node Server running");
