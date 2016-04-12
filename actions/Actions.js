import * as types from './ActionTypes.js';

export const recvText = diffObj => ({ type: types.IO_RECV_TEXT, diffObj });
export const recvUsers = numUsers => ({ type: types.IO_RECV_USERS, numUsers });
