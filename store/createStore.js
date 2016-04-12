import { createStore } from 'redux';
import reducer from '../reducers/reducer';

export default () => {
    return createStore(reducer);
}
