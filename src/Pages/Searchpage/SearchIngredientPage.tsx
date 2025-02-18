import { useLoaderData } from "react-router"
import { SearchIngredientLoader } from "./searchIngredientLoader";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";

export default function SearchIngredientPage(){

    const {recipeList, searchType} = useLoaderData() as SearchIngredientLoader;
    const navigate = useNavigate();

    const renderedList = recipeList.map( (r) => {
        return (
            <div key={r.recipeId} className="border rounded flex flex-col flex-wrap w-64 p-4">
                <div>
                    <img src={r.recipeThumb} alt={r.recipeId} className="w-60"/>
                </div>
                <p className="text-xl py-4 text-center">{r.recipeName}</p>
                <div className="items-center text-center">
                    <button onClick={ ()=> navigate(`/recipe/${r.recipeName}`)} className="border-2 p-2 w-full border-green-800 mx-auto bg-green-600 hover:bg-green-800 hover:underline cursor-pointer text-white flex flex-row items-center text-md">
                        <p className="mx-auto">View Recipe</p>
                        <SlArrowRight className="text-lg font-thin" />
                    </button>
                </div>
            </div>
        );
    }) 
    
    return(
        <div>
            <div className="flex flex-row flex-wrap gap-8 container my-8 items-center mx-auto">
                {renderedList}
            </div>
            <p className="mb-2 p-2 border-2 border-bg-yellow-400 bg-yellow-200 text-lg">Search Type: {searchType}</p>
        </div>
    )
}