import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import "./Home.css";
import UserContext from "../User/UserContext";

import { Button } from 'reactstrap';


// Home page of site
// Explains Bechdel test


function Homepage() {
  const { currentUser } = useContext(UserContext);

  return (
      <div className="Homepage">
          <h1>BECHDEL TEST INFO</h1>
          <p> lorem </p>
          <p>loooooooooooooorem {currentUser}</p>
          <Button outline color="primary">SEARCH</Button>{' '}
      </div>
  );
}

export default Homepage;
