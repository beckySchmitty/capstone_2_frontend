import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import "../styles/Home.css";

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


// Home page of site
// Explains Bechdel test
// Button leads to search page


function Homepage() {
  const history = useHistory();


  const toSearchPage = () => {
    history.push("/search");
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '50%',
      margin: `0 auto`
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
  
  const classes = useStyles();

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
            <Button color="danger" onClick={toSearchPage}>SEARCH</Button>{' '}
            </div>
        </div>

            <div className="Home-accordion">
                <div className={classes.root}>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography className={classes.heading}>Bechdel Test Resources</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                  >
                    <Typography className={classes.heading}>Details about the movie data</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                      sit amet blandit leo lobortis eget.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
      </div>
      
  );
}

export default Homepage;
