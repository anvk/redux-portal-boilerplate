import { UPDATE_LOCATION } from 'react-router-redux';
import * as types from '../constants/actionTypes.js';
import { CACHE_DATA, LOGIN_URL } from '../constants/constants.js';
import * as cache from '../utils/cache.js';

export const ROLE_ADMIN = 1;
export const ROLE_USER = 2;

const logoutState = {
  username: undefined,
  email: undefined,
  name: undefined,
  expiry: undefined,
  authRole: undefined,
  jwt: undefined,
  isLoggedIn: false
};

const initialState = (cache.read(CACHE_DATA) || {}).auth || logoutState;

export function checkIsLoggedIn(state) {
  const { isLoggedIn, expiry } = state;

  return isLoggedIn && (new Date() < new Date(expiry));
}

export function checkAuth(options = {}) {
  const {
    authRole,
    allow = [],
    except = []
  } = options;

  if (!authRole) {
    return;
  }

  if (allow.length) {
    if (!allow.includes(authRole)) {
      return;
    }
  }

  if (except.length) {
    if (except.includes(authRole)) {
      return;
    }
  }

  return true;
}

export function adminOnly(authRole) {
  return checkAuth({ authRole, allow: [ROLE_ADMIN] });
}

export function getExpiryTime() {
  const loginPeriodMinutes = 2 * 60; // 2 hours
  const expiry = new Date();
  expiry.setMinutes(expiry.getMinutes() + loginPeriodMinutes);

  return expiry;
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      const { payload } = action;

      if (payload.pathname === LOGIN_URL ||
        !checkIsLoggedIn(state)) {
        return state;
      }

      return {
        ...state,
        expiry: getExpiryTime()
      };
    case types.LOGIN_FORM_LOGIN_SUCCESS:
      state = {
        ...state,
        isLoggedIn: true,
        jwt: action.jwt,
        authRole: action.authRole,
        username: action.username,
        email: action.email,
        expiry: action.expiry,
        name: action.name
      };

      let cacheData = cache.read(CACHE_DATA) || {};
      cacheData.auth = state;
      cache.write(CACHE_DATA, cacheData);

      return state;
    case types.LOGIN_FORM_LOGOUT_SUCCESS:
      cache.clear(CACHE_DATA);

      return logoutState;
    default:
      // nothing to do
      return state;
  }
}
