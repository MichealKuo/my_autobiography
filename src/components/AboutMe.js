import React from "react";
import "../Style/AboutMe.css";
import Me from "../img/AboutMe.JPG";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BiBody } from "react-icons/bi";
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
            <FaAward className="icon-size" />
            <p className="textSizeTitle">Experience</p>
            <p className="textSize"> less 1 year</p>
          </div>
          <div className="iconWorks">
            <MdWorkOutline className="icon-size " />
            <p className="textSizeTitle">Projects</p>
            <p className="textSize"> 2 + </p>
          </div>
          <div className="iconPer">
            <BiBody className="icon-size" />
            <p className="textSizeTitle">Personality</p>
            <p className="textSize">Perseverance</p>
          </div>
        </div>
        <div className="AboutText">
          <h6>
            I'm a <span>Front-end-Develope Junior </span>trying to get in
            <span> IT department.</span> Here , you could know what i'm working
            on and what kind of skills , tools and languages i used to set up
            the website. Hope you would like it!
          </h6>
        </div>
        <div className="btn-contact">
          <a href="#contact">
            <button className="Talk-btn">Let's Talk</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
