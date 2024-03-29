import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home";
import SearchPage from "../components/SearchPage"
import LoginForm from "../components_user/LoginForm";
import SignupForm from "../components_user/SignupForm";
import MovieDetail from "../components/MovieDetail";
import LogoutPage from "../components_user/LogoutPage";
import Profile from "../components_user/Profile"


/**
 *  
 * @returns React Router for entire site
 */

const Routes = ({login, signup}) => {

  return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/search">
            <SearchPage />
          </Route>

          <Route exact path="/movies/:imdb_id">
            <MovieDetail />
          </Route>

          <Route exact path="/watchlist">
            <Profile />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/logout">
            <LogoutPage />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;