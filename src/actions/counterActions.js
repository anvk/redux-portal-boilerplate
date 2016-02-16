import * as types from '../constants/actionTypes.js';

export function increment() {
  return {
    type: types.INCREMENT
  };
};

export function decrement() {
  return {
    type: types.DECREMENT
  };
};
