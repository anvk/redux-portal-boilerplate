//-------------------------------------------------------------------//
// File with auth configuration on what urls/tabs are visible to who //
//-------------------------------------------------------------------//

import {
  TAB_REPOS,
  TAB_FOLLOWERS,
  TAB_MISC,
  TAB_USERS,
  TAB_USER
} from './constants.js';

import { ROLE_ADMIN, ROLE_USER } from '../reducers/auth.js';

export const headerAuth = {
  [TAB_USER]: {},
  [TAB_USERS]: { allow: [ROLE_ADMIN] },
  [TAB_REPOS]: {},
  [TAB_FOLLOWERS]: { except: [ROLE_ADMIN] },
  [TAB_MISC]: {}
};
