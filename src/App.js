import React, { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/Routes";

import './App.css';

import UserContext from "./auth/UserContext";


function App() {

    // Handles site-wide signup
    // logs in user and sets token
    async function signup(signupData) {
      try {
        let token = await JoblyApi.signup(signupData);
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
        let token = await JoblyApi.login(loginData);
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
  );

}

export default App;
