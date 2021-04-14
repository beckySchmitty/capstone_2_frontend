// calls to OMDB API

import axios from "axios";
const dotenv = require('dotenv').config()


const API_KEY = process.env.REACT_APP_OMDB_API_KEY
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`

class OmdbApi {

    static async getTestPoster(imdb_id) {
        let resp = await axios.get(`${BASE_URL}&i=tt${imdb_id}`)
        console.log(`OMDB API RESPonse*******************${JSON.stringify(resp.data.Poster)}`)
        return resp.data.poster;
    }
}

export default OmdbApi;