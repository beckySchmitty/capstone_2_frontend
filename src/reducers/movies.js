import {GET_BECH_MOVIE_BY_TITLE, GET_OMDB_MOVIE_DETAILS} from "../actions/types"

export default function rootReducer(state = {}, action) {

    switch (action.type) {
  
      case GET_BECH_MOVIE_BY_TITLE:
        return { ...state, [action.movie[0].title]: action.movie };
  
      case GET_OMDB_MOVIE_DETAILS:
        return { ...state, [action.movie.id]: action.movie };

  
      default:
        return state;
    }
  }
  