import React from "react";
import ContainerSwiper from "./containerSwiper";
import NFTDATA from "./../../data/NFTDATA.json"
const SwiperSlider = () => {

  return (
    <div
      id="default-carousel"
      className="w-full bg-[#522a731a] mb-12 rounded-2xl  pr-[64px] pl-[64px] pt-[32px] pb-[32px]  "
      data-carousel="slide"
    >
      <div className="">
        <div className=" relative  z-0 pr-[64px] pl-[64px] pt-[32px] pb-[32px]  w-full ">
          <div className="">
            <ContainerSwiper slides={NFTDATA.data_swiper}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;
