import type { Categories } from "../Types/Category";

interface CategoryResult {
    strCategory: string;
}

export async function getCategories(): Promise<Categories> { 
    const res = await fetch("www.themealdb.com/api/json/v1/1/categories.php");
    const data = await res.json();

    return data as Categories;
}