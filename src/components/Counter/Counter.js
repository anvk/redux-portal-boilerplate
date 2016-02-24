import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    const {
      onIncrement,
      onDecrement,
      counter
    } = this.props;

    return (
      <div className="col-md-12">
        <div className="row">
          Counter set to: {counter}
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-default"
            onClick={onIncrement}
          >
            Counter + 1
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-default"
            onClick={onDecrement}
          >
            Counter - 1
          </button>
        </div>
      </div>
    );
  }
}

Counter.propTypes = {
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  counter: PropTypes.number
};

export default Counter;
