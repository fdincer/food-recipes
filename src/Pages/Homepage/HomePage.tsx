import Sidebar from "../../Components/Sidebar";
import MenuRecipeItem from "../../Components/MenuRecipeItem";
import  CookingTeam  from "../../../images/cooking-chefs.png";
import { useLoaderData } from "react-router";
import { HomeLoaderResult } from "./homeLoader";

export default function HomePage(){

    const {categories, randomRecipe, randomRecipe2, randomRecipe3, randomRecipe4 } = useLoaderData() as HomeLoaderResult;

    return(
        <div className="flex flex-col justify-center">
            <Sidebar data={categories} />
            <div>
            <div className="flex flex-col rounded-lg shadow-md lg:flex-row items-center justify-around p-8 bg-gradient-to-br from-white to-gray-100">
                    <img
                        src={CookingTeam}
                        alt="Chefs"
                        className="w-80 lg:w-96 mb-5 lg:mb-0 object-contain"
                    />
                    <div className="text-center lg:text-left max-w-xl">
                        <h1 className="text-3xl font-bold mb-4 text-gray-800">
                        Welcome to <span className="text-amber-700 text-4xl">Food Recipes</span>
                        </h1>
                        <p className="text-gray-600 mb-6">
                        Your ultimate destination for delicious and easy-to-follow cooking recipes! Whether you're a seasoned chef or a beginner, our collection of dishes will inspire confidence and creativity in the kitchen.
                        </p>
                        <p className="text-gray-600 mb-6">
                        From quick weeknight meals to gourmet delights, follow step-by-step instructions and explore flavors from around the world.
                        </p>
                        <p className="text-xl italic font-medium text-amber-700">
                        Start your <span className="underline">culinary adventure</span> today!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col justify-center bg-zinc-100 my-2 py-2">
                    <div className="text-gray-800 text-3xl font-bold py-4 mx-auto mb-4">Here is some random recipes for you!</div>

                    <div className="flex gap-2 container mx-auto max-w-5/6 flex-wrap justify-center items-center">
                        <MenuRecipeItem recipe={randomRecipe}/>
                        <MenuRecipeItem recipe={randomRecipe2}/>
                        <MenuRecipeItem recipe={randomRecipe3}/>
                        <MenuRecipeItem recipe={randomRecipe4}/>
                    </div>   
                </div>
            </div> 
        </div>
    )
}