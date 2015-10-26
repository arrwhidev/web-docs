var socket = require('socket.io-client')('http://localhost:1337');

module.exports = {
    write: (data) => {
        socket.emit('data', data);
    },

    setReadDataCallback: (func) => {
        socket.on('data', func);
    },

    setReadUsersCallback: (func) => {
        socket.on('users', func);
    }
};
