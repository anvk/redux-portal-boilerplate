import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { UserHeader } from '../';
import {
  TAB_REPOS,
  TAB_FOLLOWERS,
  TAB_MISC,
  TAB_USERS,
  TAB_USER
} from '../../constants/constants.js';
import { headerAuth } from '../../constants/auth.js';
import { checkAuth } from '../../reducers/auth.js';
import { fixUrl } from '../../utils/utils.js';

class Header extends Component {
  render() {
    const getHeaderLinkClass = (tabLocation) => {
      const hasAuth = checkAuth({
        authRole: this.props.authRole,
        ...headerAuth[tabLocation]
      });

      if (!hasAuth) {
        return 'hidden';
      }

      return tabLocation === this.props.tabLocation ? 'active' : '';
    };

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#project-navbar-collapse"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to={fixUrl('/')} className="navbar-brand">
              Redux Portal Boilerplate
            </Link>
          </div>

          <div
            id="project-navbar-collapse"
            className="navbar-collapse collapse"
          >
            <ul className="nav navbar-nav">
              <li
                role="presentation"
                className={getHeaderLinkClass(TAB_USER)}
              >
                <Link to={fixUrl('/user')}>User Data</Link>
              </li>
              <li
                role="presentation"
                className={getHeaderLinkClass(TAB_USERS)}
              >
                <Link to={fixUrl('/users')}>Users (Admin Only)</Link>
              </li>
              <li
                role="presentation"
                className={getHeaderLinkClass(TAB_REPOS)}
              >
                <Link to={fixUrl('/repos')}>Repos</Link>
              </li>
              <li
                role="presentation"
                className={getHeaderLinkClass(TAB_FOLLOWERS)}
              >
                <Link to={fixUrl('/followers')}>Followers (User only)</Link>
              </li>
              <li
                role="presentation"
                className={getHeaderLinkClass(TAB_MISC)}
              >
                <Link to={fixUrl('/misc')}>GitHub Miscellaneous</Link>
              </li>
              <li role="presentation" className="dropdown">
                <a
                  className="dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Complex Menu <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Item 4</a></li>
                </ul>
              </li>
            </ul>
            <UserHeader
              name={this.props.name}
              email={this.props.email}
              onLogout={this.props.onLogout}
            />
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  tabLocation: PropTypes.string,
  name: PropTypes.string,
  email: PropTypes.string,
  authRole: PropTypes.number,
  onLogout: PropTypes.func.isRequired
};

export default Header;
