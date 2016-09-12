import * as types from '../constants/actionTypes.js';

const initialState = {
  login: '',
  name: '',
  url: '',
  avatar_url: '',
  location: '',
  email: '',
  isFetching: false,
  loaded: false
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case types.USER_CHANGE_VALUE:
      return {
        ...state,
        [action.name]: action.value
      };
    case types.USER_SEARCH_FETCHING:
      return {
        ...initialState,
        isFetching: true
      };
    case types.USER_SEARCH_FINISHED:
      return {
        ...state,
        isFetching: false,
        loaded: true,
        login: action.login,
        name: action.name,
        url: action.url,
        avatar_url: action.avatar_url,
        location: action.location,
        email: action.email
      };
    default:
      // nothing to do
      return state;
  }
}
