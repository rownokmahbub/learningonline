import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-base lg:text-xl font-medium uppercase">
        Top Studying
      </p>
      <p className="text-gray-800 text-3xl lg:text-5xl font-medium capitalize">
        Our students say
      </p>
      <div className="flex flex-col lg:flex-row justify-center  lg:justify-between items-center gap-5 py-10 lg:py-20">
        <img src="/assets/student.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">English teacher</p>
          </div>
          <p className=" text-base sm:text-lg md:text-2xl lg:text-3xl">
            There is no way I could have made the same <br /> progress learning Spanish
            without using Lingua. <br /> The best part is now learning Spanish has <br />
            become one of my biggest hobbies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Student;
