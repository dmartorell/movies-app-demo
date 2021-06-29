import { Dispatch } from 'redux';
import axios from 'axios';
import actionTypes from './actionTypes';

const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';
const POPULAR_TVSHOWS_URL = 'https://api.themoviedb.org/3/tv/popular';
const apiKey = process.env.REACT_APP_THEMOVIEDB_APIKEY;

export function loadMovies() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`${POPULAR_MOVIES_URL}?api_key=${apiKey}`);
      dispatch({
        type: actionTypes.LOAD_MOVIES,
        popularMovies: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_MOVIES_ERROR,
      });
    }
  };
}
export function loadTvShows() {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = await axios(`${POPULAR_TVSHOWS_URL}?api_key=${apiKey}`);
      dispatch({
        type: actionTypes.LOAD_TVSHOWS,
        popularMovies: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TVSHOWS_ERROR,
      });
    }
  };
}
