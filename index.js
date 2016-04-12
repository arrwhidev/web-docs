import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import reactTapEventPlugin from 'react-tap-event-plugin';
import Panel from './components/Panel';
import createStore from './store/createStore';
import bootstrapIO from './io/io';
import './styles/styles.scss';

reactTapEventPlugin();
const store = createStore();
bootstrapIO(store);

ReactDom.render(
    <Provider store={store}>
        <Panel />
    </Provider>
,document.getElementById('web-panel'));
