"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { formatBalance } from "../../screen/wallet.tsx/format";
import { ethers } from "ethers";
import NETWORK from "./../../screen/NFTsConnect/NETWORK.json"
const DropdownImage = (props: {
  tokenChoose?: string;
  tokenAwait1?: string;
  tokenAwait2?: string;
}) => {
  const [isNetworkChoose, setNetworkChoose] = useState('');

  const [showArrow, setShowArrow] = useState(false);

  const handelArrow = () => {
    showArrow ? setShowArrow(false) : setShowArrow(true);
  };
  useEffect(()=>{
      switch(isNetworkChoose){
        case "ETH" :
           window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x1" }],
          })
          .catch(console.log("error"));
          break;
          case "BNB" :
             window.ethereum
            .request({ method: "wallet_addEthereumChain", params: NETWORK.BNB })
            .catch(console.log("error"));
          break;
          case "MUMBAI" :
             window.ethereum
            .request({ method: "wallet_addEthereumChain", params: NETWORK.MUMBAI })
            .catch(console.log("error"));
          break;
      }    
  },[isNetworkChoose])
 

  
  return (
    <div className="m-2 relative">
      <button
        className=" flex flex-wrap   bg-white p-2 rounded-lg hover:bg-blue-400 "
        onClick={handelArrow}
      >
        {" "}
        <p className=" text-sm font-bold "> {props.tokenChoose || "Connect"}</p>
        {showArrow ? <BiDownArrowAlt size={20} /> : <BiUpArrowAlt size={20} />}
      </button>
      {showArrow ? (
        <div className="absolute bg-white font-semibold">
          <ul>
            <li className="flex flex-wrap m-2 border-b-[3px]">
              <button onClick={()=> setNetworkChoose("BNB")}>BNB</button>
            </li>
            <li className="flex flex-wrap m-2 border-b-[3px]">
              <button  onClick={()=> setNetworkChoose("ETH")}>ETH</button>{" "}
            </li>
            <li className="flex flex-wrap m-2 border-b-[3px]">
              <button  onClick={()=> setNetworkChoose("MUMBAI")}>MUMBAI</button>{" "}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default DropdownImage;
