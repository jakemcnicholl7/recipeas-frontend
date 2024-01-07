import RecipeType from "../enums/recipe_type"

export default class RecipeRetriever {
    static RECIPE_ENDPOINT = "http://localhost:5000"

    static async getRecipe(recipeType) {
        switch (recipeType) {
            case RecipeType.RANDOM:
                return await RecipeRetriever.getRandomRecipe();
            case RecipeType.TAILORED:
                return await RecipeRetriever.getRandomRecipe();
            default:
                return await RecipeRetriever.getRandomRecipe();
        }
    }

    static async getRandomRecipe() {
        try {
            const response = await fetch(RecipeRetriever.RECIPE_ENDPOINT);
            const data = await response.json();
            return data[0];
        } catch (error) {
            console.log(error)
        }
    }
}

