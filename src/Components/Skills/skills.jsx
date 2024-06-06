import React, { useState } from "react";
import "./skills.css";
import img1 from "../../assets/Work/a.png";
import img2 from "../../assets/Work/b.png";
import img3 from "../../assets/Work/c.png";
import img4 from "../../assets/Work/d.png";

const Skills = () => {
  const projectDescription = [
    "This work is from project a",
    "This project is of project b",
    "This is from c",
    "This is from d",
  ];

  return (
    <div className="skills-container">
      <div className="top-header-text">
        <h2>Featured Projects</h2>
        <p>
          Explore my creative lab of digital wonders, where each project blends
          code with a dash of magic.
        </p>
      </div>
      <div className="skills-slider-container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <div className="skills-slider-container-2">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
