import React from "react";
import { FaHome } from "react-icons/fa";
import Building from "../assets/building.png";

const MainSection = () => {
  return (
    <div className="bg-section_bg py-10 pl-12 lg:pl-0 lg:py-0 lg:h-[529px] flex flex-col lg:flex-row justify-around items-center">
      <div className="">
        <div className="flex items-center">
          <FaHome className="text-hover_colr text-xl" />
          <p className="pl-2 text-xl">Real Estate Agency</p>
        </div>
        <div>
          <p className="text-3xl lg:text-5xl font-bold py-6 w-[300px] lg:w-[500px]">
            Find Your Dream House By Us
          </p>
          <p className="pl-4 lg:pl-8 border-l-[1.5px] border-black lg:w-[400px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore.
          </p>
          <button
            type="button"
            className="bg-hover_colr text-white p-4 text-lg mt-8 hover:bg-white hover:text-black hover:border-2 hover:border-black"
          >
            Make An Enquiry
          </button>
        </div>
      </div>
      <div className="hidden lg:block lg:pl-8">
        <img
          src={Building}
          alt=""
          className="w-full lg:w-[500px] lg:text-right"
        />
      </div>
    </div>
  );
};

export default MainSection;
