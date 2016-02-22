import expect from 'expect';
import user from '../../src/reducers/user.js';
import * as types from '../../src/constants/actionTypes.js';

const initialState = {
  firstName: '',
  lastName: ''
};

describe('User reducer:', () => {
  it('should return the initial state', () => {
    expect(
      user(initialState, {})
    ).toEqual(initialState);
  });

  it('should handle change', () => {
    const stateAfterChange = {
      firstName: 'Alex',
      lastName: ''
    };
    expect(
      user(initialState, {
        type: types.CHANGE_VALUE,
        name: 'firstName',
        value: 'Alex'
      })
    ).toEqual(stateAfterChange);
  });
});
