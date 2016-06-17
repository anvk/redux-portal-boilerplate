import './userheader.less';

import React, { Component, PropTypes } from 'react';
import Gravatar from 'react-gravatar';

class UserHeader extends Component {
  _logout = (event) => {
    event.preventDefault();

    if (confirm('Are you sure you want to logout?')) {
      this.props.onLogout();
    }
  };

  render() {
    return (
      <ul className='nav navbar-nav navbar-right'>
        <li className='dropdown'>
          <a
            href='#'
            className='dropdown-toggle userheader-link'
            data-toggle='dropdown'
            role='button'
            aria-haspopup='true'
            aria-expanded='false'
          >
            <span className='caret'></span>
            <Gravatar
              className="userheader-custom"
              rating="pg"
              email={this.props.email}
            />
            <span className="userheader-custom-name">
              {` ${this.props.name}`}
            </span>
          </a>
          <ul className='dropdown-menu'>
            <li>
              <a
                href='#'
                onClick={this._logout}
              >
                Logout
              </a>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

UserHeader.propTypes = {
  onLogout: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default UserHeader;
