import { Dispatch } from 'redux';
import axios from 'axios';
import actionTypes from './actionTypes';

const POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular';
const POPULAR_TVSHOWS_URL = 'https://api.themoviedb.org/3/tv/popular';
const MOVIE_DETAIL_URL = 'https://api.themoviedb.org/3/movie/';
const TV_DETAIL_URL = 'https://api.themoviedb.org/3/tv/';
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
        popularTvShows: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_TVSHOWS_ERROR,
      });
    }
  };
}
export function loadDetail({ id, type } : {id: string, type : string}) {
  return async (dispatch: Dispatch) => {
    try {
      const { data } = type === 'movie'
        ? await axios(`${MOVIE_DETAIL_URL}${id}?api_key=${apiKey}`)
        : await axios(`${TV_DETAIL_URL}${id}?api_key=${apiKey}`);

      dispatch({
        type: actionTypes.LOAD_DETAIL,
        selectedItem: data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_DETAIL_ERROR,
      });
    }
  };
}
