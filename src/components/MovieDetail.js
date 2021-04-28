import React, {useState, useEffect} from "react";
import {useDispatch} from "react-redux";
import {getMovieFromOMDB, addToOMDBbackend} from "../actions/movies"
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import backendAPI from "../API/backendAPI"

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
    }, [dispatch, imdb_id]);

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
        const response = await backendAPI.addToWatchlist(imdb_id, currentUser.id);
        setAdded(true)
        console.log(`ADDED: ${JSON.stringify(response.data)}`)
    }
            
    return (
            <div>
                {OMDBData ? <div>
                    <div style={{display: `inline-block`, verticalAlign: `middle`}}>
                    <img alt="#" 
                    style={{width: `300px`, height: `auto`, display: `inline-block`}} 
                    src={OMDBData.Poster}>
                    </img>
                    </div>
                    <div style={{display: `inline-block`, verticalAlign: `middle`, alignContent: `left`}} >
                        <h2>{OMDBData.Title} ({OMDBData.Year})</h2>
                        <h2>Bechdel Rating: {BechdelData.rating}</h2>
                        <h4>{OMDBData.Director}</h4>
                        <p>{OMDBData.Plot}</p>
                        <p>IMDB_ID: {imdb_id}</p>
                    </div>
                        {currentUser.id &&
                        <div><button 
                        onClick={addToWatchlist} 
                        disabled={added}>
                            {added? "Added": "Add to Watchlist"}
                        </button></div>}
                        </div>
                            : <div>not done loading</div>}
            </div>
    )
}

export default MovieDetail;


