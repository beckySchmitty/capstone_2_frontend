import React from "react"

const MovieCard = ({yr, id, imdb_id, title, rating}) => {

    return (
        <div 
        className="Search-MovieCard">
            <h4>{title}</h4>
            <p>{yr} {rating} {id} {imdb_id}</p>
        </div>
    )
}

export default MovieCard;