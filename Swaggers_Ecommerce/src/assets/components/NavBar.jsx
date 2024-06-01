import React from "react";
import logo from "../images/logo.png";
import { CiSearch } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const NavBar = () => {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Men Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Women Wear",
      link: "/#",
    },
  ];

  return (
    <div className="flex py-2 justify-start items-center bg-white dark:bg-gray-950 dark:text-white">
      <div>
        <a href="#" className="font-bold text-3xl md:text-2xl flex gap-2">
          <img src={logo} alt="" className="w-10" />
          Swaggers
        </a>
      </div>
      <div>
        <ul className="flex gap-4 ml-10">
          {Menu.map((item) => (
            <li key={item.id}>
              <a
                href={item.link}
                className="px-4 hover:text-primary hover:font-bold text-lg"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center items-center relative right-[-190px] gap-2">
        <div className="hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-[200px] rounded-full border border-gray-300 pl-4 py-1 cursor-pointer placeholder:text-black placeholder:text-lg  dark:bg-gray-800 placeholder:dark:text-white"
            />
            <CiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-900 text-2xl cursor-pointer dark:text-white" />
          </div>
        </div>
        <div className="ml-1">
          <button className="bg-primary transition-all duration-200 text-white dark:text-black py-1 px-4 rounded-full">
            <FaCartShopping className="text-xl cursor-pointer" />
          </button>
        </div>
        <DarkMode />
      </div>
    </div>
  );
};
export default NavBar;
