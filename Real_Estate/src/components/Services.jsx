import React from "react";
import { FaArrowRight } from "react-icons/fa";
import BuyIcon from "../assets/21.png"; // Ensure to use correct path to the icons
import RentIcon from "../assets/22.png";
import SellIcon from "../assets/23.png";

const Services = () => {
  return (
    <div className="py-28">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h6 className="inline text-secondary px-4 py-1 bg-[#f5dfdc] text-[#ff5a3c] border border-white rounded-3xl">
            Our Services
          </h6>
          <h1 className="text-5xl font-bold mt-6 mb-8">Our Main Focus</h1>
        </div>
        <div className="flex flex-wrap lg:flex-row justify-center space-y-16 lg:space-y-0 lg:justify-center lg:space-x-8">
          <div className="max-w-xs p-6 bg-white text-center shadow-lg hover:border-b-4 hover:border-hover_colr">
            <div className="mb-4">
              <img src={BuyIcon} alt="Buy a home" className="mx-auto" />
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                <a href="#/service-details">Buy a home</a>
              </h3>
              <p className="text-sm text-left pt-2">
                Over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
            </div>
            <a
              className="text-hover_colr flex items-center justify-center mt-8 mb-4"
              href="#/service-details"
            >
              Find A Home <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="max-w-xs p-6 bg-white text-center shadow-lg hover:border-b-4 hover:border-hover_colr">
            <div className="mb-4">
              <img src={RentIcon} alt="Rent a home" className="mx-auto" />
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                <a href="#/service-details">Rent a home</a>
              </h3>
              <p className="text-sm text-left pt-2">
                Over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
            </div>
            <a
              className="text-hover_colr flex items-center justify-center mt-8 mb-4"
              href="#/service-details"
            >
              Find A Home <FaArrowRight className="ml-2" />
            </a>
          </div>

          <div className="max-w-xs p-6 bg-white text-center shadow-lg hover:border-b-4 hover:border-hover_colr">
            <div className="mb-4">
              <img src={SellIcon} alt="Sell a home" className="mx-auto" />
            </div>
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">
                <a href="#/service-details">Sell a home</a>
              </h3>
              <p className="text-sm text-left pt-2">
                Over 1 million+ homes for sale available on the website, we can
                match you with a house you will want to call home.
              </p>
            </div>
            <a
              className="text-hover_colr flex items-center justify-center mt-8 mb-4"
              href="#/service-details"
            >
              Find A Home <FaArrowRight className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
