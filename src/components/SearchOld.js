import React, {useState, useEffect} from "react"
import SearchForm from "./SearchForm"
import backendAPI from "../API/backendAPI"
import OmdbApi from "../API/OmdbApi"
import ErrorComponent from "../helpers/ErrorComponent"
import MovieCard from "./MovieCard"
import "../styles/Search.css"

const SearchPage = () => {
    const [movie, setMovie] = useState(null);
    const [term, setTerm] = useState(null);
    const [poster, setPoster] = useState(null)
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null);
    const [doneLoading, setDoneLoading] = useState(false)
  
    const search = term => {
    console.log("SETTING TERM")
      setTerm(term)
    };

    function checkForError(resp) {
      let err = resp.data[0].ERROR;
      if(err) {
        setError(err)
        throw new Error(err)
      }
    }
  
    useEffect(() => {
      async function loadMovie() {
        if (term) {
          try {
            const resp = await backendAPI.getMovieByTitle(term);
              checkForError(resp)
              setMovie(resp.data);
              console.log(`**$$$$$$$$$$$$$$$$: ${JSON.stringify(movie)}`)
          } catch(error) {
            setHasError(true)
          }
        }
      }
      loadMovie();
    }, [term])

    useEffect(() => {
        async function getPoster() {
          if (movie) {
            console.log(`***********************MOVIE_ID: ${movie[0].imdb_id}`)
            const resp = await OmdbApi.getTestPoster(movie[0].imdb_id);
            console.log(`***********************RESP in useEffect: ${JSON.stringify(resp)}`)
            setPoster(resp)
            setDoneLoading(true)
            console.log(`***********************Poster: ${poster}`)

          }
        }
    getPoster();
    }, [movie])

  
    return (
      <div>
        <h1>Search for a movie:</h1>
        <SearchForm search={search} />
        {hasError && <ErrorComponent error={error}></ErrorComponent>}

        <div>
        {doneLoading ? <MovieCard 
        key={movie[0].id} 
        id={movie[0].id} 
        yr={movie[0].yr} 
        imdb_id={movie[0].imdb_id} 
        title={movie[0].title} 
        rating={movie[0].rating}
        src={poster}  />
        : <h4>No movie searched</h4>}
        </div>

        <div>
          <hr></hr>
        </div>
      </div>
    );
  };

export default SearchPage;

// key={movie[0].id} id={movie[0].id} yr={movie[0].yr} imdb_id={movie[0].imdb_id} title={movie[0].title} rating={movie[0].rating}


// useEffect(() => {
//   async function loadMovie() {
//     if (term) {
//       try {
//         const resp = await backendAPI.getMovieByTitle(term);
//           checkForError(resp)
//           setMovie(resp.data);
//       } catch(error) {
//         setHasError(true)
//       }
//     }
//   }
//   loadMovie();
// }, [term])