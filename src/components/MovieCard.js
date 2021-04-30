import React from "react"
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { useHistory } from "react-router-dom";



const MovieCard = ({id, yr, imdb_id, title, rating}) => {
  let history = useHistory();


    const toMovieDetails = (imdb_id) => {
        history.push(`/movies/${imdb_id}`);
      }

    return (
          <Card className="MovieCard-flex-item" key={id} body>
            <CardTitle tag="h4">{title} ({yr})</CardTitle>
            <CardText className="CardText">Bechdel Rating:{rating}</CardText>
            {/* <p>{imdb_id}</p> */}
            <Button className="primary" onClick={()=> toMovieDetails(imdb_id)}>More</Button>{' '}
          </Card>
    )
}

export default MovieCard;