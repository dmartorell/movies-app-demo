import actionTypes from '../actions/actionTypes';
import Movie from '../../types/movie';

function similarItemsReducer(
  similarItems = {},
  action: {type: string, similarItems: Movie[]},
) {
  if (action.type === actionTypes.LOAD_SIMILAR) {
    return action.similarItems;
  }
  return similarItems;
}
export default similarItemsReducer;
