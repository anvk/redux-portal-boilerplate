import * as types from '../constants/actionTypes.js';

export const changeValue = (name, value) => ({
  type: types.CHANGE_VALUE,
  name,
  value
});
