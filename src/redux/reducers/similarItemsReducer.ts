import actionTypes from '../actions/actionTypes';
import MediaItem from '../../types/mediaItem';

function similarItemsReducer(
  similarItems = {},
  action: {type: string, similarItems: MediaItem[]},
) {
  if (action.type === actionTypes.LOAD_SIMILAR) {
    return action.similarItems;
  }
  return similarItems;
}
export default similarItemsReducer;
