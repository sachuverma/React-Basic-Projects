import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "sachu",
    age: 20,
    message: "this is random message",
  });

  const [name, setName] = useState("sachu");
  const [age, setAge] = useState(20);
  const [message, setMessage] = useState("this is a random message");

  const changeMessage = () => {
    // setPerson({ ...person, message: "hello world!" });
    setMessage("hello world!");
  };

  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Message: {message}</h3>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </div>
  );
};

export default UseStateObject;
