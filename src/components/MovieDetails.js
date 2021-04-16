import React from "react"
import { useHistory, useParams } from "react-router-dom";
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";


const MovieDetails = () => {
    const history = useHistory();
    const { imdb_id } = useParams();
    // const movie = useSelector(st => st.movies);


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
