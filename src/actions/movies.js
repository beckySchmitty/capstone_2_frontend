import axios from "axios";
import {GET_BECH_MOVIE_BY_TITLE, GET_OMDB_MOVIE_DETAILS} from "./types"
import backendAPI from "../API/backendAPI"
// import OmdbApi from "../API/OmdbApi"
import getPoster from "../API/OMDB"

export function getMovieFromBechdel(term) {
  return async function (dispatch) {
    const response = await backendAPI.getMovieByTitle(term);
    // console.log(`*********************ACTIONS API RESP: ${JSON.stringify(response.data)}`)
    return dispatch(getMovieBechdel(response.data));
  };
}

function getMovieBechdel(movies) {
  return {
    type: GET_BECH_MOVIE_BY_TITLE,
    movies,
  };
}

export function getMovieFromOMDB(imdb_id) {
  return async function (dispatch) {
    const response = await getPoster(imdb_id);
    console.log(`*********************ACTIONS API OMDB: ${JSON.stringify(response.data)}`)
    return dispatch(getOMDBMovie(response.data));
  };
}

function getOMDBMovie(movie) {
  return {
    type: GET_BECH_MOVIE_BY_TITLE,
    movie,
  };
}