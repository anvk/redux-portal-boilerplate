import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import invariant from 'redux-immutable-state-invariant';
import logger from 'redux-logger';
import rootReducer from '../reducers/index.js';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import * as reducers from '../reducers';

export default function configureStore(initialState) {
  const browserMiddleware = routerMiddleware(browserHistory);

  const finalCreateStore = compose(
    applyMiddleware(invariant(), thunk, logger(), browserMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = reducers;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
