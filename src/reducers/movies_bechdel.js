import {GET_BECH_MOVIE_BY_TITLE, RESET_ALL} from "../actions/types"

/**
 * Reducer for calls to the Bechdel dataset (API on backend of this project)
 */


const INITIAL_STATE = [];

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

      case RESET_ALL:
        return [...INITIAL_STATE ];
  
      case GET_BECH_MOVIE_BY_TITLE:
        if (action.movies.ERROR) {
          return [...action.movies.ERROR]
        }
        return [ ...state, ...action.movies ];
  
      default:
        return state;
    }
  }
  