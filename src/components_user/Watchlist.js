import React from "react";
import {Card, CardText, CardBody,CardTitle, CardSubtitle} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import "../styles/Watchlist.css";

/**
 * 
 * @returns Component which renders individual cards for each movie on the user's watchlist
 */

const Watchlist = ({imdb_id, title, poster, plot, director, bechdel_rating, removeMovie}) => {

    return (
        <div className="Watchlist-div" id={imdb_id}>
            <Card style={{width: `300px`, height: `990px`, border: `5px solid black`}}>
               <img top width="100%" src={poster} alt={title} />
                <CardBody>
                <CardTitle tag="h2">{title}</CardTitle>
                <CardTitle tag="h4">Bechdel Rating: {bechdel_rating}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted"><em>{director}</em></CardSubtitle>
                <CardText style={{textAlign: `left`}}>{plot}</CardText>
                <button 
                onClick={removeMovie} 
                className="Watchlist-btn">
                <FontAwesomeIcon icon={faTrash} size='2x' className="faTrash" />
                </button>
            </CardBody>
            </Card>
        </div>
    )
}

export default Watchlist;
