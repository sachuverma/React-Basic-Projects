import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [gap, setGap] = useState(10);
  const [list, setList] = useState(new Values("#779CE7").all(gap));

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(false);
    try {
      let colors = new Values(color).all(gap);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#779CE7"
            className={`${error ? "error input-error" : null}`}
          />
          <button className="btn" type="submit">
            submit
          </button>
          <input
            name="slider"
            type="range"
            min="1"
            max="100"
            value={gap}
            className="slider"
            onChange={(e) => {
              setGap(e.target.value);
            }}
          />
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
