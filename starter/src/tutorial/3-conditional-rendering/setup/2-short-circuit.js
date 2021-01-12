import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  const firstValue = text || "hello world";
  const secondValue = text && "hello world";

  return (
    <div>
      {/* <h3>{firstValue}</h3>
      <h3>value: {secondValue}</h3> */}
      {/* { if(true) console.log('hello world!') } */}
      <h3>{text || "hello world"}</h3>

      {isError && <h3>Error...</h3>}
      {isError ? <h4>lorem</h4> : <h4>ipsum</h4>}

      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
    </div>
  );
};

export default ShortCircuit;
