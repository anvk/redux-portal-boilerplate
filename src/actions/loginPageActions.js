import * as types from '../constants/actionTypes.js';
import * as authApi from '../api/authApi.js';
import { pageAlert, pageError } from './initializeActions.js';

export const changeValue = (name, value) => ({
  type: types.LOGIN_FORM_CHANGE_VALUE,
  name,
  value
});

export const startLogin = () => ({
  type: types.LOGIN_FORM_LOGIN_STARTED
});

export const loginSuccess = (result) => ({
  type: types.LOGIN_FORM_LOGIN_SUCCESS,
  ...result
});

export const loginFailure = () => ({
  type: types.LOGIN_FORM_LOGIN_FALIURE
});

export const logout = () => ({
  type: types.LOGIN_FORM_LOGOUT_SUCCESS
});

export const login = (email, password) => {
  return (dispatch) => {
    dispatch(startLogin());

    const loginPromise = authApi.authenticate(email, password);

    loginPromise
      .then(result => dispatch(loginSuccess(result)))
      .catch(error => {
        dispatch(loginFailure());
        dispatch(pageError(error));
      });

    return loginPromise;
  };
};
