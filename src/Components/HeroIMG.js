import "./HeroIMGstyles.css";
import React from "react";
import IntroImg from "../Assets/background01.jpg";
import { Link } from "react-router-dom";

const HeroIMG = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi,I'm Pinak Moharir</p>
        <h1>
          
          <div className="gradient">React</div>Developer
        </h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroIMG;
