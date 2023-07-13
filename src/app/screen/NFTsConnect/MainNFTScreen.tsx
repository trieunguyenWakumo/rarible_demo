"use client";
import React, { useCallback, useEffect, useState } from "react";
import ListCard from "../../components/card/ListCard";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";



import NFTDATA from "../../data/NFTDATA.json";
import TableCard from "../../components/listCard/TableCard";
 const NFTScreen = (props:{addressNetWork: string}) => {
  const chainId = window.ethereum.chainId
  const addressNetWork = props.addressNetWork
  const [listCard, setListCard] = useState("listCard");
  
  const [dataNft, setDataNft ]= useState<any>([]);

  const changeCollectionListCard = () => {
    const checkValue = listCard;
    switch (checkValue) {
      case "listCard":
        setListCard("listCardTable");
        break;
      case "listCardTable":
        setListCard("listCard");
        break;
    }
  };
useEffect(()=>{
  checkNameNetWork()
},[addressNetWork,chainId])
  //
  const checkNameNetWork =useCallback(()=>{
    switch(addressNetWork)
    {
      
      case "MUMBAI":
        setDataNft(NFTDATA.data_nft_mumbai as any);
        break
          case "ETH":
          setDataNft(NFTDATA.data_nft_eth as any);
        break
        case "BNB":
          setDataNft(NFTDATA.data_nft_bnb as any);
        break
  
    }
    switch(chainId)
    {
      
      case "0x89":
        setDataNft(NFTDATA.data_nft_mumbai as any);
        break
          case "0x1":
          setDataNft(NFTDATA.data_nft_eth as any);
        break
        case "0x38":
          setDataNft(NFTDATA.data_nft_bnb as any);
        break
  
    }
  },[addressNetWork,chainId])
  return (
    <>
      <div>
        <div className="flex flex-wrap mb-[48px]">
          <div className="flex flex-wrap p-[2px] bg-gray-200 mr-10 rounded-xl text-gray-500 ">
            <button
              onClick={changeCollectionListCard}
              className={`font-medium rounded-xl ${
                listCard == "listCard" ? "bg-white text-black" : ""
              } pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}
            >
              <BiGridAlt />
            </button>
            <button
              onClick={changeCollectionListCard}
              className={`font-medium rounded-xl ${
                listCard == "listCardTable" ? "bg-white text-black" : ""
              } pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black`}
            >
              <AiOutlineUnorderedList />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap m-2">
        {dataNft.map((e : any,index:number) => {
          return (
            <div key={index}>
              {listCard == "listCard" ? (
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
                <TableCard
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
            </div>
          );
        })}
      </div>
    </>
  );
};
export default NFTScreen;