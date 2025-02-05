import type { Categories } from "../../Api/Types/Category";
import { getCategories } from "../../Api/Queries/getCategories";

import { getRandomRecipe } from "../../Api/Queries/getRandomRecipes";
import { RecipeItem } from "../../Api/Types/RecipeItem";

export interface HomeLoaderResult {
    allCategories: Categories[];  
    randomRecipe: RecipeItem[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
    const allCategories = await getCategories();
    const recipe = await getRandomRecipe();
    console.log(allCategories);
    console.log(recipe);

    return {
        allCategories,
        randomRecipe: recipe
    }
}