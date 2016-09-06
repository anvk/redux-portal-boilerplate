import React, { Component } from 'react';
import { connect } from 'react-redux';
import params from 'query-params';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { fixUrl } from './utils/utils.js';
import { Dashboard, NotFoundPage } from './components';
import {
  App,
  LoginPageContainer,
  MiscContainer,
  ReposContainer,
  UsersContainer,
  UserContainer,
  FollowersContainer
} from './containers';
import { headerAuth } from './constants/auth.js';
import { checkAuth, checkIsLoggedIn } from './reducers/auth.js';
import {
  HOME_URL,
  LOGIN_URL,
  TAB_REPOS,
  TAB_FOLLOWERS,
  TAB_MISC,
  TAB_USERS,
  TAB_USER
} from './constants/constants.js';
import { publicPath } from '../config/config.json';
import * as sharedDataActions from './actions/sharedDataActions.js';
import * as loginPageActions from './actions/loginPageActions.js';

class Routes extends Component {
  _onEnterCheckAuth = (tabIndex) => {
    const { changeTab, store } = this.props;

    return (nextState, replace) => {
      const { auth } = store.getState();
      const { authRole } = auth;

      changeTab(tabIndex);

      const hasAuth = checkAuth({
        ...headerAuth[tabIndex],
        authRole,
        replace
      });

      if (hasAuth) {
        return;
      }

      replace(HOME_URL);
    };
  };

  _onChange = (prevState, nextState, replace) => {
    const { store, logout } = this.props;
    if (checkIsLoggedIn(store.getState().auth)) {
      return;
    }
    const { location } = nextState;

    const args = params.encode({
      url: location.pathname.replace(publicPath, '') + location.search
    });

    logout();
    replace(fixUrl(`${LOGIN_URL}?${args}`));
  };

  render() {
    const { store } = this.props;

    const routes = [
      {
        path: fixUrl(LOGIN_URL),
        component: LoginPageContainer,
        onEnter: (nextState, replace) => {
          const { auth } = store.getState();
          if (checkIsLoggedIn(auth)) {
            replace(HOME_URL);
          }
        }
      },

      {
        path: publicPath,
        component: App,
        indexRoute: { component: Dashboard },
        onChange: this._onChange,
        onEnter: (nextState, replace) =>
          this._onChange(null, nextState, replace),
        childRoutes: [
          {
            path: 'user',
            indexRoute: { component: UserContainer },
            onEnter: this._onEnterCheckAuth(TAB_USER)
          },

          {
            path: 'users',
            indexRoute: { component: UsersContainer },
            onEnter: this._onEnterCheckAuth(TAB_USERS)
          },

          {
            path: 'repos',
            indexRoute: { component: ReposContainer },
            onEnter: this._onEnterCheckAuth(TAB_REPOS)
          },

          {
            path: 'followers',
            indexRoute: { component: FollowersContainer },
            onEnter: this._onEnterCheckAuth(TAB_FOLLOWERS)
          },

          {
            path: 'misc',
            indexRoute: { component: MiscContainer },
            onEnter: this._onEnterCheckAuth(TAB_MISC)
          },

          { path: '*', status: 404, component: NotFoundPage }
        ]
      }
    ];

    const history = syncHistoryWithStore(browserHistory, store);

    return <Router history={history} routes={routes} />;
  }
}

export default connect(
  undefined,
  {
    changeTab: sharedDataActions.changeTab,
    logout: loginPageActions.logout
  }
)(Routes);
