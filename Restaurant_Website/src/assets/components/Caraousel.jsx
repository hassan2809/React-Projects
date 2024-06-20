import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Thumb4 from "../images/thumb4.png";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      img: Thumb4,
      title: "1: Pancake with Caramel",
      description:
        "If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's not thick, but very tasty.",
      details:
        "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      img: Thumb4,
      title: "2: Pancake with Chocolate",
      description:
        "If you are a fan of chocolate cake, then you'll love our Pancake with chocolate icecream. It's not thick, but very tasty.",
      details:
        "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
    {
      img: Thumb4,
      title: "3: Pancake with Strawberries",
      description:
        "If you are a fan of strawberry cake, then you'll love our Pancake with strawberry icecream. It's not thick, but very tasty.",
      details:
        "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [items.length]);

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative w-[800px] m-4">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div className="min-w-full text-black flex" key={index}>
              <div className="overflow-hidden mr-4">
                <img
                  src={item.img}
                  alt={item.title}
                  className="object-cover w-[500px] h-[345px]"
                />
              </div>
              <div className="bg-opacity-75 w-[500px]">
                <h1 className="text-2xl font-bold">{item.title}</h1>
                <p className="">{item.description}</p>
                <p className="bg-orange-300 h-[3px] w-[113px] my-2 "></p>
                <p>{item.details}</p>
                <div className="flex space-x-2 mt-3">
                  <button
                    type="button"
                    className="capitalize bg-orange-300 p-3 text-xl hover:bg-orange-400"
                  >
                    Order now
                  </button>
                  <button
                    type="button"
                    className="capitalize bg-orange-300 p-3 text-xl hover:bg-orange-400"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 p-2 rounded-full text-white text-2xl"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 p-2 rounded-full text-white text-2xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;

// import React, { useState, useEffect, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import Thumb4 from "../images/thumb4.png";

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const items = [
//     {
//       img: Thumb4,
//       title: "3: Pancake with Strawberries",
//       description:
//         "If you are a fan of strawberry cake, then you'll love our Pancake with strawberry icecream. It's not thick, but very tasty.",
//       details:
//         "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//     {
//       img: Thumb4,
//       title: "1: Pancake with Caramel",
//       description:
//         "If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's not thick, but very tasty.",
//       details:
//         "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//     {
//       img: Thumb4,
//       title: "2: Pancake with Chocolate",
//       description:
//         "If you are a fan of chocolate cake, then you'll love our Pancake with chocolate icecream. It's not thick, but very tasty.",
//       details:
//         "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//     {
//       img: Thumb4,
//       title: "3: Pancake with Strawberries",
//       description:
//         "If you are a fan of strawberry cake, then you'll love our Pancake with strawberry icecream. It's not thick, but very tasty.",
//       details:
//         "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//     {
//       img: Thumb4,
//       title: "1: Pancake with Caramel",
//       description:
//         "If you are a fan of caramel cake, then you'll love our Pancake with caramel icecream. It's not thick, but very tasty.",
//       details:
//         "Ultrices In massa est, dignissim in libero ac, fringilla ornare mi. Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus sagittis. Accumsan, habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
//     },
//   ];

//   const handlePrev = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex - 1);
//   };

//   const handleNext = () => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleNext();
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     if (!isTransitioning) return;
//     const handleTransitionEnd = () => {
//       setIsTransitioning(false);
//       if (currentIndex === 0) {
//         setCurrentIndex(items.length - 2);
//       } else if (currentIndex === items.length - 1) {
//         setCurrentIndex(1);
//       }
//     };
//     const transitionDuration = currentIndex === 0 || currentIndex === items.length - 1 ? 0 : 300;
//     const transitionStyle = { transitionDuration: `${transitionDuration}ms` };
//     const timer = setTimeout(handleTransitionEnd, transitionDuration);

//     return () => clearTimeout(timer);
//   }, [currentIndex, isTransitioning, items.length]);

//   return (
//     <div className="relative w-[800px] m-4">
//       <div className="overflow-hidden">
//         <div
//           className="flex"
//           style={{ transform: `translateX(-${currentIndex * 100}%)`, transition: isTransitioning ? "transform 0.3s ease" : "none" }}
//         >
//           {items.map((item, index) => (
//             <div className="min-w-full text-black flex" key={index}>
//               <div className="overflow-hidden mr-4">
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="object-cover w-[500px] h-[345px]"
//                 />
//               </div>
//               <div className="bg-opacity-75 w-[500px]">
//                 <h1 className="text-2xl font-bold">{item.title}</h1>
//                 <p className="">{item.description}</p>
//                 <p className="bg-orange-300 h-[3px] w-[113px] my-2 "></p>
//                 <p>{item.details}</p>
//                 <div className="flex space-x-2 mt-3">
//                   <button
//                     type="button"
//                     className="capitalize bg-orange-300 p-3 text-xl"
//                   >
//                     Order now
//                   </button>
//                   <button
//                     type="button"
//                     className="capitalize bg-orange-300 p-3 text-xl"
//                   >
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <button
//         onClick={handlePrev}
//         className="absolute top-1/2 left-[-60px] transform -translate-y-1/2 p-2 rounded-full text-white"
//       >
//         <FaArrowLeft />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute top-1/2 right-[-60px] transform -translate-y-1/2 p-2 rounded-full text-white"
//       >
//         <FaArrowRight />
//       </button>
//     </div>
//   );
// };

// export default Carousel;
