import * as types from './ActionTypes.js';

export function setActivePage(page) {
    return { type: types.SET_ACTIVE_PAGE, newActivePage: page };
}

export function updateText(diffObj) {
    return { type: types.UPDATE_TEXT, diffObj };
}
