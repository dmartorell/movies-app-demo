import React from 'react';
import Button from '../Button';
import './style.scss';

const HeroSection = () => {
  const heroImage = 'https://i.ibb.co/VL959Vg/hero-image4.png';

  return (
    <section>
      <div className="container">
        <article className="container__left-side">
          <h1 className="hero-title">
            Dare
            {' '}
            <br />
            to Play
            {' '}
            <br />
            higher
          </h1>
          <h3 className="hero-subtitle">
            2000+ movies and TV Shows
            {' '}
            <br />
            to bring your
            {' '}
            <span className="hero-subtitle__highlight"> mood back.</span>
          </h3>
          <div className="buttons">
            <Button className="main-btn main-btn--selected" onClick={() => { console.log('hi'); }}>Movies</Button>
            <Button className="main-btn" onClick={() => {}}>TV Shows</Button>
          </div>

        </article>
        <article className="container__right-side">
          <img src={heroImage} className="hero-image" alt="shapla main ilustration" />
        </article>

      </div>
    </section>
  );
};

export default HeroSection;
