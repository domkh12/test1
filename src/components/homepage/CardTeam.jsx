import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
function CardTeam({ title, role, github, facebook, img, color }) {
  const cardColor = `bg-${color}`;
  const shadowCardColor = `border-${color}`;  
  return (
    <div>
      <div className="relative h-56 mt-20">
        <img
          src={img}
          className="w-56 z-10 rounded-ss-[70px] bottom-0 h-72 object-cover rounded-ee-[70px] absolute"
          alt="photo"
        />
        <div
          className={`w-56 rounded-ss-[70px] absolute rounded-ee-[70px] h-56 ${cardColor} top-0 left-0`}
        ></div>
        <div
          className={`w-56 ${shadowCardColor} rounded-ss-[70px] border-[3px] border-l-0 border-r-0 border-b-0 h-48 absolute -top-4 -left-3`}
        ></div>
        <div className="w-48 rounded-ss-[70px] rounded-ee-[70px] overflow-hidden relative">
          <div className="w-5 h-5 border-[3px] border-white absolute top-[170px] left-10 rounded-full"></div>
          <IoTriangle className="absolute text-white top-32 left-5 w-5 h-5 rotate-45" />
          <div className="w-6 h-[2px] bg-pink-600 absolute top-16 right-2 rotate-[110deg]"></div>
          <div className="w-6 h-[2px] bg-white absolute top-[65px] -right-1 rotate-[120deg]"></div>
          <img
            src="public/homepageImg/img1.png"
            className=" top-20 absolute -right-0 w-7 h-7"
            alt=""
          />
        </div>
      </div>
      {/* text */}
      <div className="flex flex-col gap-2 justify-start items-start mt-3">
        <p className="font-semibold text-lg ">{title}</p>
        <p className="text-gray-600">{role}</p>
        <div className="flex gap-5">
          <a href={github} target="_blank">
            <FaGithub className="hover:text-primary w-7 h-7" />
          </a>
          <a href={facebook} target="_blank">
            <FaFacebookSquare className="hover:text-primary w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardTeam;
