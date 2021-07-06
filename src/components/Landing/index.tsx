import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Store from '../../types/store';
import HeroSection from '../HeroSection';
import Button from '../Button';
import ListComponent from '../ListComponent/ListComponent';
import { loadMovies, loadTvShows } from '../../redux/actions/actionCreators';
import './style.scss';

const Landing: FC = () => {
  const [tvIsSelected, setTvIsSelected] = useState(false);
  const dispatch = useDispatch();
  const movies = useSelector((store: Store) => store.popularMovies.results);
  const tvShows = useSelector((store: Store) => store.popularTvShows.results);

  useEffect(() => {
    if (!movies?.length)dispatch(loadTvShows());
    if (!tvShows?.length)dispatch(loadMovies());
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
      <HeroSection />
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
      <ListComponent list={tvIsSelected ? tvShows : movies} category={tvIsSelected ? 'tv' : 'movie'} />
    </>
  );
};

export default Landing;
