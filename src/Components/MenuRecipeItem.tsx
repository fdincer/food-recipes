import type { RecipeItem } from "../Api/Types/RecipeItem";
import { SlArrowRight } from "react-icons/sl";
import { useNavigate } from "react-router";

export default function MenuRecipeItem({recipe}: { recipe: RecipeItem[]} ) {

    const navigate = useNavigate();

    const handleClick = () => {
        const [recipeName] = recipe;
        navigate(`/recipe/${recipeName.recipeName}`);
    }
    
    const renderedRandomRecipe = recipe.map( (r) => {

        const tags = r.recipeTags;
        let renderedTags;

        if(tags !== null){
            const tagArray = tags.split(",");

            renderedTags = tagArray.map( (tag) => {
                return <div className="flex border gap-1 rounded-md bg-amber-700 justify-center p-1 text-white text-sm " key={tag}>
                    {tag}
                </div>
            });
        } 

        return (
            <div className="flex flex-col bg-white flex-wrap items-center max-h-full overflow-y-auto border rounded-xl m-2 p-2 max-w-md sm:mx-auto" key={r.recipeName}>
                <div>
                    <img src={r.recipeThumb} alt={r.recipeName} className="w-60" />
                </div>

                <div className="flex flex-col m-4 items-center text-center mx-auto">
                    <div className="text-lg font-bold relative group inline-block">
                        {r.recipeName.length < 20 ? r.recipeName : r.recipeName.slice(0,20) + "..."}
                        <span className="absolute left-0 bottom-full mt-1 text-sm text-gray-800 bg-gray-200 border px-2 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity">
                            {r.recipeName}
                        </span>
                    </div>

                    <div className="mb-auto">
                        <p className="text-amber-800 font-thin">{r.recipeCategory}</p>
                    </div>

                    <div className="flex flex-wrap max-w-60 text-sm p-1 mt-2 h-32 items-start overflow-hidden gap-1">
                        <p className="font-bold gap-1 mt-1">Related Tags:</p> 
                        { tags !== null ? renderedTags : <p className="mt-1">No Specified Tags</p>}
                    </div>

                    <button onClick={handleClick} className="border space-x-4 px-8 py-4 mt-4 bg-amber-700 hover:bg-amber-500 text-amber-50 cursor-pointer hover:underlined flex items-center justify-between text-lg">
                        <p className="">View Recipe</p>
                        <SlArrowRight />
                    </button>

                </div>

            </div>
        );
    });

    return(
        <div>
           {renderedRandomRecipe}
        </div>
    );

};