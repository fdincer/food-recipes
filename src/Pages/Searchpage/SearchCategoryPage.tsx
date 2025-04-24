import { useLoaderData } from "react-router"
import type { SearchCategoryLoader } from "./searchCategoryLoader";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";


export default function SearchCategoryPage(){

    const {recipeList} = useLoaderData() as SearchCategoryLoader;
    const navigate = useNavigate();
   
    const renderedList = recipeList.map( (r) => {
        return (
            <div key={r.recipeId} className="border bg-stone-100 flex items-center text-center flex-col p-2 w-xs mx-auto">
                <div>
                    <img src={r.recipeThumb} alt={r.recipeId} className="w-60 "/>
                </div>
                
                <div className="text-2xl font-bold relative group inline-block mt-2 mb-8 text-center">
                        {r.recipeName.length < 20 ? r.recipeName : r.recipeName.slice(0,20) + "..."}
                        <span className="absolute left-0 bottom-full mt-1 text-sm text-gray-800 bg-gray-200 border px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            {r.recipeName}
                        </span>
                </div>
                
                <button onClick={ ()=> navigate(`/recipe/${r.recipeName}`)} className="border-2 p-2 w-full border-amber-900 bg-amber-700 hover:bg-amber-500 hover:border-amber-600 hover:underline cursor-pointer text-white flex flex-row items-center text-lg">
                    <p className="mx-auto">View Recipe</p>
                    <SlArrowRight className="text-lg font-thin" />
                </button>
                
            </div>
        );
    })
    
    return(
        <div>
            <div className="flex flex-row flex-wrap gap-4 container my-8 mx-auto">
                {renderedList}
            </div>
        </div>
    )
}