import React, { useEffect } from "react";
import "../Style/Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Me from "../img/IMG_5275.JPG";
import Card from "../components/CollectCard";
function Home() {
  //設定aos.初始值
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      {/* self-part */}
      <div className="container">
        <section className="main-context">
          <div className="left-intro">
            {/* aos fade in */}
            <div
              data-aos="fade-right"
              data-aos-easing="ease-in-sine"
              className="introFadeBox"
            >
              <img src={Me} alt="" className="i-img"></img>
            </div>
          </div>
          <div className="right-intro">
            <h2>Hello, I am </h2>
            <div className="auto-title">
              <div className="title-wrapper">
                <div className="title-item">Micheal</div>
                <div className="title-item">Front-End Dev</div>
                <div className="title-item">Junior</div>
              </div>
            </div>
            <div className="seeMoreBtn">
              <Link to="/about">
                <button className="moreBtn">See more</button>
              </Link>
            </div>
          </div>
        </section>
        {/* collection */}
        <section className="collection-part">
          <Card />
        </section>
        {/* contact */}
        <section className="contact-part">456</section>
      </div>
    </>
  );
}

export default Home;
