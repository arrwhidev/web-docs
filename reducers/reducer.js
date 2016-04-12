import * as types from '../actions/ActionTypes';
import { applyDiff } from '../util/DiffUtils';
import toHtml from '../util/ToHtml';

const initialState = {
    numUsers: 0,
    markdown: '',
    html: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.IO_RECV_TEXT:
            const markdown = applyDiff(state.markdown, action.diffObj);
            const html = toHtml(markdown);
            return Object.assign({}, state, { markdown, html });
        case types.IO_RECV_USERS:
            return Object.assign({}, state, { numUsers: action.numUsers });
        default:
            return state;
    }
};
