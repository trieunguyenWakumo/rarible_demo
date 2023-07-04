"use client";
import React, { useCallback, useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
const ContainerSwiper = (slides: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;

    const newIndex = isFirstSlide ? slides.slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex]);
  return (
    <div className="flex flex-wrap w-full  justify-center group">
      <div className="flex  max-w-md max-h-96">
        <Image
          src={`/${slides.slides[currentIndex].url}`}
          alt="banner"
          width={420}
          height={420}
          className="rounded-lg max-w-md max-h-96 mr-[60px] bg-cover duration-500 "
        />
      </div>
      <div className="flex w-[50%] flex-col  justify-center items-center">
        <div>
          <h1 className=" mb-6 font-bold leading-[46px] text-4xl">
            {slides.slides[currentIndex].title}
          </h1>
        </div>
        <div className="mb-6">
          <span> {slides.slides[currentIndex].content}</span>
        </div>
        <div>
          <button className="bg-black rounded-xl border-1  pr-[22px] pl-[22px] pt-[15px] pb-[15px] text-white">
            <p className="h-[24px]  font-medium">
              {slides.slides[currentIndex].btn}
            </p>
          </button>
        </div>
      </div>

      <div className="flex mt-8 flex-wrap justify-center">
        <div className={` ${currentIndex == 0 ? "bg-gray-700" : "bg-gray-400"}   w-20  h-[2px]  `}></div>

        <div className={`${currentIndex == 1 ? "bg-gray-700" : "bg-gray-400"} w-20  h-[2px]  `}></div>

        <div className={`${currentIndex == 2 ? "bg-gray-700" : "bg-gray-400"} w-20  h-[2px]  `}></div>

        <div className={`${currentIndex == 3 ? "bg-gray-700" : "bg-gray-400"} w-20  h-[2px]  `}></div>
        <div className={`${currentIndex == 4 ? "bg-gray-700" : "bg-gray-400"} w-20  h-[2px]  `}></div>
      </div>
      <div className="group-hover:block absolute top-[50%] -translate-x-0  translate-y-[50%] left-5 text-sm rounded-full p-2 bg-white text-black cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={16} />
      </div>
      <div className="group-hover:block absolute top-[50%] -translate-x-0  translate-y-[50%] right-5 text-sm rounded-full p-2 bg-white text-black cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={16} />
      </div>
    </div>
  );
};

export default ContainerSwiper;
