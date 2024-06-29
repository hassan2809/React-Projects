import React from "react";
import { BsFillBuildingsFill } from "react-icons/bs";
import { GiCargoCrane } from "react-icons/gi";
import { RiSofaLine } from "react-icons/ri";
import { FaLandmark } from "react-icons/fa6";

const Counterup = () => {
  return (
    <div className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 flex justify-center">
            <div className="text-center text-black">
              <div className="text-4xl md:text-6xl mb-4 md:mb-8 text-hover_colr">
                <FaLandmark className="mx-auto" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="counter">560</span>
                <span className="ml-1">+</span>
              </h1>
              <h6 className="mt-2">Total Area Sq</h6>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 flex justify-center">
            <div className="text-center text-black">
              <div className="text-4xl md:text-6xl mb-4 md:mb-8 text-hover_colr">
                <BsFillBuildingsFill className="mx-auto" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="counter">197</span>
                <span className="ml-1">K</span>
                <span className="ml-1">+</span>
              </h1>
              <h6 className="mt-2">Apartments Sold</h6>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 flex justify-center">
            <div className="text-center text-black">
              <div className="text-4xl md:text-6xl mb-4 md:mb-8 text-hover_colr">
                <GiCargoCrane className="mx-auto" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="counter">268</span>
                <span className="ml-1">+</span>
              </h1>
              <h6 className="mt-2">Total Constructions</h6>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 flex justify-center">
            <div className="text-center text-black">
              <div className="text-4xl md:text-6xl mb-4 md:mb-8 text-hover_colr">
                <RiSofaLine className="mx-auto" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold">
                <span className="counter">340</span>
                <span className="ml-1">+</span>
              </h1>
              <h6 className="mt-2">Apartio Rooms</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counterup;
