import React from 'react';
import worldWallet from '../img/gif-desktop-my-world-wallet.gif';

function MyWorldWallet() {
  return (
    <div className="portfolio__content grid swiper-slide">
      <img src={ worldWallet } alt="my world wallet gif" className="portfolio__img" />
      <div className="portfolio__data">
        <h3 className="portfolio__title">My World Wallet</h3>
        <p className="portfolio__description">Application that works as a wallet, where you can specify your expenses and convert in selected currency.</p>
        <p><strong>- FOR DESKTOP AND MOBILE</strong></p>
        <a href="https://my-world-wallet.vercel.app" rel="noreferrer" target="_blank" className="button button--flex button--small portfolio__button">Demo<i className="uil uil-arrow-right button__icon" /></a>
      </div>
    </div>
  );
}

export default MyWorldWallet;
