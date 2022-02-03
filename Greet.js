import React from "react";

// function Greet() {
//   return <h1>Hello world</h1>;
// }

//in the body we can destructing in the parameter

// const Greet = ({ name, sirname }) => {
//   return (
//     <div>
//       <h4>
//         Hello {name} {sirname}
//       </h4>
//     </div>
//   );
// };

//in the body we can destructing in the function body
const Greet = (props) => {
  const { name, sirname } = props;
  return (
    <div>
      <h4>
        Hello {name} {sirname}
      </h4>
    </div>
  );
};

export default Greet;
