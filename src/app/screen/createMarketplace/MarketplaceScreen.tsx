"use client";
import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import Image from "next/image";
const MarketplaceScreen = () => {
  const useFetch = (
    url = "https://ipfs.io/ipfs/QmZcH4YvBVVRJtdn4RdbaqgspFU8gH6P9vomDpBVpAL3u4/3441",
    options: any
  ) => {
    const [data, setData] = useState(null);
    console.log(data)
    useEffect(() => {
      fetch(url, options)
        .then((res) => res.json())
        .then((data) => setData(data));
    }, [url, options]);
    return { data };
    console.log(useFetch)
  
  }
  return (
    <div>
      <Image
        src={`/nft1.jpeg`}
        alt="banner"
        width={420}
        height={420}
        className="rounded-lg max-w-md max-h-96 mr-[60px] bg-cover duration-500 "
      />
    </div>
  );
};

export default MarketplaceScreen;
