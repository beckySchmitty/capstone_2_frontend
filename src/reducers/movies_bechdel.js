import {GET_BECH_MOVIE_BY_TITLE} from "../actions/types"

export default function rootReducer(state = [], action) {

    switch (action.type) {
  
      case GET_BECH_MOVIE_BY_TITLE:
        return [ ...state, ...action.movies ];
  
      default:
        return state;
    }
  }
  