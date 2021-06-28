import React from 'react';
import Button from '../Button';
import './style.scss';

const HeroSection = () => (
  <section>
    <div className="container">
      <article className="container__left-side">
        <h1>
          Dare to Play higher
        </h1>
        <h3>
          Find movies and TV Shows that bring your mood back.
        </h3>
        <Button className="list-btn" onClick={() => {}}>Explore TV Shows</Button>
        <Button className="list-btn" onClick={() => {}}>Explore Movies</Button>

      </article>
      <article className="container__right-side" />

    </div>
  </section>
);

export default HeroSection;
