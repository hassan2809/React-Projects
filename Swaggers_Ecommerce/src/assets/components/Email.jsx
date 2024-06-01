import React from "react";

const Email = () => {
  return (
    <div className="dark:bg-gray-950 dark:text-white">
      <div className="flex flex-col justify-center items-center bg-primary dark:bg-primary/20 h-[150px]">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Get Notified About New Products
        </h1>
        <input
          type="text"
          placeholder="Enter Your Email"
          className="border-1 border-black w-[350px] py-3 placeholder:text-lg pl-2"
        />
      </div>
    </div>
  );
};

export default Email;
