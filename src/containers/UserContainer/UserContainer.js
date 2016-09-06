import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../../components';
import * as userActions from '../../actions/userActions.js';

class UserContainer extends Component {
  componentWillMount() {
    const {
      loaded,
      search,
      username
    } = this.props;

    if (loaded) {
      return;
    }

    search({ username });
  }

  render() {
    const {
      username,
      search,
      changeValue,
      ...props
    } = this.props;

    return (
      <div className="col-md-6">
        <User {...props} onChange={changeValue} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { username: state.auth.username, ...state.user };
}

export default connect(
  mapStateToProps,
  {
    changeValue: userActions.changeValue,
    search: userActions.search
  }
)(UserContainer);
