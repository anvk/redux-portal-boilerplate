import './loginPage.less';

import React, { Component, PropTypes } from 'react';

class LoginPage extends Component {
  render() {
    const {
      onLogin,
      email,
      password,
      onChange,
      isTryingToLogin
    } = this.props;

    return (
      <div className="login-form-background">
        <div className="container">
          <div className="row">
            <div
              className="col-md-4 center-block float-none login-form"
              zDepth={2}
            >
              <h3 className="text-center space-below">
                <strong>My Portal</strong>
              </h3>

              <input
                type="input"
                name="email"
                className="form-control"
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
                  onChange={event => {
                    const { name, value } = event.target;
                    onChange(name, value, event);
                  }}
                />
                <span className="input-group-btn">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Forgot password"
                  >
                    ?
                  </button>
                </span>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block"
                disabled={isTryingToLogin ? 'disabled' : undefined}
                type="submit"
                onClick={() => onLogin(email, password)}
              >
                Log In
              </button>

              <br/>
              <strong>Please use test/test as your login credentials</strong>

            </div>
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
  onLogin: PropTypes.func.isRequired
};

export default LoginPage;
