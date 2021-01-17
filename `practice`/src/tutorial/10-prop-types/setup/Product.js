import React from "react";
import PropTypes from "prop-types";

import defaultImage from "../../../assets/default-image.jpeg";

const Product = ({ name, price, image }) => {
  const url = image && image.url;

  return (
    <article className="product">
      <img src={url || defaultImage} alt="image" className="img" />

      <h4>{name || "default name"}</h4>
      <p>${price || 3.59}</p>
    </article>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

// Product.defaultProps = {
//   name: "default name",
//   price: 0,
//   image: defaultImage,
// };

export default Product;
