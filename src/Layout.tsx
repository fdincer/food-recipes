import { Outlet } from "react-router";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


export default function Layout(){
    return( 
        <div className="flex flex-col">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}