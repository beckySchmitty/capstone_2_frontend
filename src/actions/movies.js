import axios from "axios";
import {GET_BECH_MOVIE_BY_TITLE, GET_OMDB_MOVIE_DETAILS} from "./types"
import backendAPI from "../API/backendAPI"
// import OmdbApi from "../API/OmdbApi"

export function getMovieFromBechdel(term) {
  return async function (dispatch) {
    const response = await backendAPI.getMovieByTitle(term);
    console.log(`*********************ACTIONS API RESP: ${JSON.stringify(response.data)}`)
    return dispatch(geMovieBechdel(response.data));
  };
}

function geMovieBechdel(movies) {
  return {
    type: GET_BECH_MOVIE_BY_TITLE,
    movies,
  };
}

