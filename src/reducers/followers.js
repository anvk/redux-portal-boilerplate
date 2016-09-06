import * as types from '../constants/actionTypes.js';

const initialState = {
  followers: [],
  isFetching: false
};

export default function followers(state = initialState, action) {
  switch (action.type) {
    case types.FOLLOWERS_SEARCH_FETCHING:
      return {
        ...state,
        isFetching: true,
        followers: []
      };
    case types.FOLLOWERS_SEARCH_FINISHED:
      return {
        ...state,
        isFetching: false,
        followers: action.result
      };
    default:
      // nothing to do
      return state;
  }
}
