import React from "react"
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";



const MovieCard = ({yr, imdb_id, title, rating}) => {
  let history = useHistory();


    const toMovieDetails = (imdb_id) => {
        history.push(`/movies/${imdb_id}`);
      }

    return (
        <div 
        className="Search-MovieCard">
            <h4>{title} ({yr})</h4>
            <h6>Bechdel Rating: {rating}</h6>
            <p>IMDB_ID: {imdb_id}</p>
            <hr></hr>
            <Button outline color="info" onClick={()=> toMovieDetails(imdb_id)}>More</Button>{' '}
        </div>
    )
}

export default MovieCard;