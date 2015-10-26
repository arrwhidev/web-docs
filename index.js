import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App.js';
import configureStore from './store/WebDocsStore.js';

const store = configureStore();
const PANEL = document.getElementById('web-panel');

React.render(<Provider store={store}><App /></Provider>, PANEL);
