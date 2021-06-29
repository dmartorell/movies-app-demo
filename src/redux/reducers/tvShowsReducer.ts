import actionTypes from '../actions/actionTypes';
import PopularTvShows from '../../types/popularTvShows';

function tvShowsReducer(popularTvShows = [], action:
    {
        type: string, popularTvShows: PopularTvShows
    }) {
  switch (action.type) {
    case actionTypes.LOAD_TVSHOWS:
      return action.popularTvShows;
    default:
      return popularTvShows;
  }
}
export default tvShowsReducer;
