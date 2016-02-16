import * as types from '../constants/actionTypes.js';
import { UPDATE_LOCATION } from 'redux-simple-router';

const initialState = null;

export default function counter(state = initialState, action) {
  switch(action.type) {
    case types.INITIALIZE:
      return action.value;
    case UPDATE_LOCATION:
      const { location } = action;
      if (!location || !location.state || !location.state.counter) {
        return state;
      }
      return location.state.counter;
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;

    default:
      // nothing to do
      return state;
  }
};
