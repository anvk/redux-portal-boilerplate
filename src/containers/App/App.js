import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';
import '../../../node_modules/ladda/dist/ladda-themeless.min.css';
import '../../../node_modules/ladda/dist/ladda.min.js';
import '../../../node_modules/ladda/dist/spin.min.js';
import '../../../node_modules/toastr/build/toastr.min.css';

import './app.less';

import React, { Component } from 'react';
import { HeaderContainer } from '../';
import { Footer } from '../../components';

// This block is required for Material-UI to work with React 15.x
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
const lightMuiTheme = getMuiTheme(lightBaseTheme);

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <div>
          <HeaderContainer />
            <div className="container-fluid">
              {this.props.children}
            </div>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}
