import React, { useEffect, useRef } from "react";
import TryBuy from "../projects/TryBuy";
import Wildbeast from "../projects/Wildbeast";
import FacebookPage from "../projects/FacebookPage";
import MyWorldWallet from "../projects/MyWorldWallet";
import GrandRecipe from "../projects/GrandRecipe";
import PaintIt from "../projects/PaintIt";
import "../styles/Global.css";

function Portfolio() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (window.Swiper) {
      new window.Swiper(swiperRef.current, {
        cssMode: true,
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: { el: ".swiper-pagination", clickable: true },
      });
    }
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <div className="portfolio__container container">
        <div className="swiper" ref={swiperRef}>
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <TryBuy />
            </div>
            <div className="swiper-slide">
              <Wildbeast />
            </div>
            <div className="swiper-slide">
              <FacebookPage />
            </div>
            <div className="swiper-slide">
              <MyWorldWallet />
            </div>
            <div className="swiper-slide">
              <GrandRecipe />
            </div>
            <div className="swiper-slide">
              <PaintIt />
            </div>
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
