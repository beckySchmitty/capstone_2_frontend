import React from "react"
import { Card, CardTitle, CardText } from 'reactstrap';
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from '@fortawesome/free-solid-svg-icons'


/**
 * @returns individual component with movie title and bechdel rating
 * Clicking plus on the card will lead the user to the MovieDetailPage
 */

const MovieCard = ({id, yr, imdb_id, title, rating}) => {
  let history = useHistory();

    const toMovieDetails = (imdb_id) => {
        history.push(`/movies/${imdb_id}`);
      }

    return (
          <Card className="MovieCard-flex-item" key={id} body>
            <div className="CardTitle-div"><h4>{title} ({yr})</h4></div>
            <CardText className="CardText" tag="h5">Bechdel Rating: {rating}</CardText>
            <button 
              onClick={()=> toMovieDetails(imdb_id)} 
              className="MovieCard-btn">
                <FontAwesomeIcon icon={faPlus} size='5x' className="faPlus" />
            </button>
          </Card>
    )
}

export default MovieCard;