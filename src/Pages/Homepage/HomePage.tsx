import Sidebar from "../../Components/Sidebar";

import { useLoaderData } from "react-router";
import { HomeLoaderResult } from "./homeLoader";



export default function HomePage(){
    const data = useLoaderData() as HomeLoaderResult;

   
    


    return(
        
        <div className="flex flex-col">
            <Sidebar data={data} />
            <div>
                Homepage
               
            </div>
            
        </div>
    )
}