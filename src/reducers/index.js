import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import user from './user.js';
import auth from './auth.js';
import loginPage from './loginPage.js';
import shared from './shared.js';
import repos from './repos.js';
import users from './users.js';
import followers from './followers.js';

export default combineReducers({
  repos,
  user,
  auth,
  loginPage,
  shared,
  users,
  followers,

  routing: routerReducer
});
