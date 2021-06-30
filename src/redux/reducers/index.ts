import { combineReducers } from 'redux';
import tvShowsReducer from './tvShowsReducer';
import moviesReducer from './moviesReducer';
import selectedItemReducer from './selectedItemReducer';
import similarItemsReducer from './similarItemsReducer';

const rootReducer = combineReducers({
  popularTvShows: tvShowsReducer,
  popularMovies: moviesReducer,
  selectedItem: selectedItemReducer,
  similarItems: similarItemsReducer,
});

export default rootReducer;
