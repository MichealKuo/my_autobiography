import React from "react";
import Me from "../img/introDelBG.JPG";
import "../Style/Intro.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="main-context">
      <div className="left-intro">
        {/* aos fade in */}
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          className="introFadeBox"
        >
          <img src={Me} alt="" className="i-img"></img>
        </div>
      </div>
      <div className="right-intro">
        <h2>Hello, I am </h2>
        <div className="auto-title">
          <div className="title-wrapper">
            <div className="title-item">Micheal</div>
            <div className="title-item">Front-End Dev</div>
            <div className="title-item">Junior</div>
          </div>
        </div>
        <div className="seeMoreBtn">
          <Link to="/about">
            <button className="moreBtn">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;