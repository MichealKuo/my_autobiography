import React, { useEffect } from "react";
import "../Style/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CollectCard from "../components/CollectCard";
import AboutMe from "../components/AboutMe";
import Intro from "../components/Intro";
import Contact from "../components/Contact";

function Home() {
  //設定aos.初始值
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* self-part */}
      <div className="HomePage">
        <section>
          <Intro />
        </section>
        {/* About ME */}
        <section>
          <AboutMe />
        </section>
        {/* collection */}
        <section>
          <CollectCard />
        </section>
        {/* contact */}
        <section id="contact">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Home;
