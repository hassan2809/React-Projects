import React from "react";

import { ImQuotesLeft } from "react-icons/im";
import Person1 from "../assets/1.jpg";
import Person2 from "../assets/2.jpg";
import Person3 from "../assets/3.jpg";

const Testimonial = () => {
  return (
    <div className="py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="inline text-secondary px-4 py-1 bg-[#f5dfdc] text-[#ff5a3c] border border-white rounded-3xl">
            Our Testimonial
          </h6>
          <h1 className="text-5xl font-bold mt-6 mb-8">Clients Feedback</h1>
        </div>
        <div className="flex flex-wrap justify-center space-x-8">
          <div className="max-w-xs p-6 text-center shadow-lg hover:border-b-4 hover:border-hover_colr cursor-pointer hover:">
            <div className="mb-4">
              <p className="text-left pt-2 text-xl">
                <ImQuotesLeft className="inline text-xl relative -top-1 mr-1" />
                Precious ipsum dolor sit amet consectetur adipisicing elit, sed
                dos mod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad min veniam, quis nostrud Precious ips um dolor sit amet,
                consecte
              </p>
            </div>
            <div className="flex mt-7">
              <img src={Person1} alt="" className="w-16 rounded-full mr-6" />
              <div>
                <h4 className="font-bold">Jacob William</h4>
                <p>Selling Agents</p>
              </div>
            </div>
          </div>
          <div className="max-w-xs p-6 text-center shadow-lg hover:border-b-4 hover:border-hover_colr cursor-pointer hover:">
            <div className="mb-4">
              <p className="text-left pt-2 text-xl">
                <ImQuotesLeft className="inline text-xl relative -top-1 mr-1" />
                Precious ipsum dolor sit amet consectetur adipisicing elit, sed
                dos mod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad min veniam, quis nostrud Precious ips um dolor sit amet,
                consecte
              </p>
            </div>
            <div className="flex mt-7">
              <img src={Person2} alt="" className="w-16 rounded-full mr-6" />
              <div>
                <h4 className="font-bold">Kelian Anderson</h4>
                <p>Selling Agents</p>
              </div>
            </div>
          </div>
          <div className="max-w-xs p-6 text-center shadow-lg hover:border-b-4 hover:border-hover_colr cursor-pointer hover:">
            <div className="mb-4">
              <p className="text-left pt-2 text-xl">
                <ImQuotesLeft className="inline text-xl relative -top-1 mr-1" />
                Precious ipsum dolor sit amet consectetur adipisicing elit, sed
                dos mod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad min veniam, quis nostrud Precious ips um dolor sit amet,
                consecte
              </p>
            </div>
            <div className="flex mt-7">
              <img src={Person3} alt="" className="w-16 rounded-full mr-6" />
              <div>
                <h4 className="font-bold">Adam Joseph</h4>
                <p>Selling Agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
