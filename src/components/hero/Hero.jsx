import React from "react";

import "./hero.scss";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="content">
        <h1>
          Blazing <br /> Best Pizza
        </h1>
        <p>
          Not done in 60 seconds? Free Pizza. <br /> Our Word!
        </p>
        <button>Order Now!</button>
      </div>
    </div>
  );
};

export default Hero;
