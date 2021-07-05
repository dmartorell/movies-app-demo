import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadMovies, loadTvShows } from '../../redux/actions/actionCreators';
import Store from '../../types/store';
import MediaItemList from '../MoviesList';

import Button from '../Button';
import './style.scss';

const HeroSection: FC = () => {
  const heroImage = 'https://i.ibb.co/VL959Vg/hero-image4.png';
  const [tvIsSelected, setTvIsSelected] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((store: Store) => store.popularMovies.results);
  const tvShows = useSelector((store: Store) => store.popularTvShows.results);

  useEffect(() => {
    dispatch(loadTvShows());
    dispatch(loadMovies());
    window.scrollTo(0, 0);
  }, []);

  const toggleButton = () => {
    setTvIsSelected(!tvIsSelected);
  };
  const handleClick = () => {
    toggleButton();
  };

  return (
    <>
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
            <div className="buttons">
              <Button
                className={
              tvIsSelected
                ? 'main-btn'
                : 'main-btn main-btn--selected'
            }
                disabled={!tvIsSelected}
                onClick={handleClick}
              >
                Movies
              </Button>
              <Button
                className={
              tvIsSelected
                ? 'main-btn main-btn--selected'
                : 'main-btn'
              }
                disabled={tvIsSelected}
                onClick={handleClick}
              >
                TV Shows
              </Button>
            </div>
          </article>
          <article className="container__right-side">
            <img src={heroImage} className="hero-image" alt="shapla main ilustration" />
          </article>
        </div>
      </section>
      {
          tvIsSelected
            ? <MediaItemList list={tvShows} category="tv" />
            : <MediaItemList list={movies} category="movie" />
        }
    </>
  );
};

export default HeroSection;
