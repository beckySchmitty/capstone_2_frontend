import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import "../styles/Home.css";


// Home page of site
// Explains Bechdel test
// Button leads to search page


function Homepage() {
  const history = useHistory();


  const toSearchPage = () => {
    history.push("/search");
  }

  return (
      <div className="Home">
        <div className="Home-container">
            <h1 className= "Home-h1">Does your favorite movie pass the Bechdel test?</h1>
            <div className="Home-flex-container">
              <div className="Home-flex-item"><h1>1</h1> <h4>It has at least two women</h4></div>
              <div className="Home-flex-item"><h1>2</h1> <h4>Who talk to eachother</h4></div>
              <div className="Home-flex-item"><h1>3</h1> <h4>About something besies a man</h4></div>
            </div>
            <div className="Home-search-btn">
            <Button outline color="info" onClick={toSearchPage}>SEARCH</Button>{' '}
            </div>
        </div>
      </div>
      
  );
}

export default Homepage;
