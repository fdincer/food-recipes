import { Outlet } from "react-router";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";


export default function Layout(){
    return(
        <div>
            <Header />
            <Sidebar /> 
            <Footer />
        </div>
    );
}