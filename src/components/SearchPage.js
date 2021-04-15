import React, {useState, useEffect} from "react"
import SearchForm from "./SearchForm"
import backendAPI from "../API/backendAPI"
import OmdbApi from "../API/OmdbApi"
import MovieCard from "./MovieCard"
import "../styles/Search.css"
import { useSelector, useDispatch } from "react-redux";
import {getMovieFromBechdel} from "../actions/movies"

const SearchPage = () => {
    const [term, setTerm] = useState(null);
    // const [poster, setPoster] = useState(null)
    const [doneLoading, setDoneLoading] = useState(false)

    const movies = useSelector(st => st.movies);
    const dispatch = useDispatch();

  
    const search = term => {
    console.log("SETTING TERM")
      setTerm(term)
    };


    // refactor draft w/ redux
    useEffect(function loadMovieWithSearch() {
      if (term) {
      async function getMovie() {
        dispatch(getMovieFromBechdel(term));
      }
      getMovie()
      setDoneLoading(true)
    }
    }, [dispatch, term]);

    // if (movies.hasOwnProperty(term)) {
    //   setDoneLoading(true)

    // }

    return (
      <div>
        <h1>Search for a movie:</h1>
        <SearchForm search={search} />

        <div>
        {doneLoading ? <MovieCard 
        // key={movie.id} 
        // id={movie.id} 
        // yr={movie.yr} 
        // imdb_id={movie.term} 
        title={JSON.stringify(movies)} 
        // rating={movie.rating}
         />
        : <h4>No movie searched</h4>}
        </div>

        <div>
          <hr></hr>
        </div>
      </div>
    );
  };

export default SearchPage;
