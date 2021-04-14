import React from "react"
import { useHistory, useParams } from "react-router-dom";
import { Button } from 'reactstrap';


const MovieDetails = () => {
    const history = useHistory();
    const { imdb_id } = useParams();

    const toSearchPage = () => {
        history.push(`/search`);
      }

    return (
        <div>
            <p>IMDB_ID: {imdb_id}</p>
            <Button outline color="info" onClick={toSearchPage}>Search More</Button>{' '}
        </div>
    )
}

export default MovieDetails;
