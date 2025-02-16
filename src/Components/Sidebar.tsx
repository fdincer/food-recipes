import { Link } from "react-router"; 
import { Categories } from "../Api/Types/Category";

export default function Sidebar( {data}: { data: Categories[]} ) {
    
    const renderedCategories = data.map( (cat) => {
        return <Link to={"/"} key={cat.categoryName} 
                    className="flex flex-col items-center m-2 p-1 hover:bg-gray-100 hover:underline">
            <div>
                <img src={cat.categoryThumb} alt={cat.categoryName} className="w-24 m-1"/>
            </div>
            <div className="text-lg">
                {cat.categoryName}
            </div>
        </Link>
    });

    return(
        <div className="border border-gray-200 sm:flex-col rounded-xl m-4 p-4">
            <div className="p-1">
                <div className="flex text-3xl mb-4 font-bold justify-center">
                    Categories
                </div>
                <div className="flex cursor-pointer justify-center sm:flex-col md:flex-row md:flex-wrap">
                   {renderedCategories}
                </div>
            </div>
            
        </div>
    );
}