import React, {useState, useEffect} from "react"
import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY;

const BrainStormComp = () => {
    const [stateTest, setStateTest] = useState("start")


    useEffect(function callApiAndUpdate() {
        async function getData() {
          const resp = await axios.get(`https://api.spoonacular.com/recipes/complexSearch/?apiKey=${API_KEY}`)
          setStateTest(resp.data.results)
        }
        getData();
      }, []);

    return (
        <div>
            <h1>HELLO {JSON.stringify(stateTest)} WORLD</h1>
        </div>
    )
}

export default BrainStormComp;