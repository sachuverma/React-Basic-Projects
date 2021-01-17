import React from "react";

import phoneImg from "./images/phone.svg";

import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>lorem ipsum </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit
            animi obcaecati, nam ipsa sed maiores consectetur tempora optio
            doloremque cupiditate tenetur asperiores soluta esse debitis odit ea
            corrupti. Cumque! lorem
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} alt="phone image" className="phone-img" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
