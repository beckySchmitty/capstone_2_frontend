import React, {useState, useEffect} from "react"
import SearchForm from "./SearchForm"
import MovieCard from "./MovieCard"
import "../styles/Search.css"
import { useSelector, useDispatch } from "react-redux";
import {getMovieFromBechdel } from "../actions/movies"

const SearchPage = () => {
    const [term, setTerm] = useState(null);
    const movies = useSelector(st => st.movies);
    const dispatch = useDispatch();
    const [doneLoading, setDoneLoading] = useState(false)


  
    const search = term => {
    console.log("SETTING TERM")
      setTerm(term)
    };


    // Get movie data from Bechdel API
    useEffect(function loadMovieWithSearch() {
      if (term) {
      async function getMovie() {
        dispatch(getMovieFromBechdel(term));
      }
      getMovie()
      setDoneLoading(true)
    }
    }, [dispatch, term]);


    const movieList = movies.map(m => (
      <div className="Search-parent">
      <MovieCard 
        key={m.imdb_id}
        imdb_id={m.imdb_id} 
        yr={m.yr}
        title={m.title}
      />
      </div>)
    );

    return (
      <div>
        <h1>Search for a movie:</h1>
        <SearchForm search={search} />

        <div>
        {doneLoading ? movieList
        : <h4>No movie searched</h4>}
        </div>

        <div>
          <hr></hr>
        </div>
      </div>
    );
  };

export default SearchPage;

