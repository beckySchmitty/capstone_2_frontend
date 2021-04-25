// import axios from "axios";
import {GET_BECH_MOVIE_BY_TITLE,
   GET_OMDB_MOVIE_DETAILS,
  ADD_TO_OMDB, 
NO_ADD} from "./types"
import backendAPI from "../API/backendAPI"
import getMovie from "../API/OMDB"

const MOVIES = [];


// ***
// GET movie from backend API with bechdel data
export function getMoviesFromBechdel(term) {
  return async function (dispatch) {
    const response = await backendAPI.getMoviesByTitle(term);
    return dispatch(getMoviesBechdel(response.data));
  };
}

function getMoviesBechdel(movies) {
  return {
    type: GET_BECH_MOVIE_BY_TITLE,
    movies,
  };
}

// ***
// POST data from OMDB data recevied after API call to external OMDB data and 
// save that data to the backend database 
export function addToOMDBbackend(data) {
  return async function (dispatch) {
    const response = await backendAPI.addToOMDB(data);
    if (MOVIES.includes(response.data.Title)) {
      return "ERROR: Already added"
    } 
    else {
      MOVIES.push(response.data.Title)      
      return dispatch(addToDatabase(response.data));
    }
  };
}

function addToDatabase(movie) {
    return {
      type: ADD_TO_OMDB,
      movie,
    };
}



// function doNotAdd(data) {
//   return {
//     type: NO_ADD,
//     data,
//   };
// }





// **
export function getMovieFromOMDB(imdb_id, bechdel_rating) {
  return async function (dispatch) {
    const response = await getMovie(imdb_id);
    response["bechdel_rating"] = bechdel_rating
    return dispatch(getOMDBMovie(response));
  };
}

function getOMDBMovie(movie) {
  return {
    type: GET_OMDB_MOVIE_DETAILS,
    movie,
  };
}

