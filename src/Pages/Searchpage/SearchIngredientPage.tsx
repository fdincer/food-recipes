import { useLoaderData } from "react-router"
import { SearchIngredientLoader } from "./searchIngredientLoader";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";

export default function SearchIngredientPage(){

    const {recipeList, searchType} = useLoaderData() as SearchIngredientLoader;
    const navigate = useNavigate();

    const renderedList = recipeList.map( (r) => {
        return (
            <div key={r.recipeId} className="border rounded flex flex-col flex-wrap p-8 bg-gray-200">
                <div>
                    <img src={r.recipeThumb} alt={r.recipeId} className="w-60"/>
                </div>
                <div className="text-xl font-bold relative group inline-block mt-2 mb-8 text-center">
                        {r.recipeName.length < 20 ? r.recipeName : r.recipeName.slice(0,20) + "..."}
                        <span className="absolute left-0 bottom-full mt-1 text-sm text-gray-800 bg-gray-200 border px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            {r.recipeName}
                        </span>
                </div>
                        
                <div className="items-center text-center">
                    <button onClick={ ()=> navigate(`/recipe/${r.recipeName}`)} className="border-2 p-2 w-full bg-amber-700 hover:bg-amber-500 hover:underline cursor-pointer text-white flex flex-row items-center text-lg">
                        <p className="mx-auto">View Recipe</p>
                        <SlArrowRight className="text-lg font-thin" />
                    </button>
                </div>
            </div>
        );
    }) 
    
    return(
        <div>
            <div className="flex flex-row flex-wrap container gap-4 my-4 mx-auto">
                {renderedList}
            </div>
            <p className="mb-2 p-2 border-2 border-bg-yellow-400 bg-yellow-200 text-lg"><strong>Search Type:</strong> {searchType}</p>
        </div>
    )
}