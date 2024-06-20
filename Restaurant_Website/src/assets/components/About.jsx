import React from "react";
import Thumb1 from "../images/thumb1.png";
import Thumb2 from "../images/thumb2.png";
import Thumb3 from "../images/thumb3.png";
import Sign from "../images/signature.png";
const About = () => {
  return (
    <div className="mb-12">
      <div className="flex flex-col justify-center items-center mt-12 mb-10">
        <h1 className="text-4xl font-bold">THE RESTAURANT</h1>
        <h3 className="text-xl my-4">
          A little about us and a breif history of how we started.
        </h3>
        <p className="bg-orange-300 h-[3px] w-[113px]"></p>
      </div>
      <div className="flex justify-evenly">
        <div>
          <img src={Thumb1} alt="" />
          <div className="flex h-[114px] mt-[6px]">
            <img src={Thumb2} alt="" className="mr-[8px]" />
            <img src={Thumb3} alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[650px] relative top-[-7px]">
          <p className="text-xl">
            Cras ut viverra eros. Phasellus sollicitudin sapien id luctus
            tempor. Sed hend rerit inter dum sagittis. Donec nunc lacus, dapibus
            nec interdum eget, ultrices eget justo. Nam purus lacus, efficitur
            eget laoreet sed, finibus nec neque. Cras eget enim in diam dapibus
            sagittis. In massa est, dignissim in libero ac, fringilla ornare mi.
            Etiam interdum ligula purus.
          </p>
          <p className="text-xl my-4">
            Ultrices eget justo. Nam purus lacus, efficitur eget laoreet sed,
            finibus nec neque. Cras eget enim in diam dapibus sagittis. In massa
            est, dignissim in libero ac, fringilla ornare.
          </p>
          <div>
            <img src={Sign} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
