import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import history from '../history.js';
import { syncHistory } from 'redux-simple-router';
import rootReducer from '../reducers/index.js';

// Sync dispatched route actions to the history
const reduxRouterMiddleware = syncHistory(history);

// Middleware you want to use in production:
const enhancer = compose(
  applyMiddleware(thunk, reduxRouterMiddleware)
);

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};
