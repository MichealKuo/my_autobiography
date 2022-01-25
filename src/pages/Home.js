import React from "react";
import "../Style/Home.css";
import Me from "../img/introDelBG.png";
function Home() {
  return (
    <>
      <div className="main-context container ">
        <div className="left-intro">
          <img src={Me} alt="" className="i-img"></img>
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
        </div>
      </div>
    </>
  );
}

export default Home;
