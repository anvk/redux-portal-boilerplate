require('./footer.less');

import React, { Component, PropTypes } from 'react';
import { author } from '../../../package.json';

class Footer extends Component {
  render() {
    return (
      <footer className='footer'>
        <div className='container'>
          <p className='text-muted'>made with love by <strong>{author}</strong></p>
        </div>
      </footer>
    );
  }
};

export default Footer;
