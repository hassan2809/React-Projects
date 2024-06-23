import React from "react";
import AboutImg from "../assets/about.png";
import { RiHomeHeartLine } from "react-icons/ri";
import { PiMountains } from "react-icons/pi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

const About = () => {
  return (
    <div className="flex justify-evenly items-center mt-14 mb-8">
      <div>
        <img src={AboutImg} alt="" className="w-[450px]" />
      </div>
      <div className="flex flex-col">
        <button
          type="button"
          className="px-4 py-1 bg-[#f5dfdc] text-[#ff5a3c] border border-white rounded-3xl w-28"
        >
          About Us
        </button>
        <p className="text-5xl font-bold mt-4 mb-4">
          The Leading Real Estate <br /> Rental Marketplace
          <span className="text-hover_colr">.</span>
        </p>
        <p className="text-md mb-4">
          Over 39,000 people work for us in more than 70 countries all over the{" "}
          <br />
          This breadth of global coverage, combined with specialist services
        </p>
        <div className="flex flex-col">
          <ul>
            <div className="flex flex-row">
              <li className="flex items-center">
                <div className="bg-about_bg p-2 rounded-full text-hover_colr mr-4">
                  <RiHomeHeartLine className="text-2xl" />
                </div>
                <p className="text-lg">Smart Home Design</p>
              </li>
              <li className="flex items-center ml-20">
                <div className="bg-about_bg p-2 rounded-full text-hover_colr mr-4">
                  <PiMountains className="text-2xl" />
                </div>
                <p>Beautiful Scene Around</p>
              </li>
            </div>
            <div className="flex flex-row mt-4 mb-5">
              <li className="flex items-center">
                <div className="bg-about_bg p-2 rounded-full text-hover_colr mr-4">
                  <FaHandHoldingHeart className="text-2xl" />
                </div>
                <p>Exceptional Lifestyle</p>
              </li>
              <li className="flex items-center ml-24">
                <div className="bg-about_bg p-2 rounded-full text-hover_colr mr-4">
                  <GrSecure className="text-2xl" />
                </div>
                <p>Complete 24/7 Security</p>
              </li>
            </div>
          </ul>
        </div>
        <div className="bg-about_bg border-l-4 border-hover_colr pl-6 py-6">
          "Enimad minim veniam quis nostrud exercitation <br /> llamco laboris.
          Lorem ipsum dolor sit amet"
        </div>
        <div>
          <button
            type="button"
            className="bg-hover_colr text-white p-4 text-lg mt-8 hover:bg-white hover:text-black hover:border-2 hover:border-black uppercase "
          >
            Our Services
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
