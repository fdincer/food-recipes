import { searchRecipeByIngredient } from "../../Api/Queries/searchRecipeByIngredient";
import type { RecipeItem } from "../../Api/Types/RecipeItem";

export interface SearchIngredientLoader {
    recipeList: RecipeItem[];
    searchType: string;
}

export async function searchIngredientLoader({request}: {request: Request}): Promise<SearchIngredientLoader> {

    const { searchParams } = new URL(request.url);
    const ingredient = searchParams.get("ingredient");

    if (!ingredient) {
        throw new Response("Ingredient are needed.", { status: 400 });
    }

    const recipes = await searchRecipeByIngredient(ingredient);

    if (!recipes || recipes.length === 0) {
        throw new Response("No recipes are found", { status: 404 });
    }

    return {
        recipeList: recipes,
        searchType: "Ingredient"
    };
}