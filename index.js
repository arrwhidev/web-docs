import React from 'react';
import { Provider } from 'react-redux';
import App from './components/App.js';
import configureStore from './store/WebDocsStore.js';
require("react-tap-event-plugin")(); // Need for onTouchTap - can remove when 1.0

const store = configureStore();
const PANEL = document.getElementById('web-panel');

React.render(<Provider store={store}><App /></Provider>, PANEL);
