import * as types from '../constants/actionTypes.js';
import { UPDATE_LOCATION } from 'react-router-redux';

const initialState = null;

export default function counter(state = initialState, action) {
  switch (action.type) {
    case types.INITIALIZE:
      return action.value;
    case UPDATE_LOCATION:
      const { payload } = action;
      if (!payload || !payload.state || !payload.state.counter) {
        return state;
      }
      return payload.state.counter;
    case types.INCREMENT:
      return state + 1;
    case types.DECREMENT:
      return state - 1;

    default:
      // nothing to do
      return state;
  }
}
