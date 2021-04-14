import React, {useState, useEffect} from "react"
import SearchForm from "./SearchForm"
import backendAPI from "../API/backendAPI"
import OmdbApi from "../API/OmdbApi"
import MovieCard from "./MovieCard"
import "../Styles/Search.css"

const SearchPage = () => {
    const [movie, setMovie] = useState(null);
    const [term, setTerm] = useState(null);
    const [poster, setPoster] = useState(null)
  
    const search = term => {
    console.log("SETTING TERM")
      setTerm(term)
    };
  
    useEffect(() => {
    console.log("RUNNING EFFECT")
      async function loadMovie() {
            const resp = await backendAPI.getMovieByTitle(term);
            console.log(`RESPONSE DATA ${JSON.stringify(resp.data)}`)
            setMovie(resp.data);
      }
      loadMovie();
    }, [term])

    // useEffect(() => {
    //     async function getPoster() {
    //     console.log(`***********************MOVIEID${movie.imdb_id}`)
    //       const resp = await OmdbApi.getTestPoster(movie.imdb_id);
    //       setPoster(resp)
    //     }
    // getPoster();
    // }, [term])

  
    return (
      <div>
        <h1>Search for a movie:</h1>
        <SearchForm search={search} />
        <div>
        {movie ? <MovieCard title={movie[0].title}  />
        : <h1>Loading....</h1>}
        </div>
      </div>
    );
  };

export default SearchPage;

// key={movie[0].id} id={movie[0].id} yr={movie[0].yr} imdb_id={movie[0].imdb_id} title={movie[0].title} rating={movie[0].rating}



