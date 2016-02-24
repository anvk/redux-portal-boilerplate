require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/bootstrap/dist/js/bootstrap.min.js');

require('./app.less');

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { HeaderContainer } from '../';
import { Footer } from '../../components';

class App extends Component {
  render() {
    const {
      pushRoute,
      children
    } = this.props;

    return (
      <div>
        <HeaderContainer />

        <div className="container">
          <div className="col-md-12 space-below">
            <button
              className="btn btn-default"
              onClick={() => pushRoute('/foo')}
            >
              Go to /foo
            </button>
          </div>

          <div className="col-md-12">{children}</div>
        </div>

        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  pushRoute: PropTypes.func.isRequired
};

export default connect(undefined,
  {
    pushRoute: routeActions.push
  }
)(App);
