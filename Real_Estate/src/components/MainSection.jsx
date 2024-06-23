import React from "react";
import { FaHome } from "react-icons/fa";
import Building from "../assets/building.png";

const MainSection = () => {
  return (
    <div className="bg-section_bg h-[529px] flex justify-around items-center">
      <div>
        <div className="flex items-center">
          <FaHome className="text-hover_colr text-xl" />
          <p className="pl-2 text-xl">Real Estate Agency</p>
        </div>
        <div>
          <p className="text-5xl font-bold py-6">
            Find Your Dream <br /> House By Us
          </p>
          <p className="pl-8 border-l-[1.5px] border-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            <br /> sed do eiusmod tempor incididunt ut labore.
          </p>
          <button
            type="button"
            className="bg-hover_colr text-white p-4 text-lg mt-8 hover:bg-white hover:text-black hover:border-2 hover:border-black"
          >
            Make An Enquiry
          </button>
        </div>
      </div>
      <div>
        <img src={Building} alt="" className="w-[500px] text-right" />
      </div>
    </div>
  );
};

export default MainSection;
