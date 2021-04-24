import {GET_OMDB_MOVIE_DETAILS,
  ADD_TO_OMDB, 
  RESET_ALL, 
NO_ADD} from "../actions/types"

const INITIAL_STATE = [];

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

      case RESET_ALL:
        return [ ...INITIAL_STATE ];
  
      case GET_OMDB_MOVIE_DETAILS:
        return [ ...state, action.movie ];

      case ADD_TO_OMDB:
        return [...state, {...action.movie, added: true}];

      case NO_ADD:
        return state;
  
      default:
        return state;
    }
  }
  