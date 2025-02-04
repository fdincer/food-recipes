import type { Categories } from "../Types/Category";

interface GetCategoryResponse {
    categories: {
        strCategory: string;
        strCategoryThumb: string;
    }[];
}

export async function getCategories(): Promise<Categories[]>{ 

    const res = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    
    const data: GetCategoryResponse = await res.json();

    return data.categories.map( (category) => {
        return {
            categoryName: category.strCategory,
            categoryThumb: category.strCategoryThumb
        };
    });
    
}