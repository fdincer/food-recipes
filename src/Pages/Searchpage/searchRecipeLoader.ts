import { searchRecipe } from "../../Api/Queries/searchRecipe";
import type { RecipeItem } from "../../Api/Types/RecipeItem";

export interface SearchRecipeLoader {
    recipeList: RecipeItem[];
    searchType: string;
}

export async function searchRecipeLoader({request}: {request: Request}) {

    const { searchParams } = new URL(request.url);
    const recipe = searchParams.get("recipe");

    if(!recipe){
        throw new Error("Input needs to be provided");
    }
    
    const recipes = await searchRecipe(recipe);

    return {
        recipeList: recipes,
        searchType: "Recipe"
    };
}