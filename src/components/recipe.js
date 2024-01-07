import React, { useEffect } from "react"
import RecipeRetriever from "../retrieval/recipe_retrieval"
import RecipeType from "../enums/recipe_type"
import RecipeRenderer from "../render/recipe_renderer"
import "../css/recipe.css"

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
            <button className="recipe-button" onClick={() => generateAndRenderRecipe(RecipeType.RANDOM)}>Suggest Another Random Recipe</button>
            <div className="recipe-content">
                <div className="title-content">
                    <div className="title-variable-content">
                    </div>
                </div>
                <div className="ingredients-content">
                    <h2>Ingredients</h2>
                    <div className="ingredients-variable-content">
                        <ul className="ingredients-list"></ul>
                    </div>
                </div>
                <div className="method-content">
                    <h2>Method</h2>
                    <div className="method-variable-content">
                        <ol className="method-list"></ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
