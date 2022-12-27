import React from "react";

const Student = () => {
  return (
    <div className="container mx-auto ">
      <p className="text-gray-500 text-2xl font-medium uppercase">
        Top Studying
      </p>
      <p className="text-gray-800 text-4xl font-medium capitalize">
        Our students say
      </p>
      <div className="flex items-center justify-between ">
        <img src="/assets/student.svg" alt="" />
        <div className="flex flex-col gap-5 items-start">
          <p className="text-4xl font-semibold">Martin Watson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">English teacher</p>
          </div>
          <p className="text-3xl">
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
