import {SET_CURR_USER, LOGOUT_CURR_USER} from "../actions/types"

const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
  
      case SET_CURR_USER:
        return {[action.currentUser.id]: action.currentUser };
      
      case LOGOUT_CURR_USER:
        return INITIAL_STATE;

      default:
        return state;
    }
  }
  