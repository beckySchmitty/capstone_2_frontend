// calls to OMDB API

import axios from "axios";


const API_KEY = process.env.REACT_APP_OMDB_API_KEY
const URL = `https://www.omdbapi.com/?apikey=${API_KEY}`

async function getMovie(imdb_id) {
    let resp = await axios.get(`${URL}&i=tt0${imdb_id}`)
    return resp.data;
}

export default getMovie;