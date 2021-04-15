import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home";
import SearchPage from "../components/SearchPage"
import LoginForm from "../user/LoginForm";
import SignupForm from "../user/SignupForm";
import MovieDetails from "../components/MovieDetails"


// Site Wide Frontend Routes

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
            <MovieDetails />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
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