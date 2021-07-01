import actionTypes from '../actions/actionTypes';
import Detail from '../../types/detail';

function selectedItemReducer(selectedItem = {}, action: {type: string, selectedItem: Detail}) {
  if (action.type === actionTypes.LOAD_DETAIL) {
    return action.selectedItem;
  }
  return selectedItem;
}
export default selectedItemReducer;
