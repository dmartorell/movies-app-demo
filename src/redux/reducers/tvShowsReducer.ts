import actionTypes from '../actions/actionTypes';
import PopularTvShows from '../../types/popularTvShows';

function tvShowsReducer(popularTvShows = [], action:
    {
        type: string, popularTvShows: PopularTvShows
    }) {
  if (action.type === actionTypes.LOAD_TVSHOWS) {
    return action.popularTvShows;
  }
  return popularTvShows;
}
export default tvShowsReducer;
