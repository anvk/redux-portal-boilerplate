import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeValue } from '../../actions/userActions.js';
import { User } from '../../components';
import { profession } from '../../../config/config.json';

function mapStateToProps(state) {
  const {
    firstName,
    lastName
  } = state.user;

  return {
    firstName,
    lastName
  };
};

class UserContainer extends Component {
  render() {
    const {
      firstName,
      lastName,
      changeValue
    } = this.props;

    return <User
      firstName={firstName}
      lastName={lastName}
      onChange={event => {
        const { name, value } = event.target;
        changeValue(name, value);
      }}
      profession={profession} />;
  }
};

export default connect(
  mapStateToProps,
  {
    changeValue
  }
)(UserContainer);
