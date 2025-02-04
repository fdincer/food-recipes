import { useState } from "react";
import { useNavigate } from "react-router";
import { VscSearch } from "react-icons/vsc";

export default function SearchInput() {

    const [input,SetInput] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`/search?term=${input}`);
    };

    return (
        <form onSubmit={handleSubmit}>
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