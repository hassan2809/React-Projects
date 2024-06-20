import React from "react";
import Caraousel from "../components/Caraousel";

const Special = () => {
  return (
    <div>
      <div className="background-imgS relative">
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <div className="text-center">
            <p className="text-4xl font-bold">TODAY'S SPECIALS</p>
            <p className="text-2xl mt-2">A little about us and a brief history of how we started.</p>
            <p className="bg-orange-300 h-[3px] w-[113px] mx-auto mt-4 mb-6"></p>
          </div>
          <div className="bg-white text-black">
            <Caraousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Special;