import { Button } from "flowbite-react";
import { FaAngleRight } from "react-icons/fa";

function AngelButton ({text}){
    return(
        <>
        <Button className="text-white border border-white hover:bg-red-500 hover:text-white">{text} 
            <FaAngleRight className="bg-black rounded-3xl"/></Button>
        </>
    );
};
export default AngelButton;