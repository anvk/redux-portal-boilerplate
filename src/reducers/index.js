import { combineReducers } from 'redux';

import counter from './counter.js';
import user from './user.js';
import tabLocation from './tabLocation.js';

export default combineReducers({
  tabLocation,
  counter,
  user
});
