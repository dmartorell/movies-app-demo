import { combineReducers } from 'redux';
import tvShowsReducer from './tvShowsReducer';
import moviesReducer from './moviesReducer';
import selectedItemReducer from './selectedItemReducer';

const rootReducer = combineReducers({
  popularTvShows: tvShowsReducer,
  popularMovies: moviesReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;
