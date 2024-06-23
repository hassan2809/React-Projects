import React from "react";
import Map from "../assets/10.png";

const Apartments = () => {
  return (
    <div className="text-center mb-16">
      <div className="inline px-4 py-1 bg-[#f5dfdc] text-[#ff5a3c] border border-white rounded-3xl">
      Apartment Sketch
      </div>
      <h1 className="text-5xl font-bold my-4">Apartments Plan</h1>
      <div className="flex justify-center">
        <div className="mt-10 p-16 shadow-lg bg-hover_colr text-white w-[600px] flex flex-col">
          <div>
            <h2 className="text-3xl font-bold">The Studio</h2>
            <p className="my-8">
              Enimad minim veniam quis nostrud exercitation ullamco laboris.
              Lorem ipsum dolor sit amet cons aetetur adipisicing elit sedo
              eiusmod tempor.Incididunt labore et dolore magna aliqua. sed ayd
              minim veniam.
            </p>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex justify-between items-center">
                <label className="font-semibold">Total Area</label>
                <span className="relative  mx-1 flex-grow border-b border-dotted border-white"></span>
                <span>2800 Sq. Ft</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <label className="font-semibold">Bedroom</label>{" "}
                <span className="relative  mx-1 flex-grow border-b border-dotted border-white"></span>
                <span>150 Sq. Ft</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <label className="font-semibold">Bathroom</label>{" "}
                <span className="relative  mx-1 flex-grow border-b border-dotted border-white"></span>
                <span>45 Sq. Ft</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <label className="font-semibold">Balcony/Pets</label>{" "}
                <span className="relative  mx-1 flex-grow border-b border-dotted border-white"></span>
                <span>Allowed</span>
              </li>
              <li className="flex justify-between items-center pb-2">
                <label className="font-semibold">Lounge</label>{" "}
                <span className="relative  mx-1 flex-grow border-b border-dotted border-white"></span>
                <span>650 Sq. Ft</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="ml-12 mt-16 w-[500px] flex items-center">
          <img src={Map} alt="Map" />
        </div>
      </div>
    </div>
  );
};

export default Apartments;
