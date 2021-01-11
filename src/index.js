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
    <>
      <h1>Hello World</h1>
      <div>This is my first React App</div>
      <img src="" alt="" />
      <input type="text" />
    </>
  );
}

ReactDom.render(<Greeting />, document.getElementById("root"));
