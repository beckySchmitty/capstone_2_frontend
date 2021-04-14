import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Home/Home";
import SearchPage from "../Search/SearchPage"
import LoginForm from "../User/LoginForm";
import SignupForm from "../User/SignupForm";




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

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          {/* <Route exact path="/profile">
            <Profile />
          </Route> */}

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;