import Promise from 'promise';

import * as types from '../constants/actionTypes.js';
import * as stubApi from '../api/stubApi.js';

export function pageError(error) {
  return {
    type: types.PAGE_ERROR,
    error
  };
};

export function initialize(data) {
  return {
    type: types.INITIALIZE,
    value: data
  };
};

function initialCounterLoaded(state) {
  return state.counter !== null;
};

export function initApp() {
  return (dispatch, getState) => {

    // do not dispatch if we already got the number
    if (initialCounterLoaded(getState())) {
      return Promise.resolve();
    };

    stubApi.getInitialCounter()
    .then(data => dispatch(initialize(data)))
    .catch(error => dispatch(pageError(error)));
  };
};
