import * as types from '../constants/actionTypes.js';

const initialState = {
  users: [],
  isFetching: false
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case types.USERS_SEARCH_FETCHING:
      return {
        ...state,
        isFetching: true,
        users: []
      };
    case types.USERS_SEARCH_FINISHED:
      return {
        ...state,
        isFetching: false,
        users: action.result
      };
    default:
      // nothing to do
      return state;
  }
}
