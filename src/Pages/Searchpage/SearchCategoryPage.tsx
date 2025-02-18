import { useLoaderData } from "react-router"
import type { SearchCategoryLoader } from "./searchCategoryLoader";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";


export default function SearchCategoryPage(){

    const {recipeList} = useLoaderData() as SearchCategoryLoader;
    const navigate = useNavigate();
   
    const renderedList = recipeList.map( (r) => {
        return (
            <div key={r.recipeId} className="border flex items-center text-center flex-col p-4 w-lg mx-auto">
                <div>
                    <img src={r.recipeThumb} alt={r.recipeId} className="w-60 "/>
                </div>
                
                <p className="text-2xl my-4 text-center">{r.recipeName}</p>
                
                <button onClick={ ()=> navigate(`/recipe/${r.recipeName}`)} className="border-2 p-2 w-full border-green-800 mx-auto bg-green-600 hover:bg-green-800 hover:underline cursor-pointer text-white flex flex-row items-center text-md">
                    <p className="mx-auto">View Recipe</p>
                    <SlArrowRight className="text-lg font-thin" />
                </button>
                
            </div>
        );
    })
    
    return(
        <div>
            <div className="flex flex-row flex-wrap gap-8 container my-8 items-center mx-auto">
                {renderedList}
            </div>
        </div>
    )
}