import React, { Component, PropTypes } from 'react';
import LaddaButton from 'react-ladda';
import { UsersTable } from '../';

class Users extends Component {
  render() {
    const { users } = this.props;

    return (
      <div>
        <div className="page-header">
          <h1>Users</h1>
        </div>

        <div className="row">
          <em>
            * This data is pulled from server upon request
          </em>
        </div>

        <br />

        <div className="row">
          <div className="col-md-2">
            <p className="lead">
              GitHub Users
            </p>
          </div>
          <div className="col-md-2">
            <LaddaButton
              buttonStyle="expand-left"
              className="btn btn-lg btn-primary btn-block"
              loading={this.props.isFetching}
              disabled={this.props.isFetching}
              onClick={this.props.onSearch}
            >
              Refresh
            </LaddaButton>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <UsersTable users={users} />
          </div>
        </div>
      </div>
    );
  }
}

Users.defaultProps = {
  users: [],
  isFetching: false
};

Users.propTypes = {
  users: PropTypes.array,
  isFetching: PropTypes.bool,
  onSearch: PropTypes.func.isRequired
};

export default Users;
