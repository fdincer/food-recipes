import { Link } from "react-router"; 
import { Categories } from "../Api/Types/Category";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowDownShortWide } from "react-icons/fa6";

export default function Sidebar( {data}: { data: Categories[]} ) {

    const [categoryShow,setCategoryShow]= useState<boolean>(false);
    
    const renderedCategories = data.map( (cat) => {
        return <Link to={`/search/category/${cat.categoryName}`} key={cat.categoryName} 
                    className="flex flex-col items-center m-2 p-1 cursor-pointer hover:bg-gray-100 hover:border-gray-400 hover:underline hover:text-sky-700">
            <div>
                <img src={cat.categoryThumb} alt={cat.categoryName} className="border w-40 m-1"/>
            </div>
            <div className="text-xl">
                {cat.categoryName}
            </div>
        </Link>
    });

    return(
        <div className="md:flex-col rounded-xl mx-2 my-4 p-1 md:p-3 border shadow-lg shadow-gray-300" onMouseEnter={ () => {setCategoryShow(!categoryShow)}} onMouseLeave={ () => setCategoryShow(!categoryShow)}>
            <div className="flex flex-row font-bold text-lg mb-1 md:text-3xl md:mb-4 items-center justify-center gap-x-2 mx-auto mt-2">
                    Categories  
                    { categoryShow ? <FaArrowDownShortWide /> : <GiHamburgerMenu /> }
            </div>
                    { categoryShow ? <div className="flex sm:flex-col md:flex-row flex-wrap items-center justify-center">
                            {renderedCategories}
                        </div> : <> </>
                    }
        </div>
    );
}