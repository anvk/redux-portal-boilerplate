import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { Header } from '../../components';
import * as loginPageActions from '../../actions/loginPageActions.js';
import { LOGIN_URL } from '../../constants/constants.js';

class HeaderContainer extends Component {
  _onNavigate = (tabLocation, realLocation) => {
    const { pushRoute } = this.props;

    return (event) => {
      event.preventDefault();

      pushRoute({
        pathname: realLocation || `/${tabLocation}`,
        state: {
          tabLocation
        }
      });
    };
  };

  render() {
    const {
      tabLocation,
      pushRoute,
      logout,
      auth
    } = this.props;

    return (
      <Header
        name={auth.name}
        email={auth.email}
        onLogout={() => {
          logout();

          pushRoute(LOGIN_URL);
        }}
        tabLocation={tabLocation}
        onNavigate={this._onNavigate}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    tabLocation: state.tabLocation,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  {
    logout: loginPageActions.logout,
    pushRoute: routeActions.push
  }
)(HeaderContainer);
