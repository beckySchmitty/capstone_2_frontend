// import axios from "axios";
import {GET_BECH_MOVIE_BY_TITLE, GET_OMDB_MOVIE_DETAILS} from "./types"
import backendAPI from "../API/backendAPI"
// import OmdbApi from "../API/OmdbApi"
import getMovie from "../API/OMDB"

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

export function getMovieFromOMDB(imdb_id) {
  return async function (dispatch) {
    const response = await getMovie(imdb_id);
    // console.log(`*********************ACTIONS API OMDB: ${JSON.stringify(response)}`)
    return dispatch(getOMDBMovie(response));
  };
}

function getOMDBMovie(movie) {
  return {
    type: GET_OMDB_MOVIE_DETAILS,
    movie,
  };
}