// Calls to backend API with imported .csv bechdel data in db

import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

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

  // Individual API routes

  // Get Movies - all from 2020
  static async getAll2020Movies() {
    let res = await this.request("bechdel/all");
    return res;
   }

  // User login - get token from username, password
  static async login(data) {
    let res = await this.request(`auth/token`, data, "post");
    return res.token;
  }

  // User Signup
  static async signup(data) {
    let res = await this.request(`auth/register`, data, "post");
    return res.token;
  }
}


export default backendAPI;
