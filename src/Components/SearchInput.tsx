import { useState } from "react";
import { useNavigate } from "react-router";
import { VscSearch } from "react-icons/vsc";

export default function SearchInput() {

    const [input,SetInput] = useState<string>("");
    const [searchBy, setSearchBy] = useState("recipe");

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(searchBy == "recipe"){
            navigate(`/search?recipe=${input}`);
        }
        else if(searchBy == "ingredient"){
            navigate(`/search/ingredient?ingredient=${input}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-row ">
            <div className="flex flex-col border border-gray-500 px-4 rounded items-center">
                <p className="mx-auto">Search By:</p>

                <select className="border border-gray-500 rounded mb-1" value={searchBy} 
                    onChange={e => {setSearchBy(e.target.value)} }>
                   <option value="recipe">Recipe</option>
                   <option value="ingredient">Ingredient</option>
                </select>

            </div>
            <div className="relative border border-gray-500 rounded">
                <div className="absolute inset-y-0 flex items-center pl-4">
                    <VscSearch className="h-5 w-5 text-gray-500" /> 
                </div>
                <input 
                    value={input} onChange={ e => SetInput(e.target.value) } 
                    className="pl-12 py-3 w-full"
                    placeholder="Search Meal..."
                />
            </div>
        </form>
    );
}