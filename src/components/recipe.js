import React, { useEffect } from "react"
import RecipeRetriever from "../retrieval/recipe_retrieval"
import RecipeType from "../enums/recipe_type"
import RecipeRenderer from "../render/recipe_renderer"

const Recipe = () => {
    useEffect(() => {
        generateAndRenderRecipe(RecipeType.RANDOM);
    }, [])
    
    async function generateAndRenderRecipe(recipeType) {
        const recipe = await RecipeRetriever.getRecipe(recipeType)
        RecipeRenderer.renderRecipe(recipe)
    }

    return (
        <div className="App">
            <body>
                <button className="recipe-button" onClick={() => generateAndRenderRecipe(RecipeType.RANDOM)}>Suggest Another Random Recipe</button>
                <div className="recipe-content">
                    <div className="title-content">
                    </div>
                    <div className="ingredients-content">
                    </div>
                    <div className="method-content">
                    </div>
                </div>
            </body>
        </div>
    )
}

export default Recipe;
