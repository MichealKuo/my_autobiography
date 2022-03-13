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
        <section className="mainContext-part">
          <Intro />
        </section>
        {/* About ME */}
        <section className="about-part">
          <AboutMe />
        </section>
        {/* collection */}
        <section className="collection-part">
          <CollectCard />
        </section>
        {/* contact */}
        <section className="contact-part">
          <Contact />
        </section>
      </div>
    </>
  );
}

export default Home;
