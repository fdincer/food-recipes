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
                return <div className=" flex border gap-1 rounded-md bg-amber-700 justify-center p-1 text-white text-sm" key={tag}>
                    {tag}
                </div>
            });
        } 

        return (
            <div className="flex items-center border rounded-xl m-2 bg-amber-50 p-4 h-72 w-xl" key={r.recipeName}>
                <div>
                    <img src={r.recipeThumb} alt={r.recipeName} className="w-60" />
                </div>

                <div className="flex flex-col m-4 items-center text-center mx-auto">
                    <div className="text-xl font-bold">
                        {r.recipeName}
                    </div>

                    <div className="mb-12">
                        <p className="text-amber-800 font-thin">{r.recipeCategory}</p>
                    </div>

                    <div className="flex flex-row text-sm items-center p-2">
                        <p className="font-bold mr-2">Related Tags:</p> 
                        { tags !== null ? renderedTags : "No Specified Tags"}
                    </div>

                    <button onClick={handleClick} className="border px-8 py-4 mt-4 bg-amber-200 hover:bg-amber-400 flex items-center justify-between text-lg">
                        View Recipe
                        <SlArrowRight className="ml-4" />
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