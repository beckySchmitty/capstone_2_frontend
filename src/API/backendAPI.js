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

  // User login - get token from username, password
  static async login(data) {
    let res = await this.request(`user/login`, data, "post");
    return res.token;
  }

  // User Signup
  static async signup(data) {
    let res = await axios({
      method: 'post',
      url: 'http://localhost:3001/user/register',
      data, 
      headers: {
          'Content-Type': 'application/json'
      }
  
    });
    return res.token;
  }

    // GET currentUser
  static async getCurrentUser(username) {
      let res = await this.request(`user/${username}`);
      return res;
    }

}


export default backendAPI;
