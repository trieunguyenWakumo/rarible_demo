import React, { useCallback, useState } from "react";
import Image from "next/image";
import { BsArrowDownShort,BsArrowUpShort } from "react-icons/bs";
import Link from "next/link";
const ListCollections = () => {
  const [isButtonDown, setButtonDown] = useState(false);
  const [isButtonUp, setButtonUp] = useState(false);
  const collectionData = [
    {
      id: 1,
      collection: "Collection",
      money: "23.1",
      percent: "-19.5",
      volume: "661.4",
      volumeChange: "+90",
      items: "10000",
      owner: "5700",
      sticker: true,
      image:"/nft1.jpeg"
    },
    {
      id: 2,
      collection: "Collection",
      money: "92.4",
      percent: "20",
      volume: "502.23",
      volumeChange: "+200",
      items: "19647",
      owner: "11600",
      sticker: true,
      image:"/nft2.jpeg"
    },
    {
      id: 3,
      collection: "Collection",
      money: "30",
      percent: "112",
      volume: "1.442 ",
      volumeChange: "-45",
      items: "11700",
      owner: "4500",
      sticker: false,
      image:"/nft3.jpeg"
    },
    {
      id: 4,
      collection: "Collection",
      money: "23.1",
      percent: "-19.5",
      volume: "661.4",
      volumeChange: "+90",
      items: "10000",
      owner: "5700",
      sticker: true,
      image:"/nft4.jpeg"
    },
    {
      id: 5,
      collection: "Collection",
      money: "92.4",
      percent: "20",
      volume: "502.23",
      volumeChange: "+200",
      items: "19647",
      owner: "11600",
      sticker: true,
      image:"/nft5.jpeg"
    },
    {
      id: 6,
      collection: "Collection",
      money: "30",
      percent: "112",
      volume: "1.442 ",
      volumeChange: "-45",
      items: "11700",
      owner: "4500",
      sticker: false,
      image:"/nft1.jpeg"
    },
    {
      id: 7,
      collection: "Collection",
      money: "23.1",
      percent: "-19.5",
      volume: "661.4",
      volumeChange: "+90",
      items: "10000",
      owner: "5700",
      sticker: true,
      image:"/nft4.jpeg"
    },
    {
      id: 8,
      collection: "Collection",
      money: "92.4",
      percent: "20",
      volume: "502.23",
      volumeChange: "+200",
      items: "19647",
      owner: "11600",
      sticker: true,
      image:"/nft2.jpeg"
    },
    {
      id: 9,
      collection: "Collection",
      money: "30",
      percent: "112",
      volume: "1.442 ",
      volumeChange: "-45",
      items: "11700",
      owner: "4500",
      sticker: false,
      image:"/nft3.jpeg"
    },
  ];
  const changeButtonCollection = useCallback(() => {

  if(isButtonDown == false && isButtonUp == false  ){
    setButtonDown(true)
  }else if(isButtonDown == true && isButtonUp == false ){
    setButtonUp(true)
    setButtonDown(false)
  }else if(isButtonDown == false && isButtonUp == true ){
    setButtonUp(false)
    setButtonDown(false)
  }
  },[isButtonDown,isButtonUp]);
  const colorButtonTitle = isButtonDown || isButtonUp ? "bg-gray-100 text-black p-2 " : "p-2";
  const ComponentListCollections = () => {
  const checkPercentValue = (value : string) => {
    if (Number(value) > 0  ){
      return <p className="text-green-500  font-bold text-sm leading-6">
        {value}%
      </p>
    }else if (Number(value) < 0  ){
      return <p className="text-red-500  font-bold text-sm leading-6">
      {value}%
    </p>
    }
  }
  const  checkNumber = (value : any) =>{
    const num = Number(value)
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
    return (
      <div className="">
        {collectionData.map((items ) => (
          <Link href={"/marketplace"} key={items.id} className=" rounded-2xl m-1 pr-7 pl-7 flex flex-wrap h-[72px] items-center   text-black font-bold text-sm leading-6 cursor-pointer hover:bg-gray-100">
            <div className="mr-4">{items.id}</div>
            <div className="mr-4 flex flex-wrap basis-1/4 grow items-center  ">
              <div className="relative mr-4 ">
                <Image
                  src={`${items.image}`}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-lg "
                />
                {items.sticker && (
                  <div className=" absolute -bottom-[4px] -right-[8px]">
                    <svg
                      display="block"
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.78117 0.743103C5.29164 -0.247701 6.70826 -0.247701 7.21872 0.743103C7.52545 1.33846 8.21742 1.62509 8.8553 1.42099C9.91685 1.08134 10.9186 2.08304 10.5789 3.1446C10.3748 3.78247 10.6614 4.47445 11.2568 4.78117C12.2476 5.29164 12.2476 6.70826 11.2568 7.21872C10.6614 7.52545 10.3748 8.21742 10.5789 8.8553C10.9186 9.91685 9.91685 10.9186 8.8553 10.5789C8.21742 10.3748 7.52545 10.6614 7.21872 11.2568C6.70826 12.2476 5.29164 12.2476 4.78117 11.2568C4.47445 10.6614 3.78247 10.3748 3.1446 10.5789C2.08304 10.9186 1.08134 9.91685 1.42099 8.8553C1.62509 8.21742 1.33846 7.52545 0.743103 7.21872C-0.247701 6.70826 -0.247701 5.29164 0.743103 4.78117C1.33846 4.47445 1.62509 3.78247 1.42099 3.1446C1.08134 2.08304 2.08304 1.08134 3.1446 1.42099C3.78247 1.62509 4.47445 1.33846 4.78117 0.743103Z"
                        fill="#feda03"
                      ></path>
                      <path
                        d="M8.43961 4.23998C8.64623 4.43922 8.65221 4.76823 8.45297 4.97484L5.40604 8.13462L3.54703 6.20676C3.34779 6.00014 3.35377 5.67113 3.56039 5.47189C3.76701 5.27266 4.09602 5.27864 4.29526 5.48525L5.40604 6.63718L7.70475 4.25334C7.90398 4.04672 8.23299 4.04074 8.43961 4.23998Z"
                        fill="#000000"
                      ></path>
                    </svg>
                  </div>
                )}
              </div>

              <p>{items.collection}</p>
            </div>
            <div className="mr-4 text-end basis-1/8 grow w-[95px] "><p >{items.money} <span className="ml-[2px] text-gray-400">ETH</span></p></div>
            <div className="mr-4 text-end basis-1/8 grow w-[95px]">
            {checkPercentValue(items.percent)}
              
              </div>
            <div className="mr-4 text-end basis-1/8 grow w-[95px]"><p> {items.volume}<span className="ml-[2px] text-gray-400">ETH</span></p></div>
            <div className="mr-4 text-end basis-1/8 grow w-[95px]">
              {checkPercentValue(items.volumeChange)}
            </div>
            <div className="mr-4 text-end basis-1/8 grow w-[95px]">{checkNumber(items.items)}</div>
            <div className=" text-end basis-1/8 grow w-[95px]">{checkNumber(items.owner)}</div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="mb-[24px]">
      {/* filter */}
      <div className="flex p-[6px] m-2 text-gray-400 flex-wrap  items-center pr-7 pl-7">
        <div className="mr-4 font-normal text-xs uppercase">#</div>
        <div className={` mr-4  basis-1/4  grow `}>
          <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase text-start  ${colorButtonTitle} rounded-2xl`}
          >
            <p>Collection</p> {isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
        <div className="flex mr-4 justify-end w-115 grow ">
        <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase  text-end  ${colorButtonTitle} rounded-2xl`}
          >
            <p>floor price</p>{isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
        <div className=" flex mr-4  justify-end w-115  grow ">
        <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase  text-end  ${colorButtonTitle} rounded-2xl`}
          >
            <p> floor change</p>{isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
        <div className="mr-4  flex justify-end   w-115 grow ">
        <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase  text-end  ${colorButtonTitle} rounded-2xl`}
          >
            <p>volume</p>{isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
        <div className="mr-4  flex justify-center  w-115 grow ">
        <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase  text-end  ${colorButtonTitle} rounded-2xl`}
          >
            <p>volume change</p>{isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
        <div className="mr-4  flex justify-end   w-115 grow ">
        <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase  text-end  ${colorButtonTitle} rounded-2xl`}
          >
            <p> items</p>{isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
        <div className="mr-4  flex justify-end  w-115 grow ">
        <button
            onClick={changeButtonCollection}
            className={`flex flex-wrap font-normal text-xs uppercase  text-end  ${colorButtonTitle} rounded-2xl`}
          >
            <p> owners</p>{isButtonDown && <BsArrowDownShort size={16} />} {isButtonUp  &&(<BsArrowUpShort size={16} />)}
          </button>
        </div>
      
      </div>
      {/* list collection */}
      <div className="border-[2px] rounded-2xl">
        <ComponentListCollections />
      </div>
    </div>
  );
};

export default ListCollections;
