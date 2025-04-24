import type { RecipeItem } from "../Types/RecipeItem";

interface SearchRecipeResponse {
    meals: {
        strMeal: string;
        strCategory: string;
        strMealThumb: string;
        strTags: string
    }[];
}

export async function searchRecipe(input:string): Promise<RecipeItem[]>{ 

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`);
    const data: SearchRecipeResponse = await res.json();
    
    if(!data || !data.meals) {
        return [];
    }

    return data.meals.map( (meal) => {
        return {
            recipeName: meal.strMeal,
            recipeCategory: meal.strCategory,
            recipeThumb: meal.strMealThumb,
            recipeTags: meal.strTags
        };
    }); 
}