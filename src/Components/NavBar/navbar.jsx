import React from "react";
import "./navbar.css";
import headerImage from "../../assets/header_icon.png";
import insta from "../../assets/insta.png";
import x from "../../assets/X.png";
import pintrest from "../../assets/pintrest.png";

const NavBar = () => {
  return (
    <div className="container">
      <img src={headerImage} alt="" className="rolling-images" />
      <div className="socials-container">
        <img src={insta} alt="" />
        <img src={x} alt="" />
        <img src={pintrest} alt="" />
      </div>
      <h2>ayush.</h2>
    </div>
  );
};

export default NavBar;
