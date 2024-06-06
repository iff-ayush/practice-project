import React from "react";
import "./hero.css";
import bg_icon from "../../assets/background_image.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1>I'm Ayush,</h1>
        <li>
          <span>Developer && Designer</span>
        </li>
        <p>
          Versatile Developer and Designer, bringing code and creativity
          together to build impactful digital solutions.
        </p>
        <div className="text-container-btn">
          <h3 className="btn-left">Hire Me</h3>
          <h3 className="btn-left">See More</h3>
        </div>
      </div>
      <div className="image-container">
        <img src={bg_icon} alt="" />
        <div className="grey-circle-fill" />
      </div>
    </div>
  );
};

export default Hero;
