import React, { FC } from 'react';
import './style.scss';

const HeroSection: FC = () => {
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
            2000+ Movies and TV Shows
            {' '}
            <br />
            to bring your
            {' '}
            <span className="hero-subtitle__highlight"> mood back.</span>
          </h3>
        </article>
        <article className="container__right-side">
          <img src={heroImage} className="hero-image" alt="shapla main ilustration" />
        </article>
      </div>
    </section>
  );
};

export default HeroSection;
