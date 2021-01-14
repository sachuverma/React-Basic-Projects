import React from "react";

import UseStateBasics from "./tutorial/1-useState/setup/2-useState-basics";
import UseStateArray from "./tutorial/1-useState/setup/3-useState-array";
import UseStateObject from "./tutorial/1-useState/setup/4-useState-object";
import UseStateCounter from "./tutorial/1-useState/setup/5-useState-counter";

import UseEffectBasics from "./tutorial/2-useEffect/setup/1-useEffect-basics";
import UseEffectCleanup from "./tutorial/2-useEffect/setup/2-useEffect-cleanup";
import UseEffectFetchData from "./tutorial/2-useEffect/setup/3-useEffect-fetch-data";

import MultipleReturns from "./tutorial/3-conditional-rendering/setup/1-multiple-returns";
import ShortCircuit from "./tutorial/3-conditional-rendering/setup/2-short-circuit";
import ShowHide from "./tutorial/3-conditional-rendering/setup/3-show-hide";

import ControlledInput from "./tutorial/4-forms/setup/1-controlled-inputs";
import MultipleInput from "./tutorial/4-forms/setup/2-multiple-inputs";

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

      <ShortCircuit />
      <ShowHide />

      <ControlledInput />
      <MultipleInput />
    </div>
  );
}

export default App;