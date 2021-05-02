import {SET_CURR_USER, LOGOUT_CURR_USER} from "../actions/types"

/**
 * Reducer for current user
 */


const INITIAL_STATE = {}

export default function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
  
      case SET_CURR_USER:
        return {...action.currentUser };
      
      case LOGOUT_CURR_USER:
        return INITIAL_STATE;

      default:
        return state;
    }
  }
  