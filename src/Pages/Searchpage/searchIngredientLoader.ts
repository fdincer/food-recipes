import { searchRecipeByIngredient } from "../../Api/Queries/searchRecipeByIngredient";
import type { RecipeItem } from "../../Api/Types/RecipeItem";

export interface SearchIngredientLoader {
    recipeList: RecipeItem[];
    searchType: string;
}

export async function searchIngredientLoader({request}: {request: Request}): Promise<SearchIngredientLoader> {

    const { searchParams } = new URL(request.url);
    const ingredient = searchParams.get("ingredient");
    if(!ingredient){
        throw new Error("Ingredient needs to be provided");
    }
    
    const recipes = await searchRecipeByIngredient(ingredient);

    return {
        recipeList: recipes,
        searchType: "Ingredient"
    };
}