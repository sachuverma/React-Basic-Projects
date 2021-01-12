import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("some text string");
  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <div>
      {/* <h3>{firstValue}</h3>
      <h3>value: {secondValue}</h3> */}
      {/* { if(true) console.log('hello world!') } */}
      <h3>{text || "text is undefined"}</h3>
      <h3>{text && "text is defined"}</h3>
    </div>
  );
};

export default ShortCircuit;
