import { useLoaderData } from "react-router"
import type { SearchCategoryLoader } from "./searchCategoryLoader";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";


export default function SearchCategoryPage(){

    const {recipeList} = useLoaderData() as SearchCategoryLoader;
    const navigate = useNavigate();
   
    const renderedList = recipeList.map( (r) => {
        return (
            <div key={r.recipeId} className="border bg-stone-100 flex items-center text-center flex-col p-2 w-2xs mx-auto">
                <div>
                    <img src={r.recipeThumb} alt={r.recipeId} className="w-60 "/>
                </div>
                
                <div className="text-lg md:text-2xl font-bold relative group inline-block mt-2 mb-8 text-center">
                        {r.recipeName.length < 25 ? r.recipeName : r.recipeName.slice(0,25) + "..."}
                        <span className="absolute left-0 bottom-full mt-1 text-sm text-gray-800 bg-gray-200 border px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            {r.recipeName}
                        </span>
                </div>
                
                <div className="items-center text-center">
                    <button onClick={ ()=> navigate(`/recipe/${r.recipeName}`)} className=" bg-amber-700 hover:bg-amber-500 hover:underline cursor-pointer text-white flex flex-row items-center text-xs mx-auto mb-2 px-2 py-2 md:px-8 md:py-4">
                        <p className="text-md md:text-lg">View Recipe</p>
                        <SlArrowRight className="text-lg md:text-2xl font-thin" />
                    </button>
                </div>
                
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