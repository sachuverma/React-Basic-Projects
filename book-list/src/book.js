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

export default Book;
