import React from "react"

const MovieCard = ({yr, id, imdb_id, title, rating}) => {

    return (
        <div 
        className="Search-MovieCard">
            <h4>{title} ({yr})</h4>
            <h6>Bechdel Rating: {rating}</h6>
            <hr></hr>
            <p>IMDB_ID: {imdb_id}</p>
            <button>Learn more</button>
        </div>
    )
}

export default MovieCard;