// import React, { Component } from "react";
// class Welcome extends Component {
//   constructor() {
//     super();
//     this.state = {
//       message: "welcome vi",
//     };
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.message}</h1>
//         <button>Subscribe</button>
//       </div>
//     );
//   }
// }

import React, { Component } from "react";

export class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      state1: "hello",
      state2: "navin",
    };
  }

  render() {
    const { name, sirname } = this.props;
    const { state1, state2 } = this.state;
    return (
      <div>
        <h5>
          Welcome {name} {sirname}
        </h5>
        <h2>
          {" "}
          Welcome {state1} {state2}
        </h2>
      </div>
    );
  }
}

export default Welcome;
