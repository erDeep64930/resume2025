"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaQuoteLeft } from "react-icons/fa";
import { testimonialInfo } from "@/app/constant/testimonialInfo";
import Title from "@/app/components/Title";
import Heading from "@/app/components/Heading";

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialInfo.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonialInfo.length) % testimonialInfo.length
    );
  };
  return (
    <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4 mt-14  border-t border-pri">
      <Title title="Words.." />

      <div className="  py-36 relative z-10">
        <div className="-z-10  dark:border  w-8/12 absolute bottom-0 right-0 top-16 rounded-tl-3xl rounded-br-3xl"></div>
        <div className="w-8/12 lg:w-10/12 xl:w-8/12 mx-auto">
          <div className="mb-10 md:mb-20">
            <p className="text-4xl md:text-4xl font-bold  text-gray-400  w-full lg:w-5/12 font-rye tracking-widest ">
              What Our Customers Are Saying
            </p>
            
          </div>
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
              <div className="w-full md:w-10/12 h-72 relative mb-6">
                <div className="dot-pattern opacity-30 h-48 w-32 absolute -top-24 -left-16 -z-10"></div>
                <div className="dot-pattern opacity-30 h-48 w-32 absolute -bottom-24 -right-16 -z-10"></div>
                <div className="absolute z-10 -top-6 -right-6">
                  <div className="bg-indigo-500 h-16 w-16 rounded-full flex items-center justify-center">
                    <span className=" text-white text-5xl">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <Image
                  width={350}
                  height={350}
                  src="/dpk.JPG"
                  alt=""
                  className="w-full h-full object-cover rounded-md shadow-md"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center h-10 w-10  text-white shadow-md hover:shadow-xl rounded-full p-2">
                  <span className=" align-center text-2xl text-gray-400 hover:scale-75 transition-all duration-200">
                    <FaArrowLeft onClick={handlePrev} />
                  </span>
                </button>
                <button className="flex items-center justify-center h-10 w-10  text-white shadow-md hover:shadow-xl rounded-full p-2">
                  <span className=" align-center text-2xl text-gray-400 hover:scale-75 transition-all duration-200">
                    {" "}
                    <FaArrowRight onClick={handleNext} />
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 text-gray-600 dark:text-gray-100">
              <p className="text-xl font-bold capitalize mb-3 font-meri text-gradient">
                help us improve my productivity.
              </p>
              <p className="mb-6">{testimonialInfo[currentIndex].text}"</p>
              <div>
                <p className="font-bold text-2xl text-gray-500 font-rye ">
                  {" "}
                  {testimonialInfo[currentIndex].name}
                </p>
                <p>Lead Marketing Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
