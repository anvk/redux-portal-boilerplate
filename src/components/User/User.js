import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { routeActions } from 'react-router-redux';

class User extends Component {
  render() {
    const {
      firstName,
      lastName,
      profession,
      pushRoute,
      onChange
    } = this.props;

    return (
      <div className='col-md-12'>
        <div className='row'>
          First Name:
          <input
            type='text'
            name='firstName'
            value={firstName}
            onChange={onChange} />
          Last Name:
          <input
            type='text'
            name='lastName'
            value={lastName}
            onChange={onChange} />
          is a {profession}
        </div>

        <div className='row'>
          <button
            type='button'
            className='btn btn-default'
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
};

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  profession: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

export default connect(
  null,
  {
    pushRoute: routeActions.push
  }
)(User);
