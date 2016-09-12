import * as types from '../constants/actionTypes.js';

export const changeTab = (tabLocation) => ({
  type: types.SHARED_CHANGE_TAB,
  tabLocation
});
