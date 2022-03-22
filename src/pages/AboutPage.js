import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
function About() {
  return (
    <div className="AboutPart">
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
    </div>
  );
}

export default About;
