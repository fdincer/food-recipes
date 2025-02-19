import foodrecipelogo from "../../foodrecipelogo.png";
import { Link } from "react-router";
import SearchInput from "./SearchInput";

export default function Header() {
    return(
        <div className="md:flex items-center justify-between p-4 shadow-md">
            <div className="flex items-center md:ml-20 lg:ml-40">
                <Link to={"/"} className="flex items-center cursor-pointer sm:mx-auto">
                    <img src={foodrecipelogo} className="w-14"/>
                    <h1 className="text-bold text-4xl">Food Recipes</h1>
                </Link>
            </div>
            <div className="md:w-full max-w-2xs md:max-w-xs lg:max-w-sm sm:mx-auto md:mx-0 sm:mt-5 md:mt-0">
                <SearchInput />
            </div>
        </div>
    );
}