import type { Categories } from "../../Api/Types/Category";
import { getCategories } from "../../Api/Queries/getCategories";

import { getRandomRecipe } from "../../Api/Queries/getRandomRecipes";
import { RecipeItem } from "../../Api/Types/RecipeItem";

export interface HomeLoaderResult {
    categories: Categories[];  
    randomRecipe: RecipeItem[];
    randomRecipe2: RecipeItem[];
    randomRecipe3: RecipeItem[];
    randomRecipe4: RecipeItem[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {

    const allCategories = await getCategories();

    const recipe = await getRandomRecipe();
    const recipe2 = await getRandomRecipe();
    const recipe3 = await getRandomRecipe();
    const recipe4 = await getRandomRecipe();

    return {
        categories: allCategories,
        randomRecipe: recipe,
        randomRecipe2: recipe2,
        randomRecipe3: recipe3,
        randomRecipe4: recipe4,
    }
}