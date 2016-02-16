import * as types from '../constants/actionTypes.js';

const initialState = {
  firstName: '',
  lastName: ''
};

export default function user(state = initialState, action) {
  switch(action.type) {
    case types.CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value
      };

    default:
      // nothing to do
      return state;
  }
};
