import { useLoaderData } from "react-router"
import { SearchRecipeLoader } from "./searchRecipeLoader";
import SearchRecipeItem from "../../Components/SearchRecipeItem";

export default function SearchRecipePage(){

    const {recipeList, searchType} = useLoaderData() as SearchRecipeLoader;
    
    return(
        <div>
            <div className="flex container my-8 items-center mx-auto">
                <SearchRecipeItem recipe={recipeList} />
            </div>
            <p className="mb-2 p-2 border-2 border-bg-yellow-400 bg-yellow-200 text-sm md:text-lg"> <strong>Search Type:</strong> {searchType}</p>
        </div>
    )
}