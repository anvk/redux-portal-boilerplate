import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Users } from '../../components';
import * as usersActions from '../../actions/usersActions.js';

class UsersContainer extends Component {
  render() {
    const { onSearch, ...props } = this.props;

    return <Users {...this.props} onSearch={onSearch} />;
  }
}

function mapStateToProps(state) {
  return { ...state.users };
}

export default connect(
  mapStateToProps,
  {
    onSearch: usersActions.search
  }
)(UsersContainer);
