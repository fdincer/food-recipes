import type { RecipeItem } from "../Types/RecipeItem";

interface RecipeItemResponse {
    meals:{
        strMeal: string;
        strCategory: string;
        strTags?: string[];
        strMealThumb: string;
    }[];
}

export async function getRandomRecipe(): Promise<RecipeItem[]> {

    const res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
    const data: RecipeItemResponse = await res.json();

    return data.meals.map( (meal) => {
        return {
            recipeName: meal.strMeal,
            recipeCategory: meal.strCategory,
            recipeThumb: meal.strMealThumb,
            recipeTags: meal.strTags,
        };
    });
}