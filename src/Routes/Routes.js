import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../Home/Home";


import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import ProfileForm from "../auth/ProfileForm";




// Site Wide Frontend Routes

const Routes = ({login, signup}) => {

  return (
      <div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <LoginRequiredRoute exact path="/companies">
            <CompanyList />
          </LoginRequiredRoute>

          <LoginRequiredRoute exact path="/jobs">
            <JobList />
          </LoginRequiredRoute>

          <LoginRequiredRoute exact path="/companies/:handle">
            <CompanyDetail />
          </LoginRequiredRoute>

          <LoginRequiredRoute path="/profile">
            <ProfileForm />
          </LoginRequiredRoute>

          <Redirect to="/" />
        </Switch>
      </div>
  );
}

export default Routes;