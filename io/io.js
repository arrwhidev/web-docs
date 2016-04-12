const socket = require('socket.io-client')('http://localhost:1337');
import * as Actions from '../actions/Actions';

export const write = data => {
    socket.emit('wd-markdown', data);
};

export default ({ dispatch }) => {
    socket.on('wd-users', numUsers => {
        dispatch(Actions.recvUsers(numUsers));
    });

    socket.on('wd-start-markdown', diffObjs => {
        Object.keys(diffObjs).map(key => {
            if (diffObjs.hasOwnProperty(key)) {
                dispatch(Actions.recvText(diffObjs[key]));
            }
        });
    });

    socket.on('wd-markdown', diffObj => {
        dispatch(Actions.recvText(diffObj));
    });
};
