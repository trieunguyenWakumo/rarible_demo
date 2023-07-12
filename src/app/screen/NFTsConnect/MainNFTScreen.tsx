"use client";
import React, { useEffect, useState } from "react";
import ListCard from "../../components/card/ListCard";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import ListCardTable from "../../components/listCrad/ListCradTable";
import NFTDATA from "./NFTDATA.json";
export const MainNFTScreen = () => {
  const [isListCard, setListCard] = useState("listCard");
  const dataNetWork = useState(NFTDATA)
  const changeCollectionListCard = () => {
    const checkValue = isListCard
    switch(checkValue){
       case "listCard":
        setListCard("listCardTable");
        break;
        case "listCardTable":
          setListCard("listCard");
          break;
    }
  };
 

  //
  return (
    <>
      <div>
        <div className="flex flex-wrap mb-[48px]">
          <div className="flex flex-wrap p-[2px] bg-gray-200 mr-10 rounded-xl text-gray-500 ">
            <button
              onClick={changeCollectionListCard}
              className={`font-medium rounded-xl ${
                isListCard == "listCard" ? "bg-white text-black" : ""
              } pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}
            >
               <BiGridAlt />
             
            </button>
            <button
              onClick={changeCollectionListCard}
              className={`font-medium rounded-xl ${
                isListCard == "listCardTable" ? "bg-white text-black" : ""
              } pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black`}
            >
              <AiOutlineUnorderedList />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap m-2">
        {NFTDATA.DATANFT_LIST.map((e) => {
          return (
            <>
              {isListCard == "listCard" ? (
                <ListCard
                id={e.id}
                  imageUrl={e.imageUrl}
                  price={e.price}
                  amount={e.amount}
                  title={e.title}
                  valueBid={e.valueBid}
                  description={e.description}
                  name={e.name}
                />
              ) : (
                <ListCardTable
                id={e.id}
                  imageUrl={e.imageUrl}
                  price={e.price}
                  amount={e.amount}
                  title={e.title}
                  valueBid={e.valueBid}
                  description={e.description}
                  name={e.name}
                />
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
