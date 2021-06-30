import actionTypes from '../actions/actionTypes';
import Movie from '../../types/movie';

function similarItemsReducer(
  similarItems = {},
  action: {type: string, similarItems: Movie[]},
) {
  switch (action.type) {
    case actionTypes.LOAD_SIMILAR:
      return action.similarItems;
    default:
      return similarItems;
  }
}
export default similarItemsReducer;
