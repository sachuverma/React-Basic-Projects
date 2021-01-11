import React from "react";
import ReactDom from "react-dom";

function Greeting() {
  return (
    <div>
      <h1>Hello World</h1>
      This is my first React App
    </div>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
