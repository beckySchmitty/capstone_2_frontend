import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt from "jsonwebtoken";
import NavBar from "./routes/MyNavBar"
import Routes from "./routes/routes";
import backendAPI from "./API/backendAPI"
import './styles/App.css';
import { useDispatch } from "react-redux";
import {addCurrentUser} from "./actions/users"

import { library } from '@fortawesome/fontawesome-svg-core'
import { faVenus } from '@fortawesome/free-solid-svg-icons'
library.add(faVenus)


/**
 * The main component rendered in index.js
 * Renders the 
 *    NavBar
 *    Routes
 * 
 */


function App() {
  const dispatch = useDispatch();
  // const [token, setToken] = useState(null)

    function addUserToReduxStore(token) {
      let { username } = jwt.decode(token);
      dispatch(addCurrentUser(username))
    }

    // Handles site-wide signup
    // logs in user and sets currentUser in persisted Redux Store
    async function signup(signupData) {
      try {
        let token = await backendAPI.signup(signupData);
        addUserToReduxStore(token)
        return { success: true };
      } catch (errors) {
        console.error("signup failed", errors);
        return { success: false, errors };
      }
    }


    // Handles site-wide login
    // logs in user and sets currentUser in persisted Redux Store
    async function login(loginData) {
      try {
        let token = await backendAPI.login(loginData);
        addUserToReduxStore(token)
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
