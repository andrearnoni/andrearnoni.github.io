import React from 'react';
import wildbeast from '../img/gif-desktop-wildbeast.gif';

function Wildbeast() {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={ wildbeast } alt="wildbeast page" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">Wildbeast</h3>
        <p className="portfolio__description">Simple page to apply CSS grid layout and responsive design conceptions.</p>
        <p><strong>- FOR DESKTOP AND MOBILE</strong></p>
        <a href="https://wildbeast-wolf.vercel.app" rel="noreferrer" target="_blank" className="button button--flex button--small portfolio__button">Demo<i className="uil uil-arrow-right button__icon" /></a>
      </div>
    </div>
  );
}

export default Wildbeast;
