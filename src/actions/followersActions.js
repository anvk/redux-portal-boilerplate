import * as types from '../constants/actionTypes.js';
import { pageError } from './initializeActions.js';
import * as githubApi from '../api/githubApi.js';

export const searchFinished = (result = []) => ({
  type: types.FOLLOWERS_SEARCH_FINISHED,
  result
});

export const searchFetching = () => ({ type: types.FOLLOWERS_SEARCH_FETCHING });

export const search = (args = {}) => {
  return (dispatch, getState) => {
    if (getState().repos.isFetching) {
      return;
    }

    dispatch(searchFetching());

    const promise = githubApi.getFollowers(args);

    promise
      .then(result => dispatch(searchFinished(result)))
      .catch(error => {
        dispatch(searchFinished());
        dispatch(pageError(error));
      });

    return promise;
  };
};
