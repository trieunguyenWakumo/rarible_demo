import React from "react";
import ContainerSwiper from "./containerSwiper";
const SwiperSlider = () => {
  const data = [
    {
      url: "nft1.jpeg",
      title: "Mocaverse Marketplace",
      content:
        "A safe haven for Mocas to trade. Powered by Rarible.",
      btn: "Visit Marketplace",
    },
    {
      url: "nft2.jpeg",
      title: "Why we are bullish on NFTs more than ever before",
      content:
        "A customizable, on-brand marketplace for your community to trade all of your collections. ",
      btn: "Get Bullish",
    },
    {
      url: "nft3.jpeg",
      title: "Free No-code Marketplace for Your Collection",
      content:
        "The bear market is deepening, floor prices are falling, and the number of trading wallets is lingering at an all time low.",
      btn: "Create Marketplace",
    },
    {
      url: "nft4.jpeg",
      title: "Build NFT Apps Faster with Rarible Protocol",
      content:
        "Build liquid NFT experiences at warp speed with our open-source NFT protocol with free Indexer, API and SDK.  ",
      btn: "Start building",
    },
    {
      url: "nft5.jpeg",
      title: "Why we are bullish on NFTs more than ever before",
      content:
        "The bear market is deepening, floor prices are falling, and the number of trading wallets is lingering at an all time low.",
      btn: "Get Bullish",
    },
  ];
  return (
    <div
      id="default-carousel"
      className="w-full bg-[#522a731a] mb-12 rounded-2xl  pr-[64px] pl-[64px] pt-[32px] pb-[32px]  "
      data-carousel="slide"
    >
      <div className="">
        <div className=" relative  z-0 pr-[64px] pl-[64px] pt-[32px] pb-[32px]  w-full ">
          <div className="">
            <ContainerSwiper slides={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwiperSlider;
