import React from "react";
import "../styles/Watchlist.css";


const Watchlist = ({imdb_id, title, poster, plot, director, bechdel_rating, removeMovie}) => {

    return (
        <div className="Watchlist-div" key={imdb_id}>
            <h4>{title} [{imdb_id}]</h4>
            <h5>{bechdel_rating}</h5>
            <p>{plot}</p>
            <p>{director}</p>
            <button onClick={removeMovie}>X</button>
            <img src={poster}></img>
        </div>
    )
}

export default Watchlist;