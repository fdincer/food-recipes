import type { RecipeItem } from "../Types/RecipeItem";

interface GetCategoryRecipesResponse{
    meals: {
        strMeal: string;
        strMealThumb: string;
        idMeal: string;
    }[];
}

export async function getCategoryRecipes(name: string): Promise<RecipeItem[]>{ 

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    const data: GetCategoryRecipesResponse = await res.json();

    return data.meals.map( (meal) => {
        return {
            recipeName: meal.strMeal,
            recipeThumb: meal.strMealThumb,
            recipeId: meal.idMeal       
        }
    });
}