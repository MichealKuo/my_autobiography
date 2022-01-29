import React, { useEffect } from "react";
import "../Style/Home.css";
import Me from "../img/introDelBG.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Home() {
  //設定aos.初始值
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="main-context container">
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
              <div className="title-item">Micheal Kuo</div>
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
    </>
  );
}

export default Home;
