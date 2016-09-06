import * as types from '../constants/actionTypes.js';

const initialState = {
  repos: [],
  isFetching: false
};

export default function repos(state = initialState, action) {
  switch (action.type) {
    case types.REPOS_SEARCH_FETCHING:
      return {
        ...state,
        isFetching: true,
        repos: []
      };
    case types.REPOS_SEARCH_FINISHED:
      return {
        ...state,
        isFetching: false,
        repos: action.result
      };
    default:
      // nothing to do
      return state;
  }
}
