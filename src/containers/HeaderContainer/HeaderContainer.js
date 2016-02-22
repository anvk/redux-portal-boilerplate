import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';
import { Header } from '../../components';

function mapStateToProps(state) {
  const {
    tabLocation
  } = state;

  return {
    tabLocation
  };
};

class HeaderContainer extends Component {
  _onNavigate = (tabLocation, realLocation) => {
    const {
      pushRoute
    } = this.props;

    realLocation = realLocation || '/' + tabLocation;

    return event => {
      const { target } = event;
      event.preventDefault();

      pushRoute({
        pathname: realLocation,
        state: {
          tabLocation
        }
      });
    };
  };

  render() {
    const {
      tabLocation
    } = this.props;

    return <Header
      tabLocation={tabLocation}
      onNavigate={this._onNavigate} />;
  }
};

export default connect(
  mapStateToProps,
  {
    pushRoute: routeActions.push
  }
)(HeaderContainer);
