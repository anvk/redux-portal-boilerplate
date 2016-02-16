import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter.js';
import * as counterActions from '../actions/counterActions.js';

function mapStateToProps(state) {
  const { counter } = state;

  return {
    counter
  };
};

class CounterContainer extends Component {
  render() {
    return <Counter {...this.props} />;
  }
};

export default connect(
  mapStateToProps,
  {
    onIncrement: counterActions.increment,
    onDecrement: counterActions.decrement
  }
)(CounterContainer);
