import {GET_OMDB_MOVIE_DETAILS} from "../actions/types"

export default function rootReducer(state = [], action) {

    switch (action.type) {
  
      case GET_OMDB_MOVIE_DETAILS:
        return [ ...state, action.movie ];
  
      default:
        return state;
    }
  }
  