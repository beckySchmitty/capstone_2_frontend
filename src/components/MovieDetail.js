import React from "react"
import { Media } from 'reactstrap';


// displays single movie details

const MovieDetail = ({yr, imdb_id, title, rating, src, director, plot}) => {

    return (
        <div>
            <div style={{display: `inline-block`, verticalAlign: `middle`}}>
                <img style={{width: `300px`, height: `auto`, display: `inline-block`}} 
                src={src}>
                </img>
            </div>
            <div style={{display: `inline-block`, verticalAlign: `middle`, alignContent: `left`}} >
                <h2>{title} ({yr})</h2>
                <h2>Bechdel Rating: {rating}</h2>
                <h4>{director}</h4>
                <p>{plot}</p>
                <p>IMDB_ID: {imdb_id}</p>
            </div>

        </div>
    )
}

export default MovieDetail;
