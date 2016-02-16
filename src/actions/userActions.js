import * as types from '../constants/actionTypes.js';

export function changeValue(name, value) {
  return {
    type: types.CHANGE_VALUE,
    name,
    value
  };
};
