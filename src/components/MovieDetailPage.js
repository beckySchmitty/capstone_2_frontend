import React from "react"
import { useHistory, useParams } from "react-router-dom";
import { Button } from 'reactstrap';
import { useSelector } from "react-redux";
import MovieDetail from "./MovieDetail"


const MovieDetails = () => {
    const history = useHistory();
    const {imdb_id} = useParams();
    const OMDBData = useSelector(st => st.OMDB);
    const movies = useSelector(st => st.movies);
    const BechdelData = {}
    const movieData = {}

    // find bechdel data in redux store by imdb_id
    for (let i=0; i< movies.length; i++) {
        if (movies[i].imdb_id === imdb_id) {
            for (let [k,v] of Object.entries(movies[i])) {
                BechdelData[k] = v;
            }
        }
    }

    // find OMDB data redux store by imdb_id
    for (let i=0; i< OMDBData.length; i++) {
      if (OMDBData[i].imdbID === `tt${imdb_id}` || `tt0${imdb_id}`) {
          for (let [k,v] of Object.entries(OMDBData[i])) {
            movieData[k] = v;
          }
      }
  }

    const toSearchPage = () => {
        history.push(`/search`);
    }

    return (
        <div>
          <MovieDetail 
          key={movieData.id}
          imdb_id={movieData.imdbID} 
          yr={movieData.Year}
          title={movieData.Title}
          src={movieData.Poster}
          rating={BechdelData.rating}
          director={movieData.Director}
          plot={movieData.Plot}
        />
            <Button outline color="info" onClick={toSearchPage}>Search More</Button>{' '}
        </div>
    )
}

export default MovieDetails;
