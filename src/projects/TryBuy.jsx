import React from 'react';
import tryBuy from '../img/tryBuy.gif';
import '../styles/Global.css';

function TryBuy() {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={ tryBuy } alt="trybuy gif" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">TryBuy Brasil</h3>
        <p className="portfolio__description">Application that simulates a marketplace. Here I used the Mercado Livre API, so all the products, prices and descriptions are real.</p>
        <p><strong>- FOR DESKTOP AND MOBILE</strong></p>
        <a 
          href="https://try-buy-brasil.vercel.app/"
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
