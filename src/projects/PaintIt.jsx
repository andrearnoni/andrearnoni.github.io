import React from 'react';
import paintIt from '../img/paint-it.gif';

function PaintIt() {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={ paintIt } alt="paint-it page" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">Paint It!</h3>
        <p className="portfolio__description">App that works as a paint calculator. Designed for Desktop.</p>
        <p><strong>- FOR DESKTOP</strong></p>
        <a href="https://paint-it.vercel.app/" rel="noreferrer" target="_blank" className="button button--flex button--small portfolio__button">Demo<i className="uil uil-arrow-right button__icon" /></a>
      </div>
    </div>
  );
}

export default PaintIt;
