import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  Increment() {
    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("callback value", this.state.count);
    //   }
    // );
    // console.log(this.state.count);
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    //    console.log(this.state.count);
  }

  Decrement() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  IncrementFive() {
    this.Increment();
    this.Increment();
    this.Increment();
    this.Increment();
  }

  render() {
    return (
      <div>
        <div>Count = {this.state.count}</div>
        <button onClick={() => this.Increment()}>Increment</button>
        <button onClick={() => this.Decrement()}>Increment</button>
      </div>
    );
  }
}
export default Counter;
