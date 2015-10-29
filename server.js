var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var lineDiffs = {};
var numUsers = 0;

http.listen(1337, function() {
	console.log('Server started on localhost:1337');
});

io.on('connection', function(socket) {
	if(lineDiffs !== []) socket.emit('wd-start-markdown', lineDiffs);
	numUsers++;
	io.emit('wd-users', numUsers);

	socket.on('wd-markdown', function (diffObj) {
		lineDiffs[diffObj.line] = diffObj;
		io.emit('wd-markdown', diffObj);
	});

	socket.on('disconnect', function () {
		numUsers--;
		io.emit('wd-users', numUsers);
	});
});
