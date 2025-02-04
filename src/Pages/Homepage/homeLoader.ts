import type { Categories } from "../../Api/Types/Category";
import { getCategories } from "../../Api/Queries/getCategories";

export interface HomeLoaderResult {
    allCategories: Categories[];
}

export async function homeLoader(): Promise<HomeLoaderResult> {
    const allCategories = await getCategories();

    return {
        allCategories
    }
}