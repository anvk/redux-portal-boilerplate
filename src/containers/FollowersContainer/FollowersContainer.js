import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Followers } from '../../components';
import * as followersActions from '../../actions/followersActions.js';

class FollowersContainer extends Component {
  render() {
    const { onSearch, ...props } = this.props;

    return <Followers {...this.props} onSearch={onSearch} />;
  }
}

function mapStateToProps(state) {
  return {
    ...state.followers,
    username: state.auth.username
  };
}

export default connect(
  mapStateToProps,
  {
    onSearch: followersActions.search
  }
)(FollowersContainer);
