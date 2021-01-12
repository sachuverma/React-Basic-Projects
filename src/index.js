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
      >
        <p>
          vitae soluta nihil error magnam inventore pariatur eos perspiciatis
          quasi id nemo ea?
        </p>
      </Book>
      <Book
        title="Think Like a Monk: The secret of how to harness the power of positivity and be happy now"
        author="Jay Shetty"
        img="https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg"
      >
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          voluptatum molestiae, dolores ratione omnis voluptatem in, quibusdam
        </p>
      </Book>
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;

  return (
    <article className="book">
      <img src={img} alt="book cover page" />
      <h1> {title}</h1>
      <h4> {author.toUpperCase()}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
