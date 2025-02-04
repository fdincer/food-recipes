import type { HomeLoaderResult } from "../Pages/Homepage/homeLoader";
// import { Link } from "react-router";  for category link

export default function Sidebar({data}: {data:HomeLoaderResult}) {

    const renderedCategories = data.allCategories.map( (cat) => {
        return <div key={cat.categoryName} className="flex flex-col items-center hover:border hover:rounded m-2 p-1">
            <div>
                <img src={cat.categoryThumb} alt={cat.categoryName} className="w-24 m-1"/>
            </div>
            <div className="text-xl">
                {cat.categoryName}
            </div>
        </div>
    });

    return(
        <div className="border border-gray-100 p-8 bg-green-200">
            <div className="flex text-2xl font-bold justify-center mb-4">
                Categories
            </div>
            <div className="flex flex-col col-span-2">
                {renderedCategories}
            </div>
        </div>
    );
}