"use client";
import React, { useEffect, useState } from "react";
import Card from "../../components/card/Card";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiGridAlt } from "react-icons/bi";
import ListCard from "../../components/listCrad/listCrad";
export const MainNFTScreen = () => {
  const dataListNFT = [
    { id:1,
      imageUrl: "nft1.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    { id:2,

      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    { id:3,
     
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:4,
      imageUrl: "nft4.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    { id:5,
      
      imageUrl: "nft1.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:6,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:7,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:8,
      imageUrl: "nft4.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:9,
      imageUrl: "nft1.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:2,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:10,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:11,
      imageUrl: "nft4.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:12,
      imageUrl: "nft1.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:13,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:14,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:15,
      imageUrl: "nft4.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:16,
      imageUrl: "nft1.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:17,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:18,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:19,
      imageUrl: "nft4.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:20,
      imageUrl: "nft1.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:20,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:20,
      imageUrl: "nft2.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
    {
      id:21,
      imageUrl: "nft4.jpeg",
      price: "Price",
      amount: "0.02",
      title: "Highest bid",
      valueBid: "No bids yet",
      description: "Art Block Factory",
      name: "Card1 #540",
    },
  ];

  const [isList, setList] = useState(false);
  const [isCard, setCard] = useState(true);
 
  const ButtonGroup = () => {
    const changeCollectionList = () => {
      setList(true);
      setCard(false);
    };
    const changeCollectionCard = () => {
      setCard(true);
      setList(false);
    };

    const colorButtonList = isList ? "bg-white  text-black" : "  bg-gray-200  ";
    const colorButtonCard = isCard ? "bg-white  text-black" : "  bg-gray-200  ";
    return (
      <>
        <div className="flex flex-wrap p-[2px] bg-gray-200 mr-10 rounded-xl text-gray-500 ">
          <button
            onClick={changeCollectionList}
            className={`font-medium rounded-xl ${colorButtonList} pr-[16px] pl-[16px] pt-[6px] pb-[6px] hover:text-black`}
          >
            <AiOutlineUnorderedList />
          </button>
          <button
            onClick={changeCollectionCard}
            className={`font-medium rounded-xl ${colorButtonCard} pr-[16px] pl-[16px] pt-[6px] pb-[6px]  hover:text-black`}
          >
            <BiGridAlt />
          </button>
        </div>
      </>
    );
  };
  //
  return (
    <>
      <div>
        <div className="flex flex-wrap mb-[48px]">
          <ButtonGroup />
        </div>
      </div>
      <div className="flex flex-wrap m-2">
      {dataListNFT.map((e) => {
          return (
            <>{isCard &&(
              <Card
              
              imageUrl={e.imageUrl}
                price={e.price}
                amount={e.amount}
                title={e.title}
                valueBid={e.valueBid}
                description={e.description}
                name={e.name}
              />)}{isList &&(
                
                <ListCard imageUrl={e.imageUrl}
                price={e.price}
                amount={e.amount}
                title={e.title}
                valueBid={e.valueBid}
                description={e.description}
                name={e.name}/>
                
              )}
            </>
          );
        })}
      </div>
    </>
  );
};
