import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1 + 1
  };

  render() {
    return (
      <div>
        <span>{this.formatCount()}</span>

        <button>Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}
export default Counter;
