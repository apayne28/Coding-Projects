import React from "react";

const Hello = () => {
  //   return (
  //     <div>
  //       <h1>Sup Ashley</h1>
  //     </div>
  //   );
  return React.createElement(
    "div",
    { id: "hello", className: "dummyClass" },
    React.createElement("h1", null, "Hi Ashley!")
  );
};

export default Hello;
