import React, { Component } from "react";

class ClassClick extends Component {
  Handler() {
    console.log("bUTTon Clicked");
  }
  render() {
    return (
      <div>
        <button onClick={this.Handler}>Click</button>
      </div>
    );
  }
}
export default ClassClick;
