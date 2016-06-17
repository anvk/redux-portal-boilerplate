import React, { Component, PropTypes } from 'react';

class Counter extends Component {
  render() {
    return (
      <div className="col-md-12">
        <div className="row">
          Counter set to: {this.props.counter}
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.onIncrement}
          >
            Counter + 1
          </button>
        </div>
        <div className="row">
          <button
            type="button"
            className="btn btn-default"
            onClick={this.props.onDecrement}
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
