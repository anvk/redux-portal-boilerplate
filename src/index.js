import React from 'react';
import { Router, Redirect } from 'react-router';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.js';
import { initApp } from './actions/initializeActions';
import { browserHistory } from 'react-router';
import configureStore from './store/configureStore.js';

const store = configureStore();

// init dispatch !
// Pull data here before rendering anything
store.dispatch(initApp());

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Redirect from='/' to='home' />
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
);
