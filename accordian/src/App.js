import React, { useState } from "react";

import data from "./data";
import SingleQuestion from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h3>frequently asked questions</h3>
      <section className="info">
        {questions.map((ques) => {
          return <SingleQuestion key={ques.id} {...ques} />;
        })}
      </section>
    </div>
  );
}

export default App;
