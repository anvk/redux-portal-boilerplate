import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import { syncHistory } from 'react-router-redux';
import { browserHistory } from 'react-router';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(browserHistory);

// Middleware you want to use in production:
const enhancer = compose(
  applyMiddleware(thunk, reduxRouterMiddleware)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};
