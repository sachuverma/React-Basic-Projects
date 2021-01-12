import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

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
    <section className="booklist">
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51KkyqK7avL._AC_SX184_.jpg"
        alt="book cover page"
      />
      <h1> Wintering: The Power of Rest and Retreat in Difficult Times</h1>
      <p> Katherine May </p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
