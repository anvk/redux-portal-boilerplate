require('../../../node_modules/toastr/build/toastr.css');
require('../../../node_modules/bootstrap/dist/css/bootstrap.min.css');
require('../../../node_modules/bootstrap/dist/js/bootstrap.min.js');

require('./app.less');

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { routeActions } from 'redux-simple-router';
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

        <div className='container'>
          <div className='col-md-12 space-below'>
            <button
              className='btn btn-default'
              onClick={() => pushRoute('/foo')}
            >
              Go to /foo
            </button>
          </div>

          <div className='col-md-12'>{children}</div>
        </div>

        <Footer />
      </div>
    );
  }
};

export default connect(
  null,
  {
    pushRoute: routeActions.push
  }
)(App);
