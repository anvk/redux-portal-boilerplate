import proxyquire from 'proxyquire';
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as types from '../../src/constants/actionTypes.js';

let authApiStub = {};
const initializeActions = {
  pageError: () => ({ type: types.PAGE_ERROR })
};
const actions = proxyquire(
  '../../src/actions/loginPageActions.js',
  {
    '../api/authApi.js': authApiStub,
    './initializeActions.js': initializeActions
  }
);

// in case we use getState() in our thunk we could mock the state
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe.only('loginPageAction Tests', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: { username: 'admin user' }
    });
  });

  it('change value', () => {
    const name = 'username';
    const value = 'John Doe';

    const action = {
      type: types.LOGIN_FORM_CHANGE_VALUE,
      name,
      value
    };

    expect(actions.changeValue(name, value)).toEqual(action);
  });

  it('logout', () => {
    const action = { type: types.LOGIN_FORM_LOGOUT_SUCCESS };

    expect(actions.logout()).toEqual(action);
  });

  it('login success', () => {
    const username = 'John Doe';
    const password = 'password';
    const apiResult = { response: 'OK' };

    authApiStub.authenticate = () => {
      return new Promise(resolve => resolve(apiResult));
    };

    const expectedActions = [
      { type: types.LOGIN_FORM_LOGIN_STARTED },
      { type: types.LOGIN_FORM_LOGIN_SUCCESS, ...apiResult }
    ];

    const spy = expect.spyOn(authApiStub, 'authenticate').andCallThrough();

    return store.dispatch(actions.login(username, password))
      .then(() => {
        const actualActions = store.getActions();
        expect(spy).toHaveBeenCalledWith(username, password);
        expect(actualActions).toEqual(expectedActions);
      });
  });

  it('login failure', () => {
    const username = 'John Doe';
    const password = 'password';

    authApiStub.authenticate = () => {
      return new Promise((resolve, reject) => {
        reject('error');
      });
    };

    const expectedActions = [
      { type: types.LOGIN_FORM_LOGIN_STARTED },
      { type: types.LOGIN_FORM_LOGIN_FALIURE },
      { type: types.PAGE_ERROR }
    ];

    return store.dispatch(actions.login(username, password))
      .then(() => {})
      .catch(() => {
        const actualActions = store.getActions();
        expect(actualActions).toEqual(expectedActions);
      });
  });
});
