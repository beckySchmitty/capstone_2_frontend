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
          <h3>Movies rated on a 1-3 scale to rate how women are featured.</h3>
          <div>
            <div className="Homepage-faIcon">
            <FontAwesomeIcon icon="venus" />   It has at least two women in it
            </div>
            <div className="Homepage-faIcon">
            <FontAwesomeIcon icon="venus" />   Who talk to eachother
            </div>
            <div className="Homepage-faIcon">
            <FontAwesomeIcon icon="venus" />   About something besies a man
            </div>
          </div>
          <p>Learn more: http://bechdeltest.com/</p>
          <Button outline color="primary" onClick={toSearchPage}>SEARCH</Button>{' '}
      </div>
  );
}

export default Homepage;
