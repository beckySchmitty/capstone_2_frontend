import React from "react"
import { Button } from 'reactstrap';
import { useHistory } from "react-router-dom";



const MovieCard = ({id, yr, imdb_id, title, rating}) => {
  let history = useHistory();


    const toMovieDetails = (imdb_id) => {
        history.push(`/movies/${imdb_id}`);
      }

    return (
        <div className="MovieCard-flex-item" key={id}>
            <h4>{title} ({yr})</h4>
            <h5>Bechdel Rating:{rating}</h5>
            {/* <p>{imdb_id}</p> */}
            <Button outline color="info" onClick={()=> toMovieDetails(imdb_id)}>More</Button>{' '}
        </div>
    )
}

export default MovieCard;