import React from "react";
import Logo from "../images/nav-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50">
      <div className="h-20 bg-slate-950 flex justify-around items-center">
        <div className="cursor-pointer">
          <img src={Logo} alt="" />
        </div>
        <div>
          <ul className="text-white flex justify-center items-center text-lg cursor-pointer">
            <li className="mx-10 hover:text-orange-300">Home</li>
            <li className="mr-10 hover:text-orange-300">Menu</li>
            <li className="mr-10 hover:text-orange-300">Reservation</li>
            <li className="mr-10 hover:text-orange-300">Pages</li>
            <li className="mr-10 hover:text-orange-300">Recipe</li>
            <li className="mr-10 hover:text-orange-300">Shop</li>
            <li className="mr-10 hover:text-orange-300">Contact</li>
            <li className="mr-10 hover:text-orange-300 flex justify-center items-center">
              <FaCartShopping className="mr-1" />
              <TbCircleNumber3Filled className="text-orange-300" />
              <IoMdArrowDropdown />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;