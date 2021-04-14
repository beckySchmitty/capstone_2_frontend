import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import "../Styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import UserContext from "../User/UserContext";

import { Button } from 'reactstrap';


// Home page of site
// Explains Bechdel test


function Homepage() {
  const { currentUser } = useContext(UserContext);
  const history = useHistory();


  const toSearchPage = () => {
    history.push("/search");
  }

  return (
      <div className="Homepage">
          <h1>What is the Bechdel test?</h1>
            <div className="Homepage-faIcon">
            <FontAwesomeIcon icon="venus" /> 
            </div>
          <h3>Movies rated on a 1-3 scale to rate how women are featured.</h3>
          <div className="Homepage-ratingList">
            <div> 1. It has at least two women in it
            </div>
            <div> 2. Who talk to eachother
            </div>
            <div> 3. About something besies a man
            </div>
          </div>
          <Button outline color="danger" onClick={toSearchPage}>SEARCH</Button>{' '}
      </div>
      
  );
}

export default Homepage;
