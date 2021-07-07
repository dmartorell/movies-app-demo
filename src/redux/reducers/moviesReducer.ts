import actionTypes from '../actions/actionTypes';
import PopularMovies from '../../types/popularMovies';

function moviesReducer(popularMovies = [] || null, action: {
  type: string, popularMovies: PopularMovies
}) {
  if (action.type === actionTypes.LOAD_MOVIES) {
    return action.popularMovies;
  }
  return popularMovies;
}
export default moviesReducer;
