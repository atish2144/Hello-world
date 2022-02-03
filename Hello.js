import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Hello</h1>
  //       <h1>Good</h1>
  //     </div>
  //   );

  return React.createElement(
    "div",
    { id: "hello", className: "dummyclass" },
    React.createElement("h1", null, "Hello")
  );
};
export default Hello;
