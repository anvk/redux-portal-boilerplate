import './footer.less';

import React, { Component } from 'react';
import { author, name } from '../../../package.json';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <p className="text-muted">
            {'Project '}
            <strong>
              <a
                href="https://github.com/anvk/redux-portal-boilerplate"
                alt={name}
              >
                {name}
              </a>
            </strong>
            {' Created by '}
            <strong>
              <a
                href="https://github.com/anvk"
                alt={author}
              >
                {author}
              </a>
            </strong>
            {' 2016'}
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
