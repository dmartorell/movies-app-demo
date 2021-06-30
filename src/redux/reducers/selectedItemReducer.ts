import actionTypes from '../actions/actionTypes';
import Detail from '../../types/detail';

function selectedItemReducer(selectedItem = {}, action: {type: string, selectedItem: Detail}) {
  switch (action.type) {
    case actionTypes.LOAD_DETAIL:
      return action.selectedItem;
    default:
      return selectedItem;
  }
}
export default selectedItemReducer;
