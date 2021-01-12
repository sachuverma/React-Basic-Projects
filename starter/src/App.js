import React from "react";

import UseStateBasics from "./tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";

import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectCleanup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";

import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";

function App() {
  return (
    <div className="container">
      <MultipleReturns />

      <UseEffectFetchData />

      <UseStateBasics />
      <UseStateArray />
      <UseStateObject />
      <UseStateCounter />

      <UseEffectBasics />
      <UseEffectCleanup />
    </div>
  );
}

export default App;
