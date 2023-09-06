import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';
import Wildbeast from '../projects/Wildbeast';
import TryBuy from '../projects/TryBuy';
import MyWorldWallet from '../projects/MyWorldWallet';
import FacebookPage from '../projects/FacebookPage';
import GrandRecipe from '../projects/GrandRecipe';
import PaintIt from '../projects/PaintIt';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/Global.css';

function Portfolio() {

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent works</span>
      <div className="portfolio__container container swiper-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Navigation, Pagination]}
            cssMode={true}
            navigation
            pagination
            className="mySwiper"
          >
            <SwiperSlide>
              <TryBuy />
            </SwiperSlide>

            <SwiperSlide>
              <Wildbeast />
            </SwiperSlide>

            <SwiperSlide>
              <FacebookPage />
            </SwiperSlide>

            <SwiperSlide>
              <MyWorldWallet />
            </SwiperSlide>

            <SwiperSlide>
              <GrandRecipe />
            </SwiperSlide>

            <SwiperSlide>
              <PaintIt />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
