import React from "react";
import CardInfo from "./CardInfo";
import FormContact from "./FormContact";

function ContactSection() {
  return (
    <section className="py-10 mx-20 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-6">
        <h2 className="text-4xl text-primary font-semibold">
          Why Choose Showcase?
        </h2>
        <p className="text-lg">
          Showcase.com has everything you need. Whatever you want to do, we have
          a feature for it.
        </p>
        <div className="w-44 rounded-md h-1 bg-primary"></div>
      </div>
      <div className="flex  mt-10 p-5 rounded-md w-[70%] gap-10 border border-gray-300 ">
        {/* card info */}
        <CardInfo />
        {/* form send message */}
        <FormContact />
      </div>
    </section>
  );
}

export default ContactSection;
