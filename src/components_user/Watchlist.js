import React from "react"


const Watchlist = ({imdb_id, title, poster, plot, director, bechdel_rating}) => {


    return (
        <div key={imdb_id}>
            <h4>{title} [{imdb_id}]</h4>
            <h5>{bechdel_rating}</h5>
            <p>{plot}</p>
            <p>{director}</p>
            <img src={poster}></img>
        </div>
    )
}

export default Watchlist;