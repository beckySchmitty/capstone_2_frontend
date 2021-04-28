import {GET_OMDB_MOVIE_DETAILS,
  ADD_TO_OMDB, 
  RESET_ALL, 
NO_ADD,
LOAD_ERROR} from "../actions/types"

const INITIAL_STATE = [];

export default function rootReducer(state = INITIAL_STATE, action) {

    switch (action.type) {

      case RESET_ALL:
        return [ ...INITIAL_STATE ];
  
      case GET_OMDB_MOVIE_DETAILS:
        return [ ...state, action.movie ];

      case ADD_TO_OMDB:
        if (action.movie.msg === "do not dispatch") {
          return [...state, {alreadySaved: true}];
        }
        return [...state, {...action.movie, added: true}];

      case LOAD_ERROR:
        return [...state, {ERROR: action.error}];
  
      default:
        return state;
    }
  }
  