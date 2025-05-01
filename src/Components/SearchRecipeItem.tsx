import type { RecipeItem } from "../Api/Types/RecipeItem";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";
import { ErrorBoundary } from "./ErrorBoundary";

export default function SearchRecipeItem({recipe}: { recipe: RecipeItem[]} ) {

    const navigate = useNavigate();

    const handleClick = () => {
        const [recipeName] = recipe;
        navigate(`/recipe/${recipeName.recipeName}`);
    }

    console.log(recipe)
    if (!recipe || recipe.length < 1) {
        return <ErrorBoundary />
    }
    
    const renderedRandomRecipe = recipe.map( (r) => {
        const tags = r.recipeTags;

        let renderedTags;

        if(tags !== null){
            const tagArray = tags?.split(",");

            renderedTags = tagArray?.map( (tag) => {
                return <div className="flex rounded-lg bg-amber-700 justify-center p-1 text-white text-xs md:text-sm" key={tag}>
                    {tag}
                </div>
            });
        } 

        return (
            <div className="flex flex-col items-center rounded-xl m-2 bg-slate-100 border-2 border-slate-300 p-2 w-xs" key={r.recipeName}>
                <div className="w-full lg:w-72">
                    <img src={r.recipeThumb} alt={r.recipeName} />
                </div>

                <div className="flex flex-col m-4 items-center text-center w-full mx-2">
                    <div className="text-xl font-bold relative group inline-block mt-2 mb-8 text-center">
                        {r.recipeName.length < 25 ? r.recipeName : r.recipeName.slice(0,25) + "..."}
                        <span className="absolute left-0 bottom-full mt-1 text-sm text-gray-800 bg-gray-200 border px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            {r.recipeName}
                        </span>
                        <p className="text-md font-thin text-amber-700">{r.recipeCategory}</p>
                    </div>
                    
                    <div className="gap-2 h-16 md:h-20 w-full flex flex-row flex-wrap items-center justify-center">
                            <p className="text-sm font-bold mr-2">Related Tags:</p> 
                            { tags !== null ? renderedTags : "No Specified Tags"}
                    </div>

                </div>

                <div className="items-center text-center ">
                    <button onClick={handleClick} className=" bg-amber-700 hover:bg-amber-500 hover:underline mb-2 cursor-pointer text-white flex flex-row items-center text-xs mx-auto px-2 py-2 md:px-8 md:py-4">
                        <p className="text-md md:text-lg">View Recipe</p>
                        <SlArrowRight className="text-lg md:text-2xl font-thin" />
                    </button>
                </div>

            </div>
        );
    });

    return(
        <div className="flex flex-wrap mx-auto justify-center items-center">
           {renderedRandomRecipe}
        </div>
    );

};