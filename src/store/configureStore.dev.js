import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import history from '../history.js';
import { syncHistory } from 'redux-simple-router';
import rootReducer from '../reducers/index.js';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history);

// Middleware you want to use in production:
const enhancer = compose(
  applyMiddleware(invariant(), thunk, reduxRouterMiddleware, logger()),
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
