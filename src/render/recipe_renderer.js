import RecipeContentType from "../enums/recipe_content_type"
import UtilsRenderer from "./utils_renderer";

export default class RecipeRenderer {
    static CONTENT_IDENTIFIER = "-variable-content"

    static renderRecipe(recipe) {
        const REQUIRED_RECIPE_FIELDS = ["title", "ingredients", "method"];

        for (let field of REQUIRED_RECIPE_FIELDS) {
            let fieldParagraphDiv = document.createElement("p");
            fieldParagraphDiv.appendChild(RecipeRenderer.renderRecipeContent(field, recipe[field]));
            let fieldDiv = field + RecipeRenderer.CONTENT_IDENTIFIER;
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
            case RecipeContentType.TITLE:
                return RecipeRenderer.renderTitle(content);
            default:
                return RecipeRenderer.renderContent(content);
        }
    }

    static renderIngredients(ingredients) {
        const ingredientsArray = UtilsRenderer.stringToArray(ingredients);
        let ingredientsList = document.getElementsByClassName(RecipeContentType.INGREDIENTS + "-list")[0];
        return UtilsRenderer.renderList(ingredientsArray, ingredientsList);
    }

    static renderMethod(method) {
        const methodArray = UtilsRenderer.stringToArray(method);
        let methodList = document.getElementsByClassName(RecipeContentType.METHOD + "-list")[0];
        return UtilsRenderer.renderList(methodArray, methodList);
    }
    
    static renderTitle(content) {
        content = RecipeRenderer.capitalizeAll(content.replace(" and " , " & "));
        return document.createTextNode(content);
    }

    static capitalizeFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    static capitalizeAll(str) {
        return str.toUpperCase();
    }

    static renderContent(content) {
        return document.createTextNode(content);
    }
}