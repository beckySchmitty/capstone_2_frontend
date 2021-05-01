import React from "react";
import "../styles/Watchlist.css";


const Watchlist = ({imdb_id, title, poster, plot, director, bechdel_rating, removeMovie}) => {

    return (
        <div className="Watchlist-div">
            <h4>{title} [{imdb_id}]</h4>
            <h5>{bechdel_rating}</h5>
            <p>{plot}</p>
            <p>{director}</p>
            <button onClick={removeMovie}>X</button>
            <img src={poster} alt={`Poster for ${title} movie`}></img>
        </div>
    )
}

export default Watchlist;