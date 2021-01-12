import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const firstBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/51KkyqK7avL._AC_SX184_.jpg",
  title: "Wintering: The Power of Rest and Retreat in Difficult Times",
  author: "Katherine May",
};

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
      <Book
        title={firstBook.title}
        author={firstBook.author}
        img={firstBook.img}
      />
      <Book
        title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now"
        author="Jay Shetty"
        img="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
      />
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="book cover page" />
      <h1> {title}</h1>
      <p> {author.toUpperCase()}</p>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
