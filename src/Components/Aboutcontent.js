import { Link } from "react-router-dom";
import "./Aboutcontentstyles.css";
import React from "react";
import React1 from "../Assets/Reactjs.jpg";
import React2 from "../Assets/reactjs2.jpg";


const handleDownload = () => {
  const link = document.createElement("a");
  link.href = "Pinak-Pankaj-Moharir-Resume-2024.pdf";
  link.download = "Pinak-Pankaj-Moharir-Resume-2024.pdf";
  link.click();
};

const Aboutcontent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1 className="gradient">Who Am I ?</h1>
        <p>
          I'm a student of artificial intellegence. I am also a web developer
          and game developer.
        </p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
        <button onClick={handleDownload} className="btn">
          Download Resume
        </button>
        ;
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React2} className="img" alt="React" />
          </div>
          <div className="img-stack bottom">
            <img src={React1} className="img" alt="React" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutcontent;
