import React from "react";
import Logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex items-center justify-around h-28 px-4">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <ul className="flex space-x-8 cursor-pointer text-xl">
          <li className="hover:text-hover_colr">Home</li>
          <li className="hover:text-hover_colr">About</li>
          <li className="hover:text-hover_colr">Shop</li>
          <li className="hover:text-hover_colr">News</li>
          <li className="hover:text-hover_colr">Pages</li>
          <li className="hover:text-hover_colr">Contact</li>
        </ul>
      </div>
      <div className="flex space-x-4 font-bold text-2xl">
        <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
          <IoIosSearch />
        </div>
        <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
          <CiUser />
        </div>
        <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
          <CiShoppingCart /><sup className="text-sm">2</sup>
        </div>
      </div>
    </div>
  );
};

export default Navbar;