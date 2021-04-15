import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// import jwt from "jsonwebtoken";
import NavBar from "./routes/MyNavBar"
import Routes from "./Routes/Routes";
import backendAPI from "./API/backendAPI"
import useLocalStorage from "./Helpers/useLocalStorage";


import './styles/App.css';
import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faVenus } from '@fortawesome/free-solid-svg-icons'

library.add(faVenus)

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
        <div>
          <NavBar />
          <Routes login={login} signup={signup} />
        </div>
    </div>
  );

}

export default App;
