import Sidebar from "../../Components/Sidebar";
import { useLoaderData } from "react-router";
import type { HomeLoaderResult } from "./homeLoader";

export default function HomePage(){
    const data = useLoaderData() as HomeLoaderResult;

    return(
        <div className="flex sm:flex-col md:flex-row">
            <Sidebar data={data} />
            Home Page
        </div>
    )
}