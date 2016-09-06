import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from '../../components';
import { push as pushRoute } from 'react-router-redux';
import * as loginPageActions from '../../actions/loginPageActions.js';
import { LOGIN_URL } from '../../constants/constants.js';

class HeaderContainer extends Component {
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
        authRole={auth.authRole}
        onLogout={() => {
          logout();
          pushRoute(LOGIN_URL);
        }}
        tabLocation={tabLocation}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    tabLocation: state.shared.tabLocation,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  {
    logout: loginPageActions.logout,
    pushRoute
  }
)(HeaderContainer);
