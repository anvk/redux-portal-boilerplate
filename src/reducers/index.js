import { combineReducers } from 'redux';
import { routeReducer } from 'react-router-redux';

import counter from './counter.js';
import user from './user.js';
import tabLocation from './tabLocation.js';
import auth from './auth.js';
import loginPage from './loginPage.js';

export default combineReducers({
  tabLocation,
  counter,
  user,
  auth,
  loginPage,

  routing: routeReducer
});
