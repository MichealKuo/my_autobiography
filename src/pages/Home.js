import React from "react";
import Me from "../img/introDelBG.png";
function Home() {
  return (
    <>
      <div className="left-intro">
        <p>Hello, My name is</p>
        <h1>Micheal Kuo</h1>
        <div className="title-wrapper"></div>
      </div>
      <div className="right-intro">
        <div className="img-bgc"></div>
        <div className="img">
          <img src={Me} alt="" className=""></img>
        </div>
      </div>
    </>
  );
}

export default Home;
