import React from "react"

const MovieDetail = ({yr, imdb_id, title, rating, src, director, plot, imdbRating}) => {

    return (
        <div>
            <h2>{title} ({yr})</h2>
            <h4>{director}</h4>
            <h4>IMDB Rating: {imdbRating}</h4>
            <h4>Bechdel Rating: {rating}</h4>
            <img style={{width: `300px`, height: `auto`}} 
            src={src}>
            </img>
            <p>{plot}</p>
            <p>IMDB_ID: {imdb_id}</p>
        </div>
    )
}

export default MovieDetail;