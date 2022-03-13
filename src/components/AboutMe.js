import React from "react";
import "../Style/AboutMe.css";
import Me from "../img/AboutMe.JPG";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
function AboutMe() {
  return (
    <div className="About">
      <div className="a-left">
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <div className="AboutIcon">
          <div className="iconAward">
            <FaAward />
            <h6>Experience</h6>
            <h6> less 1 years</h6>
          </div>
          <div className="iconWorks">
            <MdWorkOutline />
            <h6>Projects</h6>
            <h6> 2 + </h6>
          </div>
          <div className="iconWorks">
            <MdWorkOutline />
            <h6>Projects</h6>
            <h6> 2 + </h6>
          </div>
        </div>
        <div className="AboutText">
          <h6>
            I'm a <span>Front-end-Develope Junior </span>trying to get in{" "}
            <span>IT department.</span>IT department. Here , you could know what
            i'm working on and what kind of skills , tools and languages i used
            to set up the website. Hope you would like it!
          </h6>
        </div>
        <div className="btn-contact">
          <button className="Talk-btn">Let's Talk</button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
