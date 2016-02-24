import React, { Component, PropTypes } from 'react';

class Header extends Component {
  render() {
    const {
      tabLocation,
      onNavigate
    } = this.props;

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
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
            <a className="navbar-brand" href="#">Redux Portal Boilerplate</a>
          </div>

          <div id="project-navbar-collapse" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li role="presentation" className={tabLocation === 'home' ? 'active' : ''}>
                <a href="/" onClick={onNavigate('home', '/')}>Home</a>
              </li>
              <li role="presentation" className={tabLocation === 'counter' ? 'active' : ''}>
                <a href="/counter" onClick={onNavigate('counter')}>Counter</a>
              </li>
              <li role="presentation" className={tabLocation === 'user' ? 'active' : ''}>
                <a href="/user" onClick={onNavigate('user')}>User</a>
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
                  Complex Menu
                  <span className="caret"></span>
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
          </div>
        </div>
      </nav>
    );
  }
}

Header.propTypes = {
  tabLocation: PropTypes.string,
  onNavigate: PropTypes.func.isRequired
};

export default Header;
