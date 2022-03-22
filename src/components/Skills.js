import "../Style/Skills.css";

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
          React
        </div>
        <div
          className="tools toolsRight"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          CSS
        </div>
        <div
          className="tools toolsLeft"
          data-aos="fade-up"
          data-aos-delay="750"
        >
          HTML
        </div>
        <div
          className="tools toolsRight"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          JavaScript
        </div>
        <div
          className="tools toolsLeft"
          data-aos="fade-up"
          data-aos-delay="1250"
        >
          Node.js
        </div>
        <div
          className="tools toolsRight"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          MySQL
        </div>
      </div>
    </div>
  );
}

export default AboutMeForPages;
