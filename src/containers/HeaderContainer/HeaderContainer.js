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
}

class HeaderContainer extends Component {
  _onNavigate = (tabLocation, realLocation) => {
    const {
      pushRoute
    } = this.props;

    return event => {
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
      tabLocation
    } = this.props;

    return (
      <Header
        tabLocation={tabLocation}
        onNavigate={this._onNavigate}
      />
    );
  }
}

HeaderContainer.propTypes = {
  tabLocation: PropTypes.string,
  pushRoute: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  {
    pushRoute: routeActions.push
  }
)(HeaderContainer);
