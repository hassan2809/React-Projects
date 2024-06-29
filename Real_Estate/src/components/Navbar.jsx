import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { IoIosSearch } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-center justify-between h-28 px-4">
      <div>
        <img src={Logo} alt="Logo" className="h-12" />
      </div>
      <div className="hidden md:flex space-x-8 cursor-pointer text-xl">
        <div className="hover:text-hover_colr">
          <Link to="/">Home</Link>
        </div>
        <div className="hover:text-hover_colr">
          <ScrollLink to="about" smooth={true} duration={500}>
            About
          </ScrollLink>
        </div>
        <div className="hover:text-hover_colr">Shop</div>
        <div className="hover:text-hover_colr">News</div>
        <div className="hover:text-hover_colr">Pages</div>
        <div className="hover:text-hover_colr">Contact</div>
      </div>
      <div className="hidden md:flex space-x-4 font-bold text-2xl">
        <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
          <IoIosSearch />
        </div>
        <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
          <CiUser />
        </div>
        <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
          <CiShoppingCart />
          <sup className="text-sm">2</sup>
        </div>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:hidden flex-col items-center absolute top-28 left-0 w-full bg-white shadow-lg p-4`}
      >
        <ul className="space-y-4 cursor-pointer text-xl">
          <li className="hover:text-hover_colr">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-hover_colr">
            <ScrollLink to="about" smooth={true} duration={500}>
              About
            </ScrollLink>
          </li>
          <li className="hover:text-hover_colr">Shop</li>
          <li className="hover:text-hover_colr">News</li>
          <li className="hover:text-hover_colr">Pages</li>
          <li className="hover:text-hover_colr">Contact</li>
        </ul>
        <div className="flex flex-col space-y-4 font-bold text-2xl mt-4">
          <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
            <IoIosSearch />
          </div>
          <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
            <CiUser />
          </div>
          <div className="flex items-center justify-center shadow-xl p-2 cursor-pointer hover:bg-hover_colr hover:text-white">
            <CiShoppingCart />
            <sup className="text-sm">2</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
