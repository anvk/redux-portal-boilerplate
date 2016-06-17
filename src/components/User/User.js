import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

class User extends Component {
  render() {
    const {
      pushRoute,
      onChange
    } = this.props;

    return (
      <div className="col-md-12">
        <div className="row">
          First Name:
          <input
            type="text"
            name="firstName"
            value={this.props.firstName}
            onChange={onChange}
          />
          Last Name:
          <input
            type="text"
            name="lastName"
            value={this.props.lastName}
            onChange={onChange}
          />
          is a {this.props.profession}
        </div>

        <div className="row">
          <button
            type="button"
            className="btn btn-default"
            onClick={() => pushRoute({
              pathname: '/counter/100',
              state: {
                counter: 100,
                tabLocation: 'counter'
              }
            })}
          >
            go to 100 !
          </button>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profession: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  pushRoute: PropTypes.func.isRequired
};

export default connect(undefined,
  {
    pushRoute: routeActions.push
  }
)(User);
