import { getCategoryRecipes } from "../../Api/Queries/getCategoryRecipes";
import { RecipeItem } from "../../Api/Types/RecipeItem";
import type { Params } from "react-router";


export interface SearchCategoryLoader {
    recipeList: RecipeItem[];
}

interface LoaderArgs{
    params: Params;
}

export async function searchCategoryLoader( { params }: LoaderArgs): Promise<SearchCategoryLoader> {
    
    const { name } = params;
    if(!name){
        throw new Error("Category name is needed!");
    }

    const recipe = await getCategoryRecipes(name);

    return {
        recipeList: recipe
    }
}