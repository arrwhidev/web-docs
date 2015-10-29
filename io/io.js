var socket = require('socket.io-client')('http://localhost:1337');

module.exports = {
    write: (data) => {
        socket.emit('wd-markdown', data);
    },

    setStartMarkdownCallback: (func) => {
        socket.on('wd-start-markdown', func);
    },

    setReadDataCallback: (func) => {
        socket.on('wd-markdown', func);
    },

    setReadUsersCallback: (func) => {
        socket.on('wd-users', func);
    }
};
