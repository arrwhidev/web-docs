import * as types from '../actions/ActionTypes.js';
import DiffUtils from '../util/DiffUtils.js';

const initialState = {
    activePage: 'edit',
    markdown: ''
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.SET_ACTIVE_PAGE:
            return Object.assign({}, state, {activePage: action.newActivePage});
        case types.UPDATE_TEXT:
            const newText = DiffUtils.applyDiff(state.markdown, action.diffObj);
            return Object.assign({}, state, { markdown: newText });
        default:
            return state;
    }
}
