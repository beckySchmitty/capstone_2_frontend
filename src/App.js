import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


import jwt from "jsonwebtoken";
import NavBar from "./routes/MyNavBar"
import Routes from "./routes/routes";
import backendAPI from "./API/backendAPI"
// import useLocalStorage from "./helpers/useLocalStorage";
import './styles/App.css';
import { useDispatch } from "react-redux";
import {addCurrentUser} from "./actions/users"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faVenus } from '@fortawesome/free-solid-svg-icons'

library.add(faVenus)

function App() {
  const [token, setToken] = useState(false);
  const dispatch = useDispatch();

  // LOAD currentUser- side effect
  // Runs with token change
  useEffect(function loadUserFromAPI() {

      async function getCurrentUser() {
        if (token) {
          try {
            // grab username
            let { username } = jwt.decode(token);
            // save token to Api class so it can be used in API call
            backendAPI.token = token;
            let data = await backendAPI.getCurrentUser(username);
            // Update currentUser state
            dispatch(addCurrentUser(data.user))

          } catch (error) {
            console.error("^^loadUserFromAPI Error: ", error);
          }
        }
      }  
      getCurrentUser();
    }, [dispatch, token]);


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
        <div>
          <NavBar />
          <Routes login={login} signup={signup} />
        </div>
    </div>
  );

}

export default App;
