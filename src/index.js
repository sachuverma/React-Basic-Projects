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

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51KkyqK7avL._AC_SX184_.jpg"
    alt="book cover page"
  />
);

const Title = () => (
  <h1>Wintering: The Power of Rest and Retreat in Difficult Times</h1>
);
const Author = () => <h4>Katherine May</h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
