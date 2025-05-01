import foodrecipelogo from "../../foodrecipelogo.png";
import { Link } from "react-router";
import SearchInput from "./SearchInput";

export default function Header() {
    return(
        <div className="md:flex sm:justify-center items-center w-full bg-stone-100 justify-between py-2 shadow-md">
            <div className="flex items-center sm:mx-auto lg:ml-40">
                <Link to={"/"} className="flex mx-auto items-center cursor-pointer sm:mx-auto">
                    <img src={foodrecipelogo} className="w-16 md:w-24"/>
                    <h1 className="text-bold text-3xl md:text-4xl">Food Recipes</h1>
                </Link>

            </div>
            <div className="w-full py-2 items-center sm:max-w-xl md:max-w-md lg:max-w-xl sm:mx-auto md:mx-0 sm:mt-5 md:mt-0">
                <SearchInput />
            </div>
        </div>
    );
}