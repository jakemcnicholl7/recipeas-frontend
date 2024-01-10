import React, { useEffect } from "react"
import RecipeRetriever from "../retrieval/recipe_retrieval"
import RecipeType from "../enums/recipe_type"
import RecipeRenderer from "../render/recipe_renderer"
import "../css/recipe.css"

import Button from 'react-bootstrap/Button'; 

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
            <Button variant="primary" onClick={() => generateAndRenderRecipe(RecipeType.RANDOM)} className="recipe-button"> 
                Another Random Recipe
            </Button> 
            <div className="recipe-content">
                <div className="title-content">
                    <h2 class="title-variable-content recipe-title display-5"></h2>
                </div>
                <div className="ingredients-content">
                    <h2 class="section display-6">INGREDIENTS</h2>
                    <div className="ingredients-variable-content">
                        <ul className="ingredients-list"></ul>
                    </div>
                </div>
                <div className="method-content">
                    <h2 className="section display-6">METHOD</h2>
                    <div className="method-variable-content">
                        <ol className="method-list"></ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe;
