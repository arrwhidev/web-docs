import * as types from '../actions/ActionTypes.js';

const initialState = {
    activePage: 'edit',
    markdown: ''
};

export default function todos(state = initialState, action) {
    switch (action.type) {
        case types.SET_ACTIVE_PAGE:
            return Object.assign({}, state, {activePage: action.newActivePage});
        case types.UPDATE_TEXT:
            return Object.assign({}, state, { markdown: action.newText });
        default:
            return state;
    }
}
