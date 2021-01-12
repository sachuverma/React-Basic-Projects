import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

// setup vars
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51KkyqK7avL._AC_SX184_.jpg",
    title: "Wintering: The Power of Rest and Retreat in Difficult Times",
    author: "Katherine May",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41gVhoPaE5L._SX323_BO1,204,203,200_.jpg",
    title:
      "Think Like a Monk: The secret of how to harness the power of positivity and be happy now",
    author: "Jay Shetty",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41ThX3SfAiL._SX329_BO1,204,203,200_.jpg",
    title: "The Vanishing Half",
    author: "Brit Bennett",
  },
  {
    id: 4,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/41U3yoF6sXL._SX427_BO1,204,203,200_.jpg",
    title: "Greenlights ",
    author: "Matthew McConaughey",
  },
  {
    id: 5,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg",
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
  },
];

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
      {books.map((book) => {
        const { id, img, title, author } = book;
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;

  // attribute, eventHandler
  // onClick, onMouseHover
  const complexExample = (author) => {
    console.log("author name is: ", author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book cover page" />
      <h1
        onClick={(e) => {
          console.log(e);
          return alert(`${title}: ${author}`);
        }}
      >
        {title}
      </h1>
      <h4>{author.toUpperCase()}</h4>
      {children}
      <button type="button" onClick={() => complexExample(author)}>
        complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
