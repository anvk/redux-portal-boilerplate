import Promise from 'promise';
import toastr from 'toastr';
import { isObject } from 'util';
import * as githubApi from '../api/githubApi.js';

import * as types from '../constants/actionTypes.js';

export const pageError = (error) => {
  if (isObject(error) && error.response) {
    const { body, text } = error.response;
    let errorMessage;

    if (body && body.failed && body.failed.length) {
      errorMessage = body.failed[0].errorMessage;
    } else if (body && body.errorMessage) {
      errorMessage = body.errorMessage;
    }

    toastr.error(errorMessage || text);
    return { type: types.PAGE_ERROR, error: errorMessage || text };
  }

  toastr.error(error);

  return { type: types.PAGE_ERROR, error };
};

export const initialize = (data) => ({ type: types.INITIALIZE, ...data });

export const initApp = () => {
  return (dispatch) => {
    Promise.all([
      githubApi.getEmojis(),
      githubApi.getGitignoreTemplates()
    ])
    .then(values => {
      const [ emojis, gitignoreTemplates ] = values;

      let emojisArray = [];

      // convert object into array of objects
      for (let emojiText in emojis) {
        if (emojis.hasOwnProperty(emojiText)) {
          emojisArray.push({ emojiText, emojiImage: emojis[emojiText] });
        }
      }

      dispatch(initialize({ emojis: emojisArray, gitignoreTemplates }));
    })
    .catch(error => dispatch(pageError(error)));
  };
};
