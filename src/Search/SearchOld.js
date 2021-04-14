import React, {useState, useEffect} from "react"
import backendAPI from "../API/backendAPI"
import OmdbApi from "../API/OmdbApi"
import MovieCard from "./MovieCard"
import "../Styles/Search.css"

const SearchOld = () => {
  const [data, setData] = useState(null)
  const [posterTest, setPosterTest] = useState(null)
  const [btnClicked, setBtnClicked] = useState(null)

  function btnClick () {
    setBtnClicked(true)
  }


  useEffect(() => {
      async function getData() {
        const resp = await backendAPI.getAll2020Movies();
        setData(resp.data)
        // console.log(resp.data[2].imdb_id)
      }
  getData();
  }, [btnClicked])

  useEffect(() => {
    async function getPoster() {
      if (data) {
      console.log(data[2])
      const resp = await OmdbApi.getTestPoster(data[2].imdb_id);
      setPosterTest(resp)
      }
    }
getPoster();
}, [btnClicked])

  return (
      <div>
        <h1>SEARCH MOVIES</h1>
        <button onClick={() => btnClick()}>X</button>
        {btnClicked ? 
        <h3>TESTING {posterTest}</h3>
        : <h3>No poster</h3> 
        }

        <div className="Search-parent">
        {btnClicked ? data.map(m => <MovieCard key={m.id} id={m.id} yr={m.yr} imdb_id={m.imdb_id} title={m.title} rating={m.rating}  />)
        : <p>btn not clicked</p>}
        </div>

    </div>
  );
}

export default SearchOld;
