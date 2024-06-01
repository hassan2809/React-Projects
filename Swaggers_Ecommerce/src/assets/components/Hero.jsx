import React, { useState, useEffect } from "react";
import Image1 from "../images/sale.png";
import Image2 from "../images/shopping.png";
import Image3 from "../images/women.png";

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === ImageList.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [ImageList.length]);

  const data = ImageList[currentIndex];

  return (
    <div className="relative overflow-hidden min-h-[550px] bg-gray-100 dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45"></div>
      <div className="flex flex-col sm:flex-row items-center p-20">
        <div className="flex flex-col justify-center gap-4 pt-12 text-center sm:text-left z-10 w-[630px]">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            {data.title}
          </h1>
          <p className="text-sm">{data.description}</p>
          <div>
            <button className="bg-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
              Order Now
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative z-10 ml-[160px]">
            <img
              src={data.img}
              alt=""
              className="w-[400px] h-[400px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
