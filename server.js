var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var lastData = null;
var numUsers = 0;

http.listen(1337, function() {
	console.log('Server started on localhost:1337');
});

io.on('connection', function(socket) {	
	if(lastData !== null) socket.emit('wd-markdown', lastData);
	numUsers++;
	io.emit('wd-users', numUsers);

	socket.on('wd-markdown', function (data) {
		lastData = data;
		io.emit('wd-markdown', data);
	});

	socket.on('disconnect', function () {
		numUsers--;
		io.emit('wd-users', numUsers);
	});
});
