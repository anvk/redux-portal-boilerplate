import { UPDATE_LOCATION } from 'redux-simple-router';

const initialState = 'home';

export default function tabLocation(state = initialState, action) {
  switch(action.type) {
    case UPDATE_LOCATION:
      const { location } = action;

      if (!location || !location.state || !location.state.tabLocation) {
        // if state is not present then we do URL ninjitsu trying to get a
        // a proper state from URL

        const [, tabLocation] = location.pathname.split('/');

        return tabLocation.length ? tabLocation : state;
      }

      return action.location.state.tabLocation || state;

    default:
      // nothing to do
      return state;
  }
};
