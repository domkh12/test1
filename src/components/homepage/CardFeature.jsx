import React from "react";
function CardFeature({title, desc, icon}) {
  return (
    <div className=" w-auto h-auto bg-[#EBEBEB] hover:bg-white hover:outline hover:outline-1 hover:outline-gray-200 p-7 gap-6 flex flex-col justify-start items-start rounded-md">
      <div className="bg-white w-12 h-12 rounded-full p-2">
        {icon}
      </div>
      <h2 className="text-xl font-medium">{title}</h2>
      <p className="text-gray-700">
        {desc}
      </p>
    </div>
  );
}

export default CardFeature;
