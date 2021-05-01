import React from "react"
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {Button} from "reactstrap";

// 

const MovieDetailCard = ({src, title, year, b_rating, director, plot, imdb_id, addToWatchlist, added}) => {
  let history = useHistory();
  const currentUser = useSelector(st => st.currentUser)

    const toSearch = () => {
        history.push(`/search`);
      }

    return (
        
            <div className="DetailCard-container">
                <div className="DetailCard">
                    <img alt={title}  
                    src={src}>
                    </img>
                    <div className="DetailCard-text" >
                        <div className="DetailCard-div"><h2>{title} ({year})</h2></div>
                        <h2 className="DetailCard-h">Bechdel Rating: {b_rating}</h2>
                        <h4 className="DetailCard-h">{director}</h4>
                        <p>{plot}</p>
                        <p>IMDB_ID: {imdb_id}</p>
                        {currentUser.id &&
                        <div><Button 
                        outline
                        color="danger"
                        onClick={addToWatchlist} 
                        disabled={added}>
                            {added? "Added": "Add to Watchlist"}
                        </Button></div>}
                        <Button 
                        outline
                        color="secondary"
                        onClick={toSearch}>Search</Button>
                        </div>

                </div>
            </div>
    )
}

export default MovieDetailCard;

