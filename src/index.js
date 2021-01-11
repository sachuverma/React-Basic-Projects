import React from "react";
import ReactDom from "react-dom";

// JSX RULES
/**
 * return single element
 * div / section / acticle or Fragment
 * use camelCase for html attributes
 * className instead of class
 * close every element
 * formatting
 */

function Greeting() {
  return (
    <div>
      <Person />
      <Greet />
    </div>
  );
}

const Person = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Sachu Verma</h2>
    </div>
  );
};

const Greet = () => {
  return (
    <div>
      <div>This is my first React App</div>
      <img src="" alt="alt text for img tag" />
      <input type="text" />
    </div>
  );
};

ReactDom.render(<Greeting />, document.getElementById("root"));
