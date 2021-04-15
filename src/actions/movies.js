import axios from "axios";
import {GET_BECH_MOVIE_BY_TITLE, GET_OMDB_MOVIE_DETAILS} from "./types"
import backendAPI from "../API/backendAPI"
// import OmdbApi from "../API/OmdbApi"

export function getMovieFromBechdel(term) {
  return async function (dispatch) {
    const response = await backendAPI.getMovieByTitle(term);
    console.log(`*********************ACTIONS API RESP: ${JSON.stringify(response.data[0])}`)
    return dispatch(geMovieBechdel(response.data[0]));
  };
}

function geMovieBechdel(movie) {
  return {
    type: GET_BECH_MOVIE_BY_TITLE,
    movie,
  };
}

