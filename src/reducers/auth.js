import * as types from '../constants/actionTypes.js';
import { CACHE_DATA } from '../constants/constants.js';
import * as cache from '../utils/cache.js';

export const ROLE_ADMIN = 1;

const logoutState = {
  email: undefined,
  name: undefined,
  expiry: undefined,
  authRole: undefined,
  jwt: undefined,
  isLoggedIn: false
};

const initialState = (cache.read(CACHE_DATA) || {}).auth || logoutState;

export function checkAuth(state) {
  const { isLoggedIn, expiry } = state;

  return isLoggedIn && (new Date() < new Date(expiry));
}

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FORM_LOGIN_SUCCESS:
      state = {
        ...state,
        isLoggedIn: true,
        jwt: action.jwt,
        authRole: action.authRole,
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

      return { ...logoutState };
    default:
      // nothing to do
      return state;
  }
}
