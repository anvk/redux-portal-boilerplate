import expect from 'expect';
import reducer, { initialState } from '../../src/reducers/loginPage.js';
import * as types from '../../src/constants/actionTypes.js';

describe('loginPage reducer:', () => {
  it('initial state', () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it('changeValue actionType: name', () => {
    const email = 'johnDoe@gmail.com';

    const action = {
      type: types.LOGIN_FORM_CHANGE_VALUE,
      name: 'email',
      value: email
    };

    const newState = reducer(initialState, action);
    expect(newState.email).toEqual(email);
  });

  it('changeValue actionType: password', () => {
    const password = 'qazwsx123';

    const action = {
      type: types.LOGIN_FORM_CHANGE_VALUE,
      name: 'password',
      value: password
    };

    const newState = reducer(initialState, action);
    expect(newState.password).toEqual(password);
  });

  describe('isTryingToLogin should be false', () => {
    const testTryingToLogin = (actionType) => {
      const state = { isTryingToLogin: true };
      const action = { type: actionType };
      const expectedState = { isTryingToLogin: false };

      const actionOne = { type: actionType };

      const newState = reducer(state, action);

      expect(newState).toEqual(expectedState);
    };

    it('login failure', () => {
      testTryingToLogin(types.LOGIN_FORM_LOGIN_FALIURE);
    });

    it('login success', () => {
      testTryingToLogin(types.LOGIN_FORM_LOGIN_SUCCESS);
    });

    it('logout success', () => {
      testTryingToLogin(types.LOGIN_FORM_LOGOUT_SUCCESS);
    });
  });
});
