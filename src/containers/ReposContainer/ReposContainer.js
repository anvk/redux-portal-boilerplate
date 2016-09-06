import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Repos } from '../../components';
import * as reposActions from '../../actions/reposActions.js';

class ReposContainer extends Component {
  render() {
    const {
      onSearch,
      ...props
    } = this.props;

    const { username } = props;

    return (
      <Repos
        {...this.props}
        onSearch={() => onSearch({ username })}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.repos,
    username: state.auth.username
  };
}

export default connect(
  mapStateToProps,
  {
    onSearch: reposActions.search
  }
)(ReposContainer);
