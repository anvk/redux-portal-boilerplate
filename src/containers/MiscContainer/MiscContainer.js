import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Misc } from '../../components';

class MiscContainer extends Component {
  render() {
    return <Misc {...this.props} />;
  }
}

function mapStateToProps(state) {
  return {
    emojis: state.shared.emojis,
    gitignoreTemplates: state.shared.gitignoreTemplates
  };
}

export default connect(mapStateToProps)(MiscContainer);
