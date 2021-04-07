import React, {useState, useEffect} from "react"
import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY;

const url_1 = `https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/`
const url_2 = `https://cooking.nytimes.com/recipes/9530-lasagna/`
const url_3 = `https://cookieandkate.com/masala-lentil-salad-with-cumin-roasted-carrots/`
const url_4 = `https://www.delish.com/cooking/a26726977/lemon-blueberry-pound-cake-recipe/`

const RecipeTest = () => {
    const [recipe, setRecipe] = useState("...")


    useEffect(function callApiAndUpdate() {
        async function getData() {
          const resp = await axios.get(`https://api.spoonacular.com/recipes/extract?url=${url_4}&apiKey=${API_KEY}`)
          setRecipe(resp.data)
        }
        getData();
      }, []);

    return (
        <div>
            <h3>{recipe.title}</h3>
            {/* <h1>DATA: {JSON.stringify(recipe)}</h1> */}
            <h3>{JSON.stringify(recipe.extendedIngredients)}</h3>
            <hr></hr>
            <h3>{recipe.instructions}</h3>
            <h3>{JSON.stringify(recipe.analyzedInstructions)}</h3>
            <hr></hr>
            <h3>{recipe.preparationMinutes}</h3>
            <h3>{recipe.cookingMinutes}</h3>
            <h3>{recipe.readyInMinutes}</h3>

        </div>
    )
}

export default RecipeTest;



// const BASE_ENDPT = `https://api.spoonacular.com/recipes/extract?url=${url}&apiKey=${API_KEY}`
