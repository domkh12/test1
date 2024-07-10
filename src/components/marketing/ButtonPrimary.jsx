import { Button } from "flowbite-react";

function PrimaryButton ({text}){
    return(
        <>
        <Button className="bg-red-500 text-white hover:bg-white hover:text-red-500">{text}</Button>
        </>
    );
};
export default PrimaryButton;