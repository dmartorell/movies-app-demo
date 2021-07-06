import React, { useState, useEffect, FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Link, Switch, Route, useRouteMatch,
} from 'react-router-dom';
import Store from '../../types/store';
import HeroSection from '../HeroSection';
import Button from '../Button';
import ListComponent from '../ListComponent';
import { loadMovies, loadTvShows } from '../../redux/actions/actionCreators';
import './style.scss';

const Landing: FC = () => {
  const { path } = useRouteMatch();
  const [tvIsSelected, setTvIsSelected] = useState(path === '/tv/');
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
        <Link to="/movie">
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
        </Link>
        <Link to="/tv">
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
        </Link>
      </div>
      <Switch>
        <Route
          path="/movie"
          render={() => (
            <ListComponent list={movies} category="movie" />
          )}
        />
        <Route
          path="/tv"
          render={() => (
            <ListComponent list={tvShows} category="tv" />
          )}
        />
      </Switch>
    </>
  );
};

export default Landing;
