import {SET_CURR_USER} from "../actions/types"

export default function rootReducer(state = [], action) {
    switch (action.type) {
  
      case SET_CURR_USER:
        return { ...state, [action.currentUser.id]: action.currentUser };

      default:
        return state;
    }
  }
  