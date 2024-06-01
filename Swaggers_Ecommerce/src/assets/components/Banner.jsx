import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import BannerImage from "../images/women2.jpg";
const Banner = () => {
  return (
    <div className="flex justify-around py-20 dark:bg-gray-950 dark:text-white">
      <div>
        <img src={BannerImage} className="w-[400px] rounded-2xl" />
      </div>
      <div className="w-[500px] ml-[-250px]">
        <h1 className="text-4xl font-bold">Winter Sale upto 50% Off</h1>
        <p className="text-sm text-gray-400 mt-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque
          reiciendis inventore iste ratione ex alias quis magni at optio
        </p>
        <div className="flex items-center my-5">
          <GrSecure className="bg-purple-200 w-10 h-10 rounded-full p-3 mr-5 dark:text-black" />
          <p>Quality Products</p>
        </div>
        <div className="flex items-center my-5">
          <IoFastFood className="bg-orange-100 w-10 h-10 rounded-full p-3 mr-5 dark:text-black" />
          <p>Fast Delivery</p>
        </div>
        <div className="flex items-center my-5">
          <GiFoodTruck className="bg-green-100 w-10 h-10 rounded-full p-3 mr-5 dark:text-black" />
          <p>Easy Payment method</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
