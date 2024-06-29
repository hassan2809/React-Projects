import React, { useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      {isVisible && (
        <button
          className="z-50 fixed bottom-4 bg-white right-8 mb-5 p-3 rounded-full hover:bg-hover_colr hover:text-white shadow-black shadow-2xl transition-colors duration-300"
          onClick={scrollToTop}
        >
          <HiOutlineArrowUp className="text-2xl" />
        </button>
      )}
    </>
  );
};

export default Scroll;
