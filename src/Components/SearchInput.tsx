import { useState } from "react";
import { useNavigate } from "react-router";
import { VscSearch } from "react-icons/vsc";
import { RiErrorWarningLine } from "react-icons/ri";

export default function SearchInput() {

    const [input,SetInput] = useState<string>("");
    const [searchBy, setSearchBy] = useState("recipe");
    const [error, setError] = useState<string>("");

    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(!input.trim()){
            setError("Input is needed for search.")
        }
        else if(searchBy == "recipe"){
            navigate(`/search?recipe=${input}`);
        }
        else if(searchBy == "ingredient"){
            navigate(`/search/ingredient?ingredient=${input}`);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-row items-center justify-center">
            <div className="flex px-4 items-center rounded space-x-2">
                
                <p>Search By:</p>
                <select className="border p-0.5 border-gray-500 rounded" value={searchBy} 
                    onChange={e => {setSearchBy(e.target.value)} }>
                   <option value="recipe">Recipe</option>
                   <option value="ingredient">Ingredient</option>
                </select>
            </div>
            <div className="flex flex-col">
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
                <div> { (error && !input)  &&  <p className="text-red-500 flex items-center gap-x-1"> <RiErrorWarningLine /> {error}</p> } </div>
            </div>
            
        </form>
    );
}