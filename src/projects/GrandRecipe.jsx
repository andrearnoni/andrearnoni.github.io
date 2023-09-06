import React from 'react';
import grand from '../img/grand.gif';

function TryBuy() {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={ grand } alt="grand recipe gif" className="portfolio__img-mobile" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">Grand Recipe</h3>
        <p className="portfolio__description">Application that gathers world food and drink recipes. Designed in web mode but just for mobile layout.</p>
        <p><strong>- FOR MOBILE</strong></p>
        <a 
          href="https://grand-recipe.vercel.app/"
          target="_blank" 
          rel="noreferrer" 
          className="button button--flex button--small portfolio__button">
            Demo
          <i className="uil uil-arrow-right button__icon" />
        </a>
      </div>
    </div>
  );
}

export default TryBuy;