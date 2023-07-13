"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import NFTDATA from "./../data/NFTDATA.json";
import { AiOutlineHeart } from "react-icons/ai";
import { GoShare } from "react-icons/go";
import { BiRefresh } from "react-icons/bi";
import { IoIosAdd } from "react-icons/io";


import DATA_TAB from "../data/DATA_TAB.json";

export default function Page() {
  const chainId = window.ethereum.chainId;
  const [dataNft, setDataNft] = useState<any>([]);
  const searchParams = useSearchParams();
  const id = `${searchParams}`;

  const [isLoading, setLoading] = useState(true);
  const [isTileGroup, setTitleGroup] = useState("1");
  const currentDate = new Date();
  useEffect(() => {
    formatNameNetWork();
  }, [chainId]);


  const detailNFT = dataNft?.filter(function (e: any) {
    const numb = id.replace(/[^0-9]/g, "");
    return e.id == Number(numb);
  });

  const formatNameNetWork = useCallback(() => {
    switch (chainId) {
      case "0x89":
        setDataNft(NFTDATA.data_nft_mumbai as any);
        break;
      case "0x1":
        setDataNft(NFTDATA.data_nft_eth as any);
        break;
      case "0x38":
        setDataNft(NFTDATA.data_nft_bnb as any);
        break;
    }
  }, [chainId]);
  return (
    <div className="flex flex-warp">
      <div className="flex flex-col m-10">
        <div className="mb-5">
          {isLoading ? (
            <Image
              src={`/image/${detailNFT?.[0]?.imageUrl} `}
              alt={"image"}
              width={650}
              height={750}
              className="bg-cover"
            />
          ) : (
            <>
              <div
                role="status"
                className="flex w-[650px] h-[750px] mr-3 items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <div
                  className="w-[650px] h-[750px] text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                ></div>
              </div>
            </>
          )}
        </div>
        <div className="flex flex-wrap mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href={`#Overview`}
                onClick={() => setTitleGroup("1")}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group "
              >
                Overview
              </a>
            </li>
          </ul>

          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href={`#Properties`}
                onClick={() => setTitleGroup("2")}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group "
              >
                Properties
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href={`#Bids`}
                onClick={() => setTitleGroup("3")}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group "
              >
                Bids
              </a>
            </li>
          </ul>
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
            <li className="mr-2">
              <a
                href={`#Activity`}
                onClick={() => setTitleGroup("4")}
                className="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group "
              >
                Activity"
              </a>
            </li>
          </ul>
        </div>

        <div className="w-[700px]">
          {isTileGroup == "1" && (
            <>
              <div>
                <p className="font-bold text-xl">Description</p>
                <div className="text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextDescription}
                </div>
                <div className=" mt-2 mb-2 text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextOnChain}
                </div>
                <div className="text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextPressB}
                </div>
                <div className="text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextPressZ}
                </div>
                <div className="text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextPressSpace}
                </div>
                <div className="mb-2 text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextPressS}
                </div>
                <div className="mb-2 text-gray-400">
                  {DATA_TAB?.Overview?.[0]?.TextEnd}
                </div>
              </div>
            </>
          )}
          {isTileGroup == "2" && <>#Properties</>}
          {isTileGroup == "3" && <>#Bibs</>}
          {isTileGroup == "4" && <>#Activity</>}
        </div>
      </div>
      {isLoading ? (
        <div className=" flex flex-col mr-10  sticky top-[98px] ">
          <div className="flex flex-wrap w-[400px] justify-start items-center">
            <Image
              src={`/image/${detailNFT?.[0]?.imageUrl}`}
              alt="banner"
              width={40}
              height={40}
              className="rounded-full max-w-md max-h-96 m-2 bg-cover border-solid transition duration-300 ease-in-out hover:scale-105"
            />
            <p className="font-bold">{detailNFT?.[0]?.description}</p>
          </div>
          <div className="font-bold mt-4 mb-4 text-2xl">
            {detailNFT?.[0]?.name}
          </div>
          <div className="flex flex-wrap justify-between ">
            <div className="flex flex-wrap  items-center">
              <div className="rounded-full w-10 h-10 m-2  bg-violet-200 border-solid "></div>
              <div>
                <p className="text-gray-300">Creator</p>
                <p className="font-bold  break-words ">
                  {DATA_TAB?.Overview?.[0]?.address}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap  items-center">
              <div className="rounded-full w-10 h-10 m-2 bg-gray-800 border-solid "></div>
              <div>
                <p className="text-gray-300">Current owner</p>
                <p className="font-bold">{detailNFT?.[0]?.description}</p>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-200 ml-5  mr-5 mt-5 "></div>
          <div className=" flex flex-wrap justify-between items-center ">
            <div className=" flex flex-wrap  rounded-lg p-2 m-2">
              <a className="flex mr-2 ml-2  text-gray-400  flex-wrap justify-between items-center">
                <AiOutlineHeart size={20} />
                <p className="ml-2">1</p>
              </a>
              <a className="flex mr-2 ml-2 text-gray-400  flex-wrap justify-between items-center">
                <GoShare size={20} /> <p className="ml-2">Share</p>
              </a>
              <a className="flex mr-2 ml-2 text-gray-400 flex-wrap justify-between items-center">
                <BiRefresh size={20} />
                <p className="ml-2">Refresh</p>
              </a>
            </div>
            <div className="mr-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="border-[1px]   border-gray-200 rounded-xl ">
            <div className="bg-gray-100 rounded-xl p-4 m-4">
              <p className="text-gray-400">Price</p>
              <p className="font-bold test-sm ">
                {detailNFT?.[0]?.amount} <span className="mr-1">ETH</span>
              </p>{" "}
              <p className="text-gray-400">$29</p>
            </div>
            <div className="flex flex-wrap w-full items-center">
              <button className="bg-black w-[280px] mr-4 ml-4 p-3 rounded-2xl">
                <p className="text-white font-semibold">
                  {" "}
                  Buy now for {detailNFT?.[0]?.amount}{" "}
                  <span className="mr-1">ETH</span>
                </p>
              </button>
              <div className="bg-black mr-2 ml-2 p-3  text-white rounded-2xl">
                <IoIosAdd size={30} />
              </div>
            </div>
            <div className="bg-gray-100 m-2 mr-4 ml-4 p-3  font-semibold rounded-2xl">
              <div className="flex flex-warp justify-center w-full">
                Place a bid
              </div>
            </div>
            <div className=" m-4 flex flex-warp justify-center w-full">
              <p className="text-gray-400">
                {" "}
                <span>Sale ends in</span> <span>20d </span>
                <span>{currentDate.getHours()}h</span>{" "}
                <span>{currentDate.getMinutes()}m</span>{" "}
                <span>{currentDate.getSeconds()}s</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex flex-col mr-10  sticky top-[98px] ">
          <div className="flex flex-wrap w-[400px] justify-start items-center">
          <div
                role="status"
                className="flex w-[40px] h-[40px] mr-3 items-center justify-center  bg-gray-300 rounded-full animate-pulse dark:bg-gray-700"
              >
                <div
                  className="w-[40px] h-[40px] text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                 
                >
                     </div>
              </div>
            <p className="w-[100px] h-4 bg-gray-200 rounded-xl pr-4"></p>
          </div>
          <div className=" w-[200px] h-8 bg-gray-200 rounded-xl pr-4 font-bold mt-4 mb-4 text-2xl">
          </div>
          <div className="flex flex-wrap justify-between ">
            <div className="flex flex-wrap  items-center">
              <div className="rounded-full w-10 h-10 m-2  bg-gray-200 border-solid "></div>
              <div>
                <p className="w-[70px] h-4 bg-gray-200 rounded-xl m-2 text-gray-300"></p>
                <p className="w-[150px] h-4 m-1  bg-gray-200 rounded-xl font-bold  break-words ">
          
                </p>
              </div>
            </div>
            <div className="flex flex-wrap  items-center">
              <div className="rounded-full w-10 h-10 m-2 bg-gray-200 border-solid "></div>
              <div>
                <p className=" w-[70px] h-4 m-2 bg-gray-200 rounded-xl text-gray-300"></p>
                <p className="w-[150px] h-4 m-1 bg-gray-200 rounded-xl font-bold"></p>
              </div>
            </div>
          </div>
          <div className="border-b-[1px] border-gray-200 ml-5  mr-5 mt-5 "></div>
          <div className=" flex flex-wrap justify-between items-center ">
            <div className=" flex flex-wrap  rounded-lg p-2 m-2">
              <a className="flex mr-2 ml-2  text-gray-400  flex-wrap justify-between items-center">
                <AiOutlineHeart size={20} />
                <p className="ml-2">1</p>
              </a>
              <a className="flex mr-2 ml-2 text-gray-400  flex-wrap justify-between items-center">
                <GoShare size={20} /> <p className="ml-2">Share</p>
              </a>
              <a className="flex mr-2 ml-2 text-gray-400 flex-wrap justify-between items-center">
                <BiRefresh size={20} />
                <p className="ml-2">Refresh</p>
              </a>
            </div>
            <div className="mr-5">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.5 12C8.5 12.8284 7.82843 13.5 7 13.5C6.17157 13.5 5.5 12.8284 5.5 12C5.5 11.1716 6.17157 10.5 7 10.5C7.82843 10.5 8.5 11.1716 8.5 12ZM13.5 12C13.5 12.8284 12.8284 13.5 12 13.5C11.1716 13.5 10.5 12.8284 10.5 12C10.5 11.1716 11.1716 10.5 12 10.5C12.8284 10.5 13.5 11.1716 13.5 12ZM16.999 13.5C17.8274 13.5 18.499 12.8284 18.499 12C18.499 11.1716 17.8274 10.5 16.999 10.5C16.1706 10.5 15.499 11.1716 15.499 12C15.499 12.8284 16.1706 13.5 16.999 13.5Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
          <div className="border-[1px]   border-gray-200 rounded-xl ">
            <div className="bg-gray-100 rounded-xl p-4 m-4">
              <p className="w-[100px] h-3 m-2 bg-gray-300 rounded-xl"></p>
              <p className="w-[150px] h-5 m-2 bg-gray-400 rounded-xl font-bold test-sm ">
               
              </p>{" "}
              <p className="w-[100px] h-3 m-2 bg-gray-300 rounded-xl text-gray-400"></p>
            </div>
            <div className="flex flex-wrap w-full items-center">
            
            </div>
            <div className="bg-gray-100 m-2 mr-4 ml-4 p-3  font-semibold rounded-2xl">
              
            </div>
            <div className=" m-4 flex flex-warp justify-center w-full">
              
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
