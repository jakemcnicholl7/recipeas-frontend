import RecipeContentType from "../enums/recipe_content_type"

export default class RecipeRenderer {
    static renderRecipe(recipe) {
        console.log(recipe)

        const REQUIRED_RECIPE_FIELDS = ["title", "ingredients", "method"];

        for (let field of REQUIRED_RECIPE_FIELDS) {
            let fieldParagraphDiv = document.createElement("p");
            fieldParagraphDiv.appendChild(RecipeRenderer.renderRecipeContent(field, recipe[field]));
            let fieldDiv = field + "-content"
            let recipeFieldDiv = document.getElementsByClassName(fieldDiv)[0];
            recipeFieldDiv.replaceChildren(fieldParagraphDiv)
        }
    }

    static renderRecipeContent(recipeContentType, content) {
        switch(recipeContentType) {
            case RecipeContentType.INGREDIENTS:
                return RecipeRenderer.renderIngredients(content);
            case RecipeContentType.METHOD:
                return RecipeRenderer.renderMethod(content);
            default:
                return RecipeRenderer.renderContent(content);
        }
    }

    static renderIngredients(ingredients) {
        return document.createTextNode(ingredients);
    }

    static renderMethod(method) {
        return document.createTextNode(method);
    }

    static renderContent(content) {
        return document.createTextNode(content);
    }
}