import React, { useCallback, useState } from "react";
import Image from "next/image";
import { BsArrowDownShort,BsArrowUpShort } from "react-icons/bs";
import Link from "next/link";
const ListCardTable = (
    props: {
      id?:number;
        imageUrl?: string;
        price?: string;
        amount?: string;
        title?: string;
        valueBid?: string;
        description?:string;
        name?: string;
    }      
) => {
 
  return (
   
      
      <div className="border-[2px] rounded-2xl w-full ">
        <div className="">
      
      <Link href={{
      pathname: '/pagedetail',
      query: { id: props.id },
    }}  
       className=" rounded-2xl m-1 pr-7 pl-7 flex flex-wrap h-[72px] items-center   text-black font-bold text-sm leading-6 cursor-pointer hover:bg-gray-100">
        <div className="mr-4 flex flex-wrap basis-1/4 grow items-center  ">
          <div className="relative mr-4 ">
            <Image
              src={`/${props.imageUrl}`}
              alt="logo"
              width={40}
              height={40}
              className="rounded-lg "
            />
          </div>

          <p>{props.description}</p>
        </div>
        <div className="mr-4 text-end basis-1/8 grow  "><p >{props.name}</p></div>
        <div className="mr-4 text-end basis-1/8 grow ">
          </div>
        <div className="mr-4 text-end basis-1/8 grow "><p> {props.amount}</p></div>
        <div className="mr-4 text-end basis-1/8 grow ">
        </div>
        <div className="mr-4 text-end basis-1/8 grow ">{props. valueBid}</div>
      </Link>
    
  </div>
      </div>
   
  );
};

export default ListCardTable;
