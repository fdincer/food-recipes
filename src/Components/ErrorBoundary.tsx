
import  Sadface from "../../images/sadface.png";
import { useNavigate } from "react-router";

export function ErrorBoundary() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }
  
    return (
        <div className="container mx-auto shadow-lg flex justify-center m-4">

            <div className="flex flex-col mb-8">
                <img src={Sadface} alt="error" className="w-48 mx-auto" />
                <div className="mx-auto text-gray-800 text-4xl text-center">
                    <p>No recipes are found</p>
                    <p>Whoops! </p>
                </div>
                
                <p className="text-gray-600 text-lg text-center my-4"> 
                    You can go back to Homepage or try again.
                </p> 
                <button className="border-2 w-fit mx-auto border-blue-800 rounded-4xl px-6 py-4 bg-blue-500 hover:bg-blue-600 m-4 text-white" onClick={handleClick}>Go to HomePage</button>

            </div>

        </div>
    );
}