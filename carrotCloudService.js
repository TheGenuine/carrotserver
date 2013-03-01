// Load the http module to create an http server.
var http = require('http');
var net = require('net');
var s = new net.Server();
var dataListener = function(data) {
	console.log("Received Data");
	console.log("Handling input ...");
	var response = require('./dataHandler').handle(data);
	console.log("result was " + response);
};

s.on('connection', function(socket) { 
  console.log("Connection!"); 
  socket.setEncoding("UTF-8");
  socket.on('data', dataListener);
});

s.on('close', function(had_error) {
	console.log("Disconnected");
});
console.log("Server listening");
s.listen(42424);

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});

  response.end("<html><h1><code>Welcome to Node.js on CloudBees</code></h1>\
    <code>Made with a <a href='https://github.com/CloudBees-community/nodejs-clickstart'>ClickStart</a></code><p>\
    <code>How it <a href='https://github.com/CloudBees-community/node-clickstack'>works</a> (a ClickStack)\
     and <a href='http://developer.CloudBees.com'>docs</a></code><p><p></html>");
});


server.listen(80);

// Put a friendly message on the terminal
console.log("Node Server running");
