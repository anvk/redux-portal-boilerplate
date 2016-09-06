import * as types from '../constants/actionTypes.js';

const initialState = {
  tabLocation: undefined,
  emojis: [],
  gitignoreTemplates: []
};

export default function shared(state = initialState, action) {
  switch (action.type) {
    case types.INITIALIZE:
      return {
        ...state,
        emojis: action.emojis,
        gitignoreTemplates: action.gitignoreTemplates
      };
    case types.SHARED_CHANGE_TAB:
      return {
        ...state,
        tabLocation: action.tabLocation
      };
    default:
      // nothing to do
      return state;
  }
}
