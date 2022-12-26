import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="container mx-auto my-10 ">
      <div className="bg-[#fff5f1] px-16 py-10 rounded-3xl">
        <Navbar />
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-10">
            <p className="text-6xl font-medium">
              A Unique approach <br /> to learning foreign <br /> languages
              online
            </p>
            <p className="text-lg text-gray-500">
              Learn at your own pace, with lifetime <br /> access on mobile and desktop
            </p>
            <button className="btn bg-[#524fd5] text-white rounded-full border-none w-44">Get Started</button>
          </div>
          <img src="/assets/hero.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
