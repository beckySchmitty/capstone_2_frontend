import React, {useState, useEffect} from "react"
import backendAPI from "../API/backendAPI"
import MovieCard from "./MovieCard"
import "../Styles/Search.css"

const Search = () => {
  const [data, setData] = useState(null)
  const [btnClicked, setBtnClicked] = useState(null)
  console.log(`***********${btnClicked}`)

  function btnClick () {
    setBtnClicked(true)
  }

  useEffect(() => {
      async function getData() {
        const resp = await backendAPI.getAll2020Movies();
        setData(resp.data)
      }
  getData();
  }, [btnClicked])

  return (
      <div>
        <h1>SEARCH MOVIES</h1>
        <button onClick={() => btnClick()}>X</button>
        <div className="Search-parent">
        {btnClicked ? data.map(m => <MovieCard key={m.id} id={m.id} yr={m.yr} imdb_id={m.imdb_id} title={m.title} rating={m.rating}  />)
        : <p>btn not clicked</p>}
        </div>

    </div>
  );
}

export default Search;
