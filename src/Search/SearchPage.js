import React, {useState, useEffect} from "react"
import SearchForm from "./SearchForm"
import backendAPI from "../API/backendAPI"
import OmdbApi from "../API/OmdbApi"
import ErrorComponent from "../Helpers/ErrorComponent"
import MovieCard from "./MovieCard"
import "../Styles/Search.css"

const SearchPage = () => {
    const [movie, setMovie] = useState(null);
    const [term, setTerm] = useState(null);
    const [poster, setPoster] = useState(null)
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState(null)
  
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
          } catch(error) {
            setHasError(true)
          }
        }
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
        {hasError && <ErrorComponent error={error}></ErrorComponent>}
        <div>
        {movie ? <MovieCard key={movie[0].id} id={movie[0].id} yr={movie[0].yr} imdb_id={movie[0].imdb_id} title={movie[0].title} rating={movie[0].rating}  />
        : <h4>No movie searched</h4>}
        </div>
      </div>
    );
  };

export default SearchPage;

// key={movie[0].id} id={movie[0].id} yr={movie[0].yr} imdb_id={movie[0].imdb_id} title={movie[0].title} rating={movie[0].rating}



// useEffect(() => {
//   console.log("RUNNING EFFECT")
//     async function loadMovie() {
//       if (term) {
//           const resp = await backendAPI.getMovieByTitle(term);
//           console.log(`RESPONSE DATA ${JSON.stringify(resp.data)}`)
//             setMovie(resp.data);
//       }
//     }
//     loadMovie();
//   }, [term])


// useEffect(() => {
//   console.log("RUNNING EFFECT")
//     async function loadMovie() {
//       if (term) {
//         try {
//           const resp = await backendAPI.getMovieByTitle(term);
//           console.log(`RESPONSE DATA ${JSON.stringify(resp.data)}`)
//           if(resp.data[0].ERROR) {
//             setError(resp.data[0].ERROR)
//             throw new Error(resp.data[0].ERROR)
//           }
//             setMovie(resp.data);
//         } catch(e) {
//           setHasError(true)
//         }

//       }
//     }
//     loadMovie();
//   }, [term])