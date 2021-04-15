import {SET_CURR_USER} from "../actions/types"

export default function rootReducer(state = [], action) {
    switch (action.type) {
  
      case SET_CURR_USER:
        return { ...state, [action.curr_user.id]: action.curr_user };

      default:
        return state;
    }
  }
  