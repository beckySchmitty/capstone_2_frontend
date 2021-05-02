import React from "react";
import { Alert } from 'reactstrap';
import "../styles/Search.css"

// Error comp for OMDB external API error

const OMDBError = ({title, rating}) => {

    return (
        <Alert className="OMDBError" color="danger">
          <h4 className="alert-heading">External API Error :(</h4>
          <h6> No additional information for <em>{title}</em></h6>
          <hr/>
          <p className="mb-0">
            Bechdel Rating: {rating}
          </p>
        </Alert>
    )
}

export default OMDBError;