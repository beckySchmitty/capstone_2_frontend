import React, {useState, useEffect} from "react"
import SearchForm from "./SearchForm"
import MovieCard from "./MovieCard"
import "../styles/Search.css"
import { useSelector, useDispatch } from "react-redux";
import {getMoviesFromBechdel } from "../actions/movies"
import { RESET_ALL } from "../actions/types";
import NoMovieFound from "./NoMovieFound"

const SearchPage = () => {
    const [term, setTerm] = useState(null);
    const movies = useSelector(st => st.movies);
    const dispatch = useDispatch();
    const [doneLoading, setDoneLoading] = useState(false)


  
    const search = term => {
    console.log("SETTING TERM")
      setTerm(term)
    };


    // Get bechdel movie data from Bechdel API
    useEffect(function loadMoviesWithSearch() {
      if (term) {
      async function getMovies() {
        dispatch({type: RESET_ALL})
        dispatch(getMoviesFromBechdel(term));
      }
      getMovies()
      setDoneLoading(true)
    }
    }, [dispatch, term]);



    const movieList = movies.map(m => (
      <MovieCard 
        key={m.imdb_id}
        imdb_id={m.imdb_id} 
        yr={m.yr}
        title={m.title}
        rating={m.rating}
      />)
    );

    if (movies[0] && movies[0].ERROR) {
      return <NoMovieFound search={search} term={movies[0].ERROR}/>
    }



    return (
      <div className="Search-container">
        <h1>Search by title:</h1>
        <SearchForm search={search} />

        <div className="Search-flex-container">
        {doneLoading ? movieList
        : <h4>No movie searched</h4>}
        </div>

        <div>
        </div>
      </div>
    );
  };

export default SearchPage;