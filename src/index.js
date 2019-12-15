import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import dotenv from 'dotenv';

import configureStore from './configureStore';
import App from './App';

dotenv.load();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('./firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch((err) => {
      console.log('Service worker registration failed, error:', err);
    });
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);
