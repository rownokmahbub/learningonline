import React from "react";

const Teacher = () => {
  return (
    <div className="container mx-auto py-20">
      <p className="text-xl font-medium text-gray-500 uppercase">
       Key Person
      </p>
      <p className="text-5xl font-semibold text-gray-500  mt-3">
      Meet our teachers
      </p>
      <div className="grid grid-cols-3 gap-16 py-20">
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t1.svg" alt="v1" />
          <p className="text-2xl font-semibold">Christian Howard</p>
          <div className="flex items-center gap-2">
            <img src="/assets/italy.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          Italian teacher
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t2.svg" alt="v1" />
          <p className="text-2xl font-semibold">Sandra Wilson</p>
          <div className="flex items-center gap-2">
            <img src="/assets/spain.svg" alt="itersfgjds" />
            <p className="text-gray-500">
            Spanish teacher
          </p>
          </div>
       
        </div>
        <div className="flex flex-col gap-5 ">
          <img src="/assets/t3.svg" alt="v1" />
          <p className="text-2xl font-semibold">Jimmy Cooper</p>
          <div className="flex items-center gap-2">
            <img src="/assets/uk.svg" alt="itersfgjds" />
            <p className="text-gray-500">
          English teacher
          </p>
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Teacher;
