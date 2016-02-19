import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.js';
import { initApp } from './actions/initializeActions';
import configureStore from './store/configureStore.js';

const store = configureStore();

// init dispatch !
// Pull data here before rendering anything
store.dispatch(initApp());

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
