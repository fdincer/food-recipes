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
                <div className="p-8 my-16 mx-auto flex sm:flex-col-reverse lg:flex-row columns-2 items-center">
                    
                        <div className="aspect-3/2 w-full">
                            <img src={CookingTeam} alt="cooking-team" className="mx-auto object-cover" />
                        </div>

                        <div className="p-4 my-4 mx-2 w-fit h-96 text-center">
                            <p className="sm:text-lg md:text-2xl">Welcome to Food Recipes, your ultimate destination for delicious and easy-to-follow cooking recipes!
                                Whether you're a seasoned chef or a beginner in the kitchen, our collection of mouthwatering dishes
                                will inspire you to cook with confidence. From quick weeknight meals to gourmet delights, we provide
                                step-by-step instructions on classic favorites. Explore a world of flavors, discover new recipes and
                                bring joy to your table with every bite.
                            </p>
                            <p className="text-5xl mt-20">
                                Start your colinary adventure today!
                            </p>
                        </div>
                    
                </div>

                <div className="flex flex-col justify-center bg-indigo-100 my-4 py-4">
                    <div className="text-3xl font-bold py-4 mx-auto mb-4">Here is some random recipes for you!</div>

                    <div className="grid grid-cols-2 container mx-auto max-w-5/6 flex-wrap justify-center items-center">
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