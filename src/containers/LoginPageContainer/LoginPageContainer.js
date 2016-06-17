import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { LoginPage } from '../../components';
import { checkAuth } from '../../reducers/auth.js';
import * as loginPageActions from '../../actions/loginPageActions.js';
import { HOME_URL } from '../../constants/constants.js';

class LoginPageContainer extends Component {
  componentWillMount() {
    if (checkAuth(this.props.auth)) {
      this.props.replaceRoute(HOME_URL);
    }
  }

  render() {
    const {
      changeValue,
      replaceRoute,
      pushRoute,
      login,
      queryParams,
      ...props
    } = this.props;

    const { url } = queryParams;

    return (
      <LoginPage
        {...props}
        onChange={changeValue}
        onLogin={(email, password) => {
          login(email, password)
            .then(() => pushRoute(url || HOME_URL));
        }}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.loginPage,
    auth: state.auth,
    queryParams: state.routing.location.query
  };
}

export default connect(
  mapStateToProps,
  {
    changeValue: loginPageActions.changeValue,
    login: loginPageActions.login,
    pushRoute: routeActions.push,
    replaceRoute: routeActions.replace
  }
)(LoginPageContainer);
