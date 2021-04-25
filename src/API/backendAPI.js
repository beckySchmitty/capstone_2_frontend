// Calls to backend API writtein in Express with imported .csv bechdel data in db

import axios from "axios";

const BASE_URL = "http://localhost:3001";

// API class for backend API

class backendAPI {
  // token stored here
  static token;

  static async request(endpoint, data = {}, method = "get") {

    // auth token passed in through header
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${backendAPI.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      // let message = err.response.data.error.message;
      let message = err.response;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // ***************************************Individual API routes

  // Get movies by TITLE
  static async getMoviesByTitle(term) {
    let res = await this.request(`bechdel/title/${term}`);
    return res;
    }

  // Get movies by YEAR
  static async getMoviesByYear(year) {
    let res = await this.request(`bechdel/year/${year}`);
    return res;
   }

  //  POST movie to omdb_movies table database 
   static async addToOMDB(data) {
    let res = await axios({
      method: 'post',
      url: 'http://localhost:3001/omdb/add',
      data, 
      headers: {
          'Content-Type': 'application/json'
      }
  
    });    
    return res;
  }


    //  POST info to to watchlist table in database 
    static async addToWatchlist(imdb_id, user_id) {
      let data = {imdb_id, user_id}
      let res = await axios({
        method: 'post',
        url: 'http://localhost:3001/omdb/add/watchlist',
        data, 
        headers: {
            'Content-Type': 'application/json'
        }
    
      });    
      return res;
    }
  
    //  GET current user watchlist
    static async getWatchlist(user_id) {
      let data = {user_id}
      let res = await axios({
        method: 'post',
        url: 'http://localhost:3001/user/watchlist',
        data, 
        headers: {
            'Content-Type': 'application/json'
        }
    
      });    
      return res.data;
    }





  // POST User login - get token from username, password
  static async login(data) {
    let res = await this.request(`user/login`, data, "post");
    return res.token;
  }

  // POST User Signup
  static async signup(data) {
    let res = await axios({
      method: 'post',
      url: 'http://localhost:3001/user/register',
      data, 
      headers: {
          'Content-Type': 'application/json'
      }
  
    });
    return res.data.token;
  }

    // GET currentUser
  static async getCurrentUser(username) {
      let res = await this.request(`user/${username}`);
      return res;
    }

}


export default backendAPI;
