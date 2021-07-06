import actionTypes from '../actions/actionTypes';
import List from '../../types/list';

function similarItemsReducer(
  similarItems = {},
  action: {type: string, similarItems: List[]},
) {
  if (action.type === actionTypes.LOAD_SIMILAR) {
    return action.similarItems;
  }
  return similarItems;
}
export default similarItemsReducer;
