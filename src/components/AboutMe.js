import React from "react";
import "../Style/AboutMe.css";
import Me from "../img/AboutMe.JPG";
import { FaAward } from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";
import { BiBody } from "react-icons/bi";
import { Link } from "react-router-dom";
function AboutMe() {
  return (
    <div className="About">
      <div className="a-left">
        <div className="a-card">
          <img src={Me} alt="" className="a-img" data-aos="zoom-in" />
        </div>
      </div>
      <div className="a-right">
        <div className="AboutIcon">
          <div className="iconAward" data-aos="fade-down" data-aos-delay="250">
            <FaAward className="icon-size" />
            <p className="textSizeTitle">Experience</p>
            <p className="textSize"> less 1 year</p>
          </div>
          <div className="iconWorks" data-aos="fade-down" data-aos-delay="500">
            <MdWorkOutline className="icon-size" />
            <p className="textSizeTitle">Projects</p>
            <p className="textSize"> 2 + </p>
          </div>
          <div className="iconPer" data-aos="fade-down" data-aos-delay="750">
            <BiBody className="icon-size" />
            <p className="textSizeTitle">Personality</p>
            <p className="textSize">Perseverance</p>
          </div>
        </div>
        <div className="AboutText" data-aos="fade-up">
          <h6>
            I'm a <span>Front-end-Develope Junior </span>trying to get in
            <span> IT department.</span> Here , you could know what i'm working
            on and what kind of skills , tools and languages i used to set up
            the website. Hope you would like it!
          </h6>
        </div>
        <div className="btn-contact" data-aos="zoom-in">
          <Link to="/contactPage">
            <button className="Talk-btn">Let's Talk</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
