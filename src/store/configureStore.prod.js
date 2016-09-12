import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index.js';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

export default function configureStore(initialState) {
  const browserMiddleware = routerMiddleware(browserHistory);

  const finalCreateStore = compose(
    applyMiddleware(thunk, browserMiddleware)
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  return store;
}
