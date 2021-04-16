// calls to OMDB API

import axios from "axios";
const dotenv = require('dotenv').config()


const API_KEY = process.env.REACT_APP_OMDB_API_KEY
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

class OmdbApi {

    static async getPoster(imdb_id) {
        let resp = await axios.get(`${BASE_URL}&i=tt${imdb_id}`)
        console.log(`OMDB API Response*******************${JSON.stringify(resp.data.Poster)}`)
        return resp.data.Poster;
    }
}

export default OmdbApi;