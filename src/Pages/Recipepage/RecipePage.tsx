import { Link, useLoaderData } from "react-router";
import { RecipePageLoader } from "./recipeLoader";
import IngredientItem from "../../Components/IngredientItem";
import { IoLogoYoutube } from "react-icons/io";

export default function RecipePage(){

    const {recipe} = useLoaderData() as RecipePageLoader;
    
    const renderedRecipe = recipe.map((r)=> {
        const tags = r.recipeTags;
        let renderedTags;

        if(tags !== null){
            const tagArray = tags?.split(",");

            renderedTags = tagArray?.map( (tag) => {
                return <div className="flex border mx-2 px-2 rounded-md bg-amber-700 justify-center py-1 text-white text-md" key={tag}>
                    {tag}
                </div>
            });
        }

        const renderedInstructions = r.recipeInstructions.split("\r\n").map( (str) => {
            return <p key={str} className="flex flex-row items-center mb-4">{str}</p>
        });

        return (
            <div key={r.recipeId} className="flex flex-col container max-w-4/5 mx-auto my-8">
                <div className="flex sm:flex-col lg:flex-row">
                    <div className="flex flex-col sm:w-full lg:w-lg items-center text-center">
                        <div>
                            <img src={r.recipeThumb} alt={r.recipeId} className="rounded-xl" />
                        </div>
                        <div>
                            <div className="text-5xl font-bold mx-4 my-2 ">
                                {r.recipeMeal}
                            </div>
                    
                            <div className="">
                                <p className="text-xl text-amber-800 font-thin">{r.recipeCategory}</p>
                            </div>

                            <div className="mb-8">
                                <p className="text-xl from-neutral-700"> <b>Area:</b> {r.recipeArea}</p>
                            </div>
                    
                            <div className="flex flex-row text-lg items-center p-2">
                                <p className="font-bold mr-2">Related Tags:</p> 
                                { tags !== null ? renderedTags : "No Specified Tags"}
                            </div>
                        
                        </div>
                    </div>

                    <div className="flex flex-col items-center">
                        <div className="flex flex-col lg:mx-4">
                            <div>
                                <p className="text-3xl text-bold mb-5 border-b-2 py-2">Ingredients</p>
                            </div>
                            <div className="grid grid-cols-3 gap-2 justify-center">
                                <IngredientItem ingredient={r.recipeIngredient1} measure={r.recipeMeasure1}/>
                                { (r.recipeIngredient2 !== "") && <IngredientItem ingredient={r.recipeIngredient2} measure={r.recipeMeasure2}/> }
                                { (r.recipeIngredient3 !== "") && <IngredientItem ingredient={r.recipeIngredient3} measure={r.recipeMeasure3}/> }
                                { (r.recipeIngredient4 !== "") && <IngredientItem ingredient={r.recipeIngredient4} measure={r.recipeMeasure4}/> }
                                { (r.recipeIngredient5 !== "") && <IngredientItem ingredient={r.recipeIngredient5} measure={r.recipeMeasure5}/> }
                                { (r.recipeIngredient6 !== "") && <IngredientItem ingredient={r.recipeIngredient6} measure={r.recipeMeasure6}/> }
                                { (r.recipeIngredient7 !== "") && <IngredientItem ingredient={r.recipeIngredient7} measure={r.recipeMeasure7}/> }
                                { (r.recipeIngredient8 !== "") && <IngredientItem ingredient={r.recipeIngredient8} measure={r.recipeMeasure8}/> }
                                { (r.recipeIngredient9 !== "") && <IngredientItem ingredient={r.recipeIngredient9} measure={r.recipeMeasure9}/> }
                                { (r.recipeIngredient10 !== "") && <IngredientItem ingredient={r.recipeIngredient10} measure={r.recipeMeasure10}/> }
                                { (r.recipeIngredient11 !== "") && <IngredientItem ingredient={r.recipeIngredient11} measure={r.recipeMeasure11}/> }
                                { (r.recipeIngredient12 !== "") && <IngredientItem ingredient={r.recipeIngredient12} measure={r.recipeMeasure12}/> }
                                { (r.recipeIngredient13 !== "") && <IngredientItem ingredient={r.recipeIngredient13} measure={r.recipeMeasure13}/> }
                                { (r.recipeIngredient14 !== "") && <IngredientItem ingredient={r.recipeIngredient14} measure={r.recipeMeasure14}/> }
                                { (r.recipeIngredient15 !== "") && <IngredientItem ingredient={r.recipeIngredient15} measure={r.recipeMeasure15}/> }
                                { (r.recipeIngredient16 !== "") && <IngredientItem ingredient={r.recipeIngredient16} measure={r.recipeMeasure16}/> }
                                { (r.recipeIngredient17 !== "") && <IngredientItem ingredient={r.recipeIngredient17} measure={r.recipeMeasure17}/> }
                                { (r.recipeIngredient18 !== "") && <IngredientItem ingredient={r.recipeIngredient18} measure={r.recipeMeasure18}/> }
                                { (r.recipeIngredient19 !== "") && <IngredientItem ingredient={r.recipeIngredient19} measure={r.recipeMeasure19}/> }
                                { (r.recipeIngredient20 !== "") && <IngredientItem ingredient={r.recipeIngredient20} measure={r.recipeMeasure20}/> }
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="mx-8 my-2 text-lg bg-gray-200 p-8 rounded-xl">
                    <p className="text-xl font-bold mb-2 border-l-4 pl-2 border-amber-900">Instructions:</p>
                    <hr className="mb-4" />
                    { renderedInstructions }
                </div>

                <div className="border-4 border-yellow-300 rounded-xl mx-8 my-2 p-8 bg-yellow-50">
                    <p className="font-bold text-xl mb-2 border-l-4 pl-2 border-amber-900">Need more help?</p>
                    <hr className="mb-4"></hr>
                    <Link to={r.recipeYoutube} target="_blank" className="flex flex-row items-center w-fit ">
                        <IoLogoYoutube className="text-6xl text-red-500 bg-white mr-4"/>
                        <p>Watch a video of <b>{r.recipeMeal}</b> to learn! </p>
                    </Link>  
                   
                </div>
        
            </div>
        );
    });

    return(
        <div>
            {renderedRecipe}
        </div>
    )
}