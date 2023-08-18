import React from 'react';
import './Hero.css';
import appstore from '../../assets/appstore-logo.svg';
import hero from '../../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero__container" id="emotions">
      {/* left */}
      <div className="hero__info">
        <p>Ahead app</p>
        <h1>Master your life</h1>
        <h1>by mastering</h1>
        <h1>emotions</h1>

        <div className="hero__icons">
          <img src={appstore} alt="appstore" loading="lazy" />

          <span className="hero__review">
            ⭐ ⭐ ⭐ ⭐ ⭐
            <br />
            <p>100+ AppStore reviews</p>
          </span>
        </div>
      </div>

      {/* right */}

      <div className="hero__img">
        <img src={hero} alt="logo" loading="lazy" />
      </div>
    </section>
  );
};

export default Hero;
