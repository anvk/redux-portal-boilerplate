import './loginPage.less';

import React, { Component, PropTypes } from 'react';
import ReactTooltip from 'react-tooltip';
import LaddaButton from 'react-ladda';
import Paper from 'material-ui/Paper';
import { ENTER_KEY } from '../../constants/constants.js';

class LoginPage extends Component {
  render() {
    const {
      onLogin,
      email,
      password,
      onChange
    } = this.props;

    return (
      <div className="login-form-background">
        <div className="container">
          <div className="row">
            <Paper
              className="col-md-4 center-block float-none login-form"
              zDepth={2}
            >
              <h3 className="text-center space-below">
                <strong>My Portal</strong>
              </h3>

              <input
                type="input"
                name="email"
                className="form-control space-below-xs"
                placeholder="Email Address"
                value={email}
                onChange={event => {
                  const { name, value } = event.target;
                  onChange(name, value, event);
                }}
              />
              <div className="input-group space-below">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onKeyUp={event => {
                    const { keyCode } = event;

                    if (keyCode === ENTER_KEY) {
                      onLogin();
                    }
                  }}
                  onChange={event => {
                    const { name, value } = event.target;
                    onChange(name, value, event);
                  }}
                />
                <ReactTooltip place="top" type="dark" effect="float" />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-tip="Forgot password?"
                    onClick={this.props.onForgotPassword}
                  >
                    ?
                  </button>
                </span>
              </div>
              <LaddaButton
                buttonStyle="expand-left"
                className="btn btn-lg btn-primary btn-block"
                loading={this.props.isTryingToLogin}
                disabled={this.props.isTryingToLogin}
                onClick={onLogin}
              >
                Log In
              </LaddaButton>

              <br />
              <strong>Use anvk/admin for Admin</strong>
              <br />
              <strong>anvk/user for User</strong>

            </Paper>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onLogin: PropTypes.func.isRequired,
  onForgotPassword: PropTypes.func.isRequired,
  isTryingToLogin: PropTypes.bool
};

export default LoginPage;
