import React from "react";
import { useHistory } from "react-router-dom";
import "../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { Button } from 'reactstrap';

// Home page of site
// Explains Bechdel test


function Homepage() {
  const history = useHistory();


  const toSearchPage = () => {
    history.push("/search");
  }

  return (
      <div className="Homepage">
          <h1 className= "Home-h1">Does your favorite movie pass the Bechdel test?</h1>
            {/* <div className="Homepage-faIcon"><FontAwesomeIcon icon="venus" /></div> */}
          <div className="Home-flex-container">
        <div className="Home-flex-item"><h1>1</h1> <h5>It has at least two women</h5></div>
        <div className="Home-flex-item"><h1>2</h1> <h5>Who talk to eachother</h5></div>
        <div className="Home-flex-item"><h1>3</h1> <h5>About something besies a man</h5></div>
    </div>

          <Button outline color="danger" onClick={toSearchPage}>SEARCH</Button>{' '}
      </div>
      
  );
}

export default Homepage;
