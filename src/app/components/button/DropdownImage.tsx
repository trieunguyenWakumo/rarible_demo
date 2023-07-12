"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { AiOutlineCheck } from "react-icons/ai";
import { formatBalance } from "../../screen/wallet.tsx/format";
import { ethers } from "ethers";

const DropdownImage = (props: {
  tokenChoose?: string;
  tokenAwait1?: string;
  tokenAwait2?: string;
}) => {
  const dataBNC = [
    {
      chainId: "0x38",
      chainName: "Binance Smart Chain",
      nativeCurrency: {
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
      },
      rpcUrls: ["https://bsc-dataseed.binance.org/"],
      blockExplorerUrls: ["https://bscscan.com/"],
    },
  ];
  const dataMUMBAI = [
    {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"],
    },
  ];

  const [showArrow, setShowArrow] = useState(false);

  const handelArrow = () => {
    showArrow ? setShowArrow(false) : setShowArrow(true);
  };
  const changeETH = async () => {
    await window.ethereum
      .request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x1" }],
      })
      .catch(console.log("error"));
  };

  const changeBNC = async () => {
    await window.ethereum
      .request({ method: "wallet_addEthereumChain", params: dataBNC })
      .catch(console.log("error"));
  };
  const changeMUMBAI = async () => {
    await window.ethereum
      .request({ method: "wallet_addEthereumChain", params: dataMUMBAI })
      .catch(console.log("error"));
  };

  return (
    <div className="m-2 relative">
      <button
        className=" flex flex-wrap   bg-white p-2 rounded-lg hover:bg-slate-400 "
        onClick={handelArrow}
      >
        {" "}
        <p className=" text-sm font-bold "> {props.tokenChoose}</p>
        {showArrow ? <BiDownArrowAlt size={20} /> : <BiUpArrowAlt size={20} />}
      </button>
      {showArrow ? (
        <div className="absolute bg-white font-semibold">
          <ul>
            <li className="flex flex-wrap">
              <button onClick={changeBNC}>{props.tokenChoose}</button>
              <AiOutlineCheck size={20} />
            </li>
            <li className="flex flex-wrap">
              <button onClick={changeETH}>{props.tokenAwait1} </button>{" "}
            </li>
            <li className="flex flex-wrap">
              <button onClick={changeMUMBAI}>{props.tokenAwait2} </button>{" "}
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
export default DropdownImage;
