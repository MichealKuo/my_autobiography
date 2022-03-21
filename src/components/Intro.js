import React from "react";
import Me from "../img/introDelBG.JPG";
import "../Style/Intro.css";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="main-context">
      <div className="left-intro">
        {/* aos fade in */}
        <img
          src={Me}
          alt=""
          className="i-img"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        ></img>
      </div>
      <div className="right-intro">
        <h2 data-aos="fade-down" data-aos-easing="ease-in-sine">
          Hello, I am
        </h2>
        <div
          className="auto-title"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        >
          <div className="title-wrapper">
            <div className="title-item">Micheal</div>
            <div className="title-item">Front-End Dev</div>
            <div className="title-item">Junior</div>
          </div>
        </div>
        <div className="seeMoreBtn">
          <Link to="/about">
            <button
              className="moreBtn"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
            >
              See more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Intro;
