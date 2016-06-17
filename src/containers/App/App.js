import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.min.js';

import './app.less';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { HeaderContainer } from '../';
import { Footer } from '../../components';
import { checkAuth } from '../../reducers/auth.js';
import params from 'query-params';
import { LOGIN_URL } from '../../constants/constants.js';
import * as loginPageActions from '../../actions/loginPageActions.js';

class App extends Component {
  componentWillMount() {
    this._checkAuth();
  }

  componentWillUpdate() {
    this._checkAuth();
  }

  _checkAuth = () => {
    const {
      auth,
      replaceRoute,
      location,
      logout
    } = this.props;

    if (!checkAuth(auth)) {
      const args = params.encode({ url: location.pathname + location.search });
      logout();
      replaceRoute(`${LOGIN_URL}?${args}`);
    }
  };

  render() {
    return (
      <div>
        <HeaderContainer />
          <div className="container-fluid">
            {this.props.children}
          </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
    location: state.routing.location
  };
}

export default connect(
  mapStateToProps,
  {
    replaceRoute: routeActions.replace,
    logout: loginPageActions.logout
  }
)(App);
