import React, { Component, PropTypes } from 'react';
import LaddaButton from 'react-ladda';
import { UsersTable } from '../';

class Followers extends Component {
  render() {
    const { followers } = this.props;

    return (
      <div>
        <div className="page-header">
          <h1>Followers</h1>
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
              GitHub <strong>{this.props.username}</strong> Followers
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
            <UsersTable users={followers} />
          </div>
        </div>
      </div>
    );
  }
}

Followers.defaultProps = {
  followers: [],
  isFetching: false,
  username: undefined
};

Followers.propTypes = {
  followers: PropTypes.array,
  isFetching: PropTypes.bool,
  username: PropTypes.string,
  onSearch: PropTypes.func.isRequired
};

export default Followers;
