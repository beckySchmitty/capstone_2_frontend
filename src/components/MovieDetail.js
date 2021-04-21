import React,  {useState, useEffect} from "react"
import {useDispatch} from "react-redux";
import {getMovieFromOMDB} from "../actions/movies"
import { Spinner } from 'reactstrap';



// displays single movie details

const MovieDetail = ({yr, imdb_id, title, rating, src, director, plot}) => {
    const dispatch = useDispatch();
    const [doneLoading, setDoneLoading] = useState(false)

    // Get OMDB data from backend API
    useEffect(function loadDetailsFromID() {
      async function getMovieDeets() {
        dispatch(getMovieFromOMDB(imdb_id));
      }
      getMovieDeets()
      setDoneLoading(true)
    }, [dispatch, imdb_id]);



    return (
            <div>
                {doneLoading ? <div><div style={{display: `inline-block`, verticalAlign: `middle`}}>
                                <img style={{width: `300px`, height: `auto`, display: `inline-block`}} 
                                src={src}>
                                </img>
                            </div>
                            <div style={{display: `inline-block`, verticalAlign: `middle`, alignContent: `left`}} >
                                <h2>{title} ({yr})</h2>
                                <h2>Bechdel Rating: {rating}</h2>
                                <h4>{director}</h4>
                                <p>{plot}</p>
                                <p>IMDB_ID: {imdb_id}</p>
                            </div>
                            </div>
                            : <div></div>}

            </div>
    )
}

export default MovieDetail;
