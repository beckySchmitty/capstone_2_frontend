import React from "react"
import SearchForm from "./SearchForm"

// Displays search term in an styled error component 
// if the movie was not found in the bechdel data set

const NoMovieFound = ({search, term}) => {

    return (
        <div>
        <h1>Search by title:</h1>
        <SearchForm search={search} />

        <div className="Search-flex-container">
        <h4>Movie '{term}' not found</h4>
        </div>

        <div>
          <hr></hr>
        </div>
      </div>
    )
}

export default NoMovieFound;