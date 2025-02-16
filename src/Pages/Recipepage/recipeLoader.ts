import { getRecipeDetails } from "../../Api/Queries/getRecipeDetails";

import type { RecipeItemDetails } from "../../Api/Types/RecipeItemDetails";
import type { Params } from "react-router";


export interface RecipePageLoader {
    recipe: RecipeItemDetails[];
}


interface LoaderArgs{
    params: Params;
}


export async function recipeLoader( { params }: LoaderArgs): Promise<RecipePageLoader> {
    
    const { name } = params;
    if(!name){
        throw new Error("Recipe name is needed!");
    }

    const recipe = await getRecipeDetails(name);

    return {
        recipe: recipe
    }
}