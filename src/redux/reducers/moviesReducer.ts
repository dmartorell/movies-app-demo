import actionTypes from '../actions/actionTypes';
import PopularMovies from '../../types/popularMovies';

function moviesReducer(popularMovies = [], action: {type: string, popularMovies: PopularMovies}) {
  switch (action.type) {
    case actionTypes.LOAD_MOVIES:
      return action.popularMovies;
    default:
      return popularMovies;
  }
}
export default moviesReducer;
