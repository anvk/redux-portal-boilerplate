import * as types from '../constants/actionTypes.js';

const initialState = {
  email: '',
  password: '',
  isTryingToLogin: false
};

export default function loginPage(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_FORM_CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value
      };
    case types.LOGIN_FORM_LOGIN_STARTED:
      return {
        ...state,
        password: undefined,
        isTryingToLogin: true
      };
    case types.LOGIN_FORM_LOGIN_FALIURE:
    case types.LOGIN_FORM_LOGIN_SUCCESS:
    case types.LOGIN_FORM_LOGOUT_SUCCESS:
      return {
        ...state,
        isTryingToLogin: false
      };
    default:
      // nothing to do
      return state;
  }
}
