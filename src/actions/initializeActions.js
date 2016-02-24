import Promise from 'promise';

import * as types from '../constants/actionTypes.js';
import * as stubApi from '../api/stubApi.js';

export const pageError = (error) => ({
  type: types.PAGE_ERROR,
  error
});

export const initialize = (data) => ({
  type: types.INITIALIZE,
  value: data
});

const initialCounterLoaded = state => state.counter !== null;

export const initApp = () => (dispatch, getState) => {
  // do not dispatch if we already got the number
  if (initialCounterLoaded(getState())) {
    return Promise.resolve();
  }

  stubApi.getInitialCounter()
  .then(data => dispatch(initialize(data)))
  .catch(error => dispatch(pageError(error)));
};
