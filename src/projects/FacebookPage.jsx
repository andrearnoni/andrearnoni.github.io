import React from 'react';
import facebook from '../img/facebook.png';

function FacebookPage() {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={ facebook } alt="facebook page" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">Facebook Page(old-version)</h3>
        <p className="portfolio__description">This page simulates the login Facebook page. Designed in responsive mode.</p>
        <p><strong>- FOR DESKTOP AND MOBILE</strong></p>
        <a href="https://just-for-study.vercel.app/" rel="noreferrer" target="_blank" className="button button--flex button--small portfolio__button">Demo<i className="uil uil-arrow-right button__icon" /></a>
      </div>
    </div>
  );
}

export default FacebookPage;
