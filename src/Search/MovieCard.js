import React from "react"
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';


const MovieCard = ({yr, id, imdb_id, title, rating, src}) => {
    const history = useHistory();


    const toMovieDetails = (imdb_id) => {
        history.push(`/movies/${imdb_id}`);
      }

    return (
        <div 
        className="Search-MovieCard">
            <h4>{title} ({yr})</h4>
            <h6>Bechdel Rating: {rating}</h6>
            <hr></hr>
            <img style={{width: `300px`, height: `auto`}} 
            src={src}>
            </img>
            <p>IMDB_ID: {imdb_id}</p>
            <Button outline color="info" onClick={()=> toMovieDetails()}>More</Button>{' '}
        </div>
    )
}

export default MovieCard;

// src={`https://m.media-amazon.com/images/M/MV5BN2YyZjQ0NTEtNzU5MS00NGZkLTg0MTEtYzJmMWY3MWRhZjM2XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_SX300.jpg`}>
