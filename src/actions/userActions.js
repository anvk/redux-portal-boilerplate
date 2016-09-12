import * as types from '../constants/actionTypes.js';
import { pageError } from './initializeActions.js';
import * as githubApi from '../api/githubApi.js';

export const changeValue = (name, value) => ({
  type: types.USER_CHANGE_VALUE,
  name,
  value
});

// GitHub repo also returns a property type. so we need to deal with it
export const searchFinished = (result) => ({
  ...result,
  userType: result.type,
  type: types.USER_SEARCH_FINISHED
});

export const searchFetching = () => ({
  type: types.USER_SEARCH_FETCHING
});

export const search = (args = {}) => {
  return (dispatch, getState) => {
    if (getState().repos.isFetching) {
      return;
    }

    dispatch(searchFetching());

    const promise = githubApi.getUser(args);

    promise
      .then(result => dispatch(searchFinished(result)))
      .catch(error => {
        dispatch(searchFinished());
        dispatch(pageError(error));
      });

    return promise;
  };
};
