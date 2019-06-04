import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 50,
    fontWeight: "bold"
  };

  render() {
    return (
      //every render can only return one tag (ex. everything has to be inside <div> </div>)
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className="badge badge-warning m-2">
          {this.formatCount()}
        </span>

        <button style={{ fontSize: 100 }} className="btn btn-secondary btn-sm">
          Increment
        </button>
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
