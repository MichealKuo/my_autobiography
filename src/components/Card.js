import React from "react";
import "../Style/Card.css";
function Card({ img, title, describe }) {
  return (
    <div className="CardBox">
      <div className="CardBrowser">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      {/* target blank 另開新窗  */}
      <a href="https://www.google.com/" target="_blank">
        <img src={img} alt="" className="CardImg"></img>
      </a>
      <p>{title}</p>
      <p>{describe} </p>
    </div>
  );
}

export default Card;
