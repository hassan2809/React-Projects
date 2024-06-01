import React from "react";
import Img2 from "../images/women2.jpg";
import Img3 from "../images/women3.jpg";
import Img4 from "../images/women4.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img4,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img2,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="py-12 dark:bg-gray-950 dark:text-white">
      <div className="container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p className="text-xl">Top Selling Products for you</p>
          <h1 className="text-3xl font-bold mt-2 mb-4">Products</h1>
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
        <div className="flex justify-around ml-12">
          {ProductsData.map((data) => (
            <div key={data.id} className="space-y-3">
              <img
                src={data.img}
                alt=""
                className="h-[220px] w-[150px] object-cover rounded-md"
              />
              <div>
                <h3 className="font-semibold">{data.title}</h3>
                <p className="text-sm text-gray-600">{data.color}</p>
                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  <span>{data.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
            View All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
