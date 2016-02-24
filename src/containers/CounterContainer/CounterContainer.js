import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Counter } from '../../components';
import * as counterActions from '../../actions/counterActions.js';

function mapStateToProps(state, ownProps) {
  return {
    counter: state.counter || parseInt(ownProps.params.counterNum, 10)
  };
}

class CounterContainer extends Component {
  render() {
    return <Counter {...this.props} />;
  }
}

export default connect(
  mapStateToProps,
  {
    onIncrement: counterActions.increment,
    onDecrement: counterActions.decrement
  }
)(CounterContainer);
