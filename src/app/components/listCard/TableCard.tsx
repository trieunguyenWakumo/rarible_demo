import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import Link from "next/link";
const TableCard = (props: {
  id?: number;
  imageUrl?: string;
  price?: string;
  amount?: string;
  title?: string;
  valueBid?: string;
  description?: string;
  name?: string;
}) => {
  const [isLoading, setLoading] = useState(true);
 
  return (
    <div className="border-[2px] rounded-2xl w-full ">
      {isLoading ? (
        <div className="">
          <Link
            href={{
              pathname: "/pagedetail",
              query: { id: props.id },
            }}
            className=" rounded-2xl m-1 pr-7 pl-7 flex flex-wrap h-[72px] items-center   text-black font-bold text-sm leading-6 cursor-pointer hover:bg-gray-100"
          >
            <div className="mr-4 flex flex-wrap basis-1/4 grow items-center  ">
              <div className="relative mr-4 ">
                <Image
                  src={`/image/${props.imageUrl}`}
                  alt="logo"
                  width={40}
                  height={40}
                  className="rounded-lg "
                />
              </div>

              <p>{props.description}</p>
            </div>

            <div className="mr-4 text-end basis-1/8 grow  ">
              <p>{props.name}</p>
            </div>
            <div className="mr-4 text-end basis-1/8 grow "></div>
            <div className="mr-4 text-end basis-1/8 grow ">
              <p> {props.amount}</p>
            </div>
            <div className="mr-4 text-end basis-1/8 grow "></div>
            <div className="mr-4 text-end basis-1/8 grow ">
              {props.valueBid}
            </div>
          </Link>
        </div>
      ) : (
        <div className="">
          <Link
            href={{
              pathname: "/pagedetail",
              query: { id: props.id },
            }}
            className=" rounded-2xl m-1 pr-7 pl-7 flex flex-wrap h-[72px] items-center   text-black font-bold text-sm leading-6 cursor-pointer hover:bg-gray-100"
          >
            <div className="mr-4 flex flex-wrap basis-1/4 grow items-center  ">
              <div
                role="status"
                className="flex  mr-3 items-center justify-center  bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
              >
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                  <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                </svg>
              </div>
              <p className="w-20 h-2.5 bg-gray-200 rounded-xl"></p>
            </div>
            <div className="w-20 h-2.5 bg-gray-200 rounded-xl mr-4 text-end basis-1/8 grow  "></div>
            <div className=" mr-4 text-end basis-1/8 grow "></div>
            <div className="w-20 h-2.5 bg-gray-200 rounded-xl mr-4 text-end basis-1/8 grow "></div>
            <div className=" mr-4 text-end basis-1/8 grow "></div>
            <div className="w-20 h-2.5 bg-gray-200 rounded-xl mr-4 text-end basis-1/8 grow "></div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default TableCard;
