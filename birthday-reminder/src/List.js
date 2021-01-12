import React from "react";

const List = ({ people, removePersonHandler }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>
                {name}
                <span
                  style={{
                    color: "#aaa",
                    fontWeight: "normal",
                    letterSpacing: "0",
                  }}
                >
                  , {age} years
                </span>
              </h4>
              <p className="btn" onClick={() => removePersonHandler(id)}>
                remove
              </p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
