import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeValue } from '../../actions/userActions.js';
import { User } from '../../components';
import { profession } from '../../../config/config.json';

class UserContainer extends Component {
  render() {
    const { changeValue } = this.props;

    return (
      <User
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        onChange={event => {
          const { name, value } = event.target;
          changeValue(name, value);
        }}
        profession={profession}
      />
    );
  }
}

function mapStateToProps(state) {
  return { ...state.user };
}

export default connect(
  mapStateToProps,
  {
    changeValue
  }
)(UserContainer);
