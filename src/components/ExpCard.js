import React from "react";
import Senao from "../img/senao-logo.jpeg";
import iii from "../img/iii.jpeg";
import "../Style/ExpCard.css";

function ExpCard() {
  return (
    <div className="ExpBox">
      <div className="ExpCard" data-aos="zoom-in-up">
        <img className="ExpCardImg" src={iii} alt="" />
        <p className="ExpCardText">
          2021.6~2021.11
          <br />
          <span>Institute for Information Industry, Trainer </span>
          <br />
          The institute thought React framework, CSS, HTML, JavaScript, Node.js
          and MySQL database, I used these tools, languages to set up the
          website "Mao-Planet" as senior project.
        </p>
      </div>
      <div className="ExpCard" data-aos="zoom-in-up">
        <img className="ExpCardImg" src={Senao} alt="" />
        <p className="ExpCardText">
          2016~2019 <br />
          <span>Senao International Company, Assistant engineer </span> <br />
          Multi-tasked by fixing customers' Apple device issues. The job not
          only get more deeply Information/Knowledge about Apple devices but
          also improve conversation skills between customers.
        </p>
      </div>
    </div>
  );
}

export default ExpCard;
