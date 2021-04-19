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
    const oneMovie = {}

    // find bechdel data by imdb_id
    for (let i=0; i< movies.length; i++) {
        if (movies[i].imdb_id === imdb_id) {
            for (let [k,v] of Object.entries(movies[i])) {
                BechdelData[k] = v;
            }
        }
    }

    // find OMDB data by imdb_id
    for (let i=0; i< OMDBData.length; i++) {
      if (OMDBData[i].imdbID === `tt${imdb_id}`) {
          for (let [k,v] of Object.entries(OMDBData[i])) {
            oneMovie[k] = v;
          }
      }
  }

    const toSearchPage = () => {
        history.push(`/search`);
    }


    return (
        <div>
          <MovieDetail 
          key={oneMovie.id}
          imdb_id={oneMovie.id} 
          title={oneMovie.Title}
          src={oneMovie.Poster}
          // rating={BechdelData[o].rating}
          // director={OMDBData["Dog Days"].Director}
          // imdbRating={OMDBData["Dog Days"].imdbRating}
          // plot={OMDBData["Dog Days"].plot}
        />
            <Button outline color="info" onClick={toSearchPage}>Search More</Button>{' '}
        </div>
    )
}

export default MovieDetails;
