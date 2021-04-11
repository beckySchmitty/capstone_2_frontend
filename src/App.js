import React, { useState, useEffect } from "react";
// import jwt from "jsonwebtoken";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";
import backendAPI from "./API/backendAPI"
import useLocalStorage from "./Helpers/useLocalStorage";


import './App.css';

import UserContext from "./User/UserContext";


function App() {
  const [token, setToken] = useLocalStorage("token");
  const [currentUser, setCurrentUser] = useState(null);

  // ADD FUNC TO LOAD USER



    // Handles site-wide signup
    // logs in user and sets token
    async function signup(signupData) {
      try {
        let token = await backendAPI.signup(signupData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("signup failed", errors);
        return { success: false, errors };
      }
    }


    // Handles site-wide login
    // logs user in, saves token
    async function login(loginData) {
      try {
        let token = await backendAPI.login(loginData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("login failed", errors);
        return { success: false, errors };
      }
    }
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={currentUser, setCurrentUser}>      
          <div>
          <Routes login={login} signup={signup} />
        </div>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );

}

export default App;
