import React from "react";
import "../Style/CardForPage.css";

function CardForPage({ img, title, describe, link, skill }) {
  return (
    <div className="CardPage">
      <div className="CardBoxPage">
        <div className="CardBrowserPage">
          <div className="circlePage"></div>
          <div className="circlePage"></div>
          <div className="circlePage"></div>
        </div>
        {/* target blank 另開新窗  */}
        <a href={link} target="_blank">
          <img src={img} alt="" className="CardImgPage"></img>
        </a>
      </div>
      <div className="CardText">
        <p className="CardTitle">{title}</p>
        <p className="CardDescribe">{describe}</p>
      </div>
    </div>
  );
}
//describe link title have not add yet
export default CardForPage;
