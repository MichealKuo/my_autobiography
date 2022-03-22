import "../Style/Skills.css";
import { FaReact, FaCss3Alt, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiJavascript, SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

import React from "react";

function AboutMeForPages() {
  return (
    <div className="Skills">
      <div className="SkillsText" data-aos="fade-right">
        <h1>Skills</h1>
      </div>
      <div className="SkillsBar">
        <div
          className="tools toolsLeft"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <span>
            <FaReact />
          </span>
          React
        </div>
        <div
          className="tools toolsRight"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <span>
            <FaCss3Alt />
          </span>
          CSS
        </div>
        <div
          className="tools toolsLeft"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          <span>
            <FaHtml5 />
          </span>
          HTML
        </div>
        <div
          className="tools toolsRight"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <span>
            <SiJavascript />
          </span>
          JavaScript
        </div>
        <div
          className="tools toolsLeft"
          data-aos="fade-up"
          data-aos-delay="1250"
        >
          <span>
            <FaNodeJs />
          </span>
          Node.js
        </div>
        <div
          className="tools toolsRight"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          <span>
            <GrMysql />
          </span>
          MySQL
        </div>
      </div>
    </div>
  );
}

export default AboutMeForPages;
