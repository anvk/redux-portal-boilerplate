import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoginPage } from '../../components';
import { push as pushRoute } from 'react-router-redux';
import * as loginPageActions from '../../actions/loginPageActions.js';
import { HOME_URL } from '../../constants/constants.js';
import toastr from 'toastr';

// This block is required for Material-UI to work with React 15.x
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
const lightMuiTheme = getMuiTheme(lightBaseTheme);

class LoginPageContainer extends Component {
  render() {
    const {
      changeValue,
      pushRoute,
      login,
      url,
      ...props
    } = this.props;

    const { email, password } = props;

    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <LoginPage
          {...props}
          onChange={changeValue}
          onLogin={() =>
            login(email, password)
              .then(() => pushRoute(url || HOME_URL))
          }
          onForgotPassword={() =>
            toastr.success('Use anvk/admin or anvk2/user credentials')
          }
        />
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ...state.loginPage,
    url: ownProps.location.query.url
  };
}

export default connect(
  mapStateToProps,
  {
    changeValue: loginPageActions.changeValue,
    login: loginPageActions.login,
    pushRoute
  }
)(LoginPageContainer);
