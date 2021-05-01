import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getMovieFromOMDB, addToOMDBbackend} from "../actions/movies"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import backendAPI from "../API/backendAPI";
import OMDBError from "./OMDBError";
import MovieDetailCard from "./MovieDetailCard"
import {Spinner} from "reactstrap";
import "../styles/MovieDetail.css"

// displays details for a single movie 

const MovieDetail = () => {
    // const history = useHistory();
    const {imdb_id} = useParams();
    const dispatch = useDispatch();
    const movies = useSelector(st => st.movies);
    const OMDBData = useSelector(st => st.OMDB[0]);
    const currentUser = useSelector(st => st.currentUser)

    const [added, setAdded] = useState(false)
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
        // dispatch({type: RESET_ALL})
        dispatch(getMovieFromOMDB(imdb_id, BechdelData.rating));
      }
      getMovieDeets()
    }, [dispatch, imdb_id, BechdelData.rating]);

    // Post OMDB data to backend database
    useEffect(function saveOMDBData() {
        if (OMDBData) {
        async function addMovie() {
            dispatch(addToOMDBbackend(OMDBData));
        }
        addMovie();
        }
        }, [dispatch, OMDBData]);


    // put inside useEffect
    async function addToWatchlist() {
        const response = await backendAPI.addToWatchlist(OMDBData.imdbID, currentUser.id);
        setAdded(true)
        console.log(`ADDED: ${JSON.stringify(response.data)}`)
    }

    if (OMDBData && OMDBData.Response === "False") {
        return <OMDBError title={BechdelData.title} rating={BechdelData.rating}/>
    }
            
    return (
            <div>
                {OMDBData ? 
                <MovieDetailCard 
                src={OMDBData.Poster}
                title={OMDBData.Title}
                year={OMDBData.Year}
                b_rating={BechdelData.rating} 
                director={OMDBData.Director}
                plot={OMDBData.Plot}
                imdb_id={imdb_id}
                addToWatchlist={addToWatchlist}
                added={added}/>
                : <Spinner style={{ width: '3rem', height: '3rem' }} type="grow" />
            }
            </div>
    )
}

export default MovieDetail;


