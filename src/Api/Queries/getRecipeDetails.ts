import type { RecipeItemDetails } from "../Types/RecipeItemDetails";

interface RecipeDetailsResponse {
    meals: {
        idMeal: string;
        strMeal: string;
        strDrinkAlternate: string;
        strCategory: string;
        strArea: string;
        strInstructions: string;
        strMealThumb: string;
        strTags: string;
        strYoutube: string;
        strIngredient1: string;
        strIngredient2: string;
        strIngredient3: string;
        strIngredient4: string;
        strIngredient5: string;
        strIngredient6: string;
        strIngredient7: string;
        strIngredient8: string;
        strIngredient9: string;
        strIngredient10: string;
        strIngredient11: string;
        strIngredient12: string;
        strIngredient13: string;
        strIngredient14: string;
        strIngredient15: string;
        strIngredient16: string;
        strIngredient17: string;
        strIngredient18: string;
        strIngredient19: string;
        strIngredient20: string;
        strMeasure1: string;
        strMeasure2: string;
        strMeasure3: string;
        strMeasure4: string;
        strMeasure5: string;
        strMeasure6: string;
        strMeasure7: string;
        strMeasure8: string;
        strMeasure9: string;
        strMeasure10: string;
        strMeasure11: string;
        strMeasure12: string;
        strMeasure13: string;
        strMeasure14: string;
        strMeasure15: string;
        strMeasure16: string;
        strMeasure17: string;
        strMeasure18: string;
        strMeasure19: string;
        strMeasure20: string;
    }[];
}

export async function getRecipeDetails(recipeName: string): Promise<RecipeItemDetails[]> {

    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`);
    const data: RecipeDetailsResponse = await res.json();

    return data.meals.map( (r) => {
        return {
            recipeId: r.idMeal,
            recipeMeal: r.strMeal,
            recipeDrinkAlternative: r.strDrinkAlternate,
            recipeCategory: r.strCategory,
            recipeArea: r.strArea,
            recipeThumb: r.strMealThumb,
            recipeTags: r.strTags,
            recipeYoutube: r.strYoutube,
            recipeInstructions: r.strInstructions,
            recipeIngredient1: r.strIngredient1,
            recipeIngredient2: r.strIngredient2,
            recipeIngredient3: r.strIngredient3,
            recipeIngredient4: r.strIngredient4,
            recipeIngredient5: r.strIngredient5,
            recipeIngredient6: r.strIngredient6,
            recipeIngredient7: r.strIngredient7,
            recipeIngredient8: r.strIngredient8,
            recipeIngredient9: r.strIngredient9,
            recipeIngredient10: r.strIngredient10,
            recipeIngredient11: r.strIngredient11,
            recipeIngredient12: r.strIngredient12,
            recipeIngredient13: r.strIngredient13,
            recipeIngredient14: r.strIngredient14,
            recipeIngredient15: r.strIngredient15,
            recipeIngredient16: r.strIngredient16,
            recipeIngredient17: r.strIngredient17,
            recipeIngredient18: r.strIngredient18,
            recipeIngredient19: r.strIngredient19,
            recipeIngredient20: r.strIngredient20,
            recipeMeasure1: r.strMeasure1,
            recipeMeasure2: r.strMeasure2,
            recipeMeasure3: r.strMeasure3,
            recipeMeasure4: r.strMeasure4,
            recipeMeasure5: r.strMeasure5,
            recipeMeasure6: r.strMeasure6,
            recipeMeasure7: r.strMeasure7,
            recipeMeasure8: r.strMeasure8,
            recipeMeasure9: r.strMeasure9,
            recipeMeasure10: r.strMeasure10,
            recipeMeasure11: r.strMeasure11,
            recipeMeasure12: r.strMeasure12,
            recipeMeasure13: r.strMeasure13,
            recipeMeasure14: r.strMeasure14,
            recipeMeasure15: r.strMeasure15,
            recipeMeasure16: r.strMeasure16,
            recipeMeasure17: r.strMeasure17,
            recipeMeasure18: r.strMeasure18,
            recipeMeasure19: r.strMeasure19,
            recipeMeasure20: r.strMeasure20
        };
    });
}