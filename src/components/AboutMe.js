import React from "react";
import "../Style/AboutMe.css";
import Me from "../img/AboutMe.JPG";
function AboutMe() {
  return (
    <div className="About">
      <div className="a-left">
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">789</div>
    </div>
  );
}

export default AboutMe;
