import React, {useState, useEffect} from "react"
import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY;

const url_1 = `https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/`

const RecipeTest = () => {
    const [recipe, setRecipe] = useState("...")


    useEffect(function callApiAndUpdate() {
        async function getData() {
          const resp = await axios.get(`https://api.spoonacular.com/recipes/extract?url=${url_1}&apiKey=${API_KEY}`)
          setRecipe(resp.data)
        }
        getData();
      }, []);

    return (
        <div>
            <h3>{recipe.title}</h3>
            <h1>DATA: {JSON.stringify(recipe)}</h1>
            {/* <h3>{JSON.stringify(recipe.extendedIngredients)}</h3>
            <hr></hr>
            <h3>{recipe.instructions}</h3>
            <h3>{JSON.stringify(recipe.analyzedInstructions)}</h3>
            <hr></hr>
            <h3>{recipe.preparationMinutes}</h3>
            <h3>{recipe.cookingMinutes}</h3> */}

        </div>
    )
}

export default RecipeTest;



// const BASE_ENDPT = `https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${API_KEY}`
