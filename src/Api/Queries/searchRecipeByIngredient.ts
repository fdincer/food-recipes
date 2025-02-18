import type { RecipeItem } from "../Types/RecipeItem";

interface SearchRecipeByIngredientResponse {
    meals: {
        strMeal: string;
        strMealThumb: string;
        idMeal: string;
    }[];
}

export async function searchRecipeByIngredient(input:string): Promise<RecipeItem[]> { 

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${input}`);
    const data: SearchRecipeByIngredientResponse = await res.json();
   
    return data.meals.map( (meal) => {
        return {
            recipeName: meal.strMeal,
            recipeThumb: meal.strMealThumb,
            recipeId: meal.idMeal
        };
    }); 

}