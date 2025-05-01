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
                return <div className="flex border gap-1 rounded-md bg-amber-700 justify-center p-1 text-white text-sm" key={tag}>
                    {tag}
                </div>
            });
        } 

        return (
            <div className="flex flex-col md:flex-row items-center rounded-xl m-2 bg-slate-100 border-2 border-slate-400 p-2 h-full md:h-60" key={r.recipeName}>
                <div className="w-80">
                    <img src={r.recipeThumb} alt={r.recipeName} />
                </div>

                <div className="flex flex-col m-4 items-center text-center w-full mx-2">
                    <div className="text-4xl font-bold text-center">
                        {r.recipeName}
                        <div className="mb-4">
                            {r.recipeCategory && <p className="text-2xl text-amber-800 font-thin">{r.recipeCategory}</p>}
                        </div>

                    </div>
                    <div className="flex flex-row text-md items-center p-2">
                            <p className="font-bold mr-2">Related Tags:</p> 
                            { tags !== null ? renderedTags : "No Specified Tags"}
                    </div>

                </div>

                <div className="items-center text-center w-2/5">
                    <button onClick={handleClick} className="border-4 bg-amber-700 hover:bg-amber-500 px-8 py-4 hover:underline cursor-pointer text-white flex flex-row items-center w-fit text-xl mx-auto">
                        <p>View Recipe</p>
                        <SlArrowRight className="text-2xl font-thin" />
                    </button>
                </div>

            </div>
        );
    });

    return(
        <div className="w-full">
           {renderedRandomRecipe}
        </div>
    );

};