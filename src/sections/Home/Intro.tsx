import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="flex justify-center items-center gap-0 p-4">
      <div className="flex flex-col gap-8">
        <p className="text-5xl lg:text-6xl font-bold font-nunito -rotate-[8.72deg] text-primary">
          Fun to care,
        </p>
        <p className="text-5xl lg:text-6xl indent-12 font-bold font-nunito text-[#FBA628]">
          Comfy Feel
        </p>
        <p className="text-gray-500 max-w-[32ch] text-sm sm:text-base lg:text-xl text-justify">
          Mauris aliquet enim quis odio lacinia, id viverra elit convallis. Nunc
          nulla massa elit
        </p>
        <button className="bg-primary text-white text-sm sm:text-base px-6 py-2 sm:py-3 rounded-lg w-fit mx-auto smx:mx-0">
          Shop Now
        </button>
      </div>
      <Image
        className="w-[370px] h-[280px] lg:w-[500px] lg:h-[400px] hidden smx:block"
        src={"/images/home-header-dotted.png"}
        alt="home header"
        width={500}
        height={400}
      />
    </div>
  );
};

export default Intro;
