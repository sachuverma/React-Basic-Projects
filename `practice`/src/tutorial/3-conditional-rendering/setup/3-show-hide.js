import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      {show && <Item />}
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
    </div>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerHeight);
  const checkSize = () => {
    setSize(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>height: {size} PX</h2>
    </div>
  );
};

export default ShowHide;
