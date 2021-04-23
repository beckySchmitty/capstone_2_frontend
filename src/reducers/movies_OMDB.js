import {GET_OMDB_MOVIE_DETAILS, RESET_ALL} from "../actions/types"

const INITIAL_STATE = [];

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

      case RESET_ALL:
        return [ ...INITIAL_STATE ];
  
      case GET_OMDB_MOVIE_DETAILS:
        return [ ...state, action.movie ];
  
      default:
        return state;
    }
  }
  