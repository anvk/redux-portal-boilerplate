import { UPDATE_LOCATION } from 'react-router-redux';

const initialState = 'home';

export default function tabLocation(state = initialState, action) {
  switch (action.type) {
    case UPDATE_LOCATION:
      const { payload } = action;

      if (!payload || !payload.state || !payload.state.tabLocation) {
        // if state is not present then we do URL ninjitsu trying to get a
        // a proper state from URL

        const [, urlTabLocation] = payload.pathname.split('/');

        return urlTabLocation.length ? urlTabLocation : state;
      }

      return action.payload.state.tabLocation || state;

    default:
      // nothing to do
      return state;
  }
}
