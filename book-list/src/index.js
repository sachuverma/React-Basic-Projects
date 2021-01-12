import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

import { books } from "./books";
import Book from "./book";

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

ReactDom.render(<BookList />, document.getElementById("root"));
