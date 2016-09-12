// Browser support of missing ES6 features (mostly for IE)
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes.js';
import { initApp } from './actions/initializeActions';
import configureStore from './store/configureStore.js';
import injectTapEventPlugin from 'react-tap-event-plugin';

// required for material-ui module
injectTapEventPlugin();

const store = configureStore();

// init dispatch !
// Pull data here before rendering anything
store.dispatch(initApp());

//-------------------------------------------------------------//
//    STARTING POINT                                           //
//-------------------------------------------------------------//
ReactDOM.render(
  <Provider store={store}>
    <Routes store={store} />
  </Provider>,
  document.getElementById('app')
);
