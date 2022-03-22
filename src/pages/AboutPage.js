import React from "react";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
function About() {
  return (
    <div className="AboutPart">
      <section>
        <AboutMe />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Experience />
      </section>
    </div>
  );
}

export default About;
