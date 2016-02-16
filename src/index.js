import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.js';
import * as InitializeActions from './actions/initializeActions';

import store from './stores/appStore.js';

store.dispatch(InitializeActions.initApp());

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('app')
);
