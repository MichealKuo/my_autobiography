import React from "react";
import "../Style/Card.css";
function Card({ img, title, describe, link }) {
  return (
    <div className="CardBox">
      <div className="CardBrowser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {/* target blank 另開新窗  */}
      <a href={link} target="_blank">
        <img src={img} alt="" className="CardImg"></img>
      </a>
    </div>
  );
}
//describe link title have not add yet
export default Card;
