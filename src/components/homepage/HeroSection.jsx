import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import { FaCheckCircle } from "react-icons/fa";
function HeroSection() {
  return (
    <section className="pb-20">
      <div className="flex justify-between items-center mx-20 mt-5">
        <div className="flex flex-col gap-7 w-[50%]">
          <h1 className="text-primary font-bold text-7xl">
            Almost Portfolios For You!
          </h1>
          <p className="text-xl font-medium">
            A portfolio is a curated collection of materials that showcase your
            skills, accomplishments, and experience.
          </p>
          <p className="text-gray-700">
            Everything you need to build and grow any website all in one place .
          </p>
          <ButtonPrimary text={"Get Started"} />
        </div>
        <div className="w-[1200px] -mr-16">
          <img src="/public/homepageImg/heroImg.png" alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between mx-20">
        <div className="flex gap-3 justify-center items-center">
        <FaCheckCircle className="w-6 h-6 text-primary" />
          <p>
            Build and edit your website without any coding or technical skills
          </p>
        </div>
        <div className="flex gap-3 justify-center items-center mr-96">
        <FaCheckCircle className="w-6 h-6 text-primary"/>
          <p>Leverage custom modules to deliver a great user experience</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
