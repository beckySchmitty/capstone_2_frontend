import React, {useState, useEffect} from "react"
import { useHistory, useParams } from "react-router-dom";
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from "react-redux";
import {getMovieFromOMDB} from "../actions/movies"
import MovieDetail from "./MovieDetail"


const MovieDetails = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { imdb_id } = useParams();
    // const movies = useSelector(st => st.movies);
    const OMDBData = useSelector(st => st.OMDB);
    const [doneLoading, setDoneLoading] = useState(false)

    // find movie data by imdb_id
    // for (let i=0; i< movies.length; i++) {
    //     if (movies[i].imdb_id === imdb_id) {
    //         for (let [k,v] of Object.entries(movies[i])) {
    //             BechdelData[k] = v;
    //         }
    //     }
    // }

    useEffect(function loadDetailsFromID() {
      async function getMovieDeets() {
        dispatch(getMovieFromOMDB(imdb_id));
      }
      getMovieDeets()
      setDoneLoading(true)

    }, [dispatch]);



    const toSearchPage = () => {
        history.push(`/search`);
    }

    return (
        <div>
            {doneLoading ? 
            <div className="MovieDetail">
            <MovieDetail 
              key={imdb_id}
              imdb_id={imdb_id} 
              title={OMDBData[0].Title}
              src={OMDBData[0].Poster}
              director={OMDBData[0].Director}
              imdbRating={OMDBData[0].imdbRating}
              plot={OMDBData[0].plot}
            />
            </div>
            : <p>not done loading</p>
            }
            <Button outline color="info" onClick={toSearchPage}>Search More</Button>{' '}
        </div>
    )
}

export default MovieDetails;
