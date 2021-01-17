import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div>
      <h2>Error Page</h2>
      <p>please go back to home...</p>
      <Link to="/" className="btn">
        Back to Home
      </Link>
    </div>
  );
};

export default Error;
