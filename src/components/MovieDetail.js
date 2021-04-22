import React,  {useState, useEffect} from "react"
import {useDispatch} from "react-redux";
import {getMovieFromOMDB} from "../actions/movies"
// import { Spinner } from 'reactstrap';
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";


// displays single movie details
// MovieDetailPage => 

const MovieDetail = () => {
    const history = useHistory();
    const {imdb_id} = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(st => st.movies);
    const OMDBData = useSelector(st => st.OMDB);

    const BechdelData = {}

    // find bechdel data in redux store by imdb_id
    for (let i=0; i< movies.length; i++) {
        if (movies[i].imdb_id === imdb_id) {
            for (let [k,v] of Object.entries(movies[i])) {
                BechdelData[k] = v;
            }
        }
    }

    // Get OMDB data from backend API
    useEffect(function loadDetailsFromID() {
      async function getMovieDeets() {
        dispatch(getMovieFromOMDB(imdb_id));
      }
      getMovieDeets()
    }, [dispatch, imdb_id]);


    return (
            <div>
                {OMDBData[0] ? <div><div style={{display: `inline-block`, verticalAlign: `middle`}}>
                                <img style={{width: `300px`, height: `auto`, display: `inline-block`}} 
                                src={OMDBData[0].Poster}>
                                </img>
                            </div>
                            <div style={{display: `inline-block`, verticalAlign: `middle`, alignContent: `left`}} >
                                <h2>{OMDBData[0].Title} ({OMDBData[0].Year})</h2>
                                <h2>Bechdel Rating: {BechdelData.rating}</h2>
                                <h4>{OMDBData[0].Director}</h4>
                                <p>{OMDBData[0].Plot}</p>
                                <p>IMDB_ID: {imdb_id}</p>
                            </div>
                            </div>
                            : <div>not done loading</div>}

            </div>
    )
}

export default MovieDetail;


// old note from deleted page
    // find OMDB data redux store by imdb_id
    // for (let i=0; i< OMDBData.length; i++) {
    //     if (OMDBData[i].imdbID === `tt${imdb_id}` || `tt0${imdb_id}`) {
    //         for (let [k,v] of Object.entries(OMDBData[i])) {
    //           movieData[k] = v;
    //         }
    //     }
    // }
