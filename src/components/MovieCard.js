import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from 'reactstrap';
import {getMovieFromOMDB } from "../actions/movies"


const MovieCard = ({yr, imdb_id, title, rating, src}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    // Get IMDB data from backend API
    useEffect(function loadDetailsFromID() {
      async function getMovieDeets() {
        dispatch(getMovieFromOMDB(imdb_id));
      }
      getMovieDeets()
    }, [dispatch, imdb_id]);


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
            <Button outline color="info" onClick={()=> toMovieDetails(imdb_id)}>More</Button>{' '}
        </div>
    )
}

export default MovieCard;