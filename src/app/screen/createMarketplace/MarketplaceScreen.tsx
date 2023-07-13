"use client";
import React from "react";
import { ethers, BrowserProvider, JsonRpcProvider } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal";
import Image from "next/image";
import axios from "axios";
import ABI721 from "./../../data/ABI721.json";
import CardNFT from "./cardNFTs/CardNFT";
import { create } from "domain";
import { formatBalance } from "../wallet/format";

const mintedTokenIds = [1, 2,3,4]
const MarketplaceScreen = () => {
  const addressContract = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";
  const tokenURI =
    "http://bafybeibyilsckfkcwvqyrphc5n4xijk3onofibrlpz4q6ph7xp55o4eqeu.ipfs.localhost:8080/3842";
  const initialState = { accounts: [], balance: "", chainId: "" };
  const [hasProvider, setHasProvider] = useState(false);
  const [wallet, setWallet] = useState(initialState);

  const transferHandler = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.ready;
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(addressContract, ABI721, signer);
    const createToken = await contract.createNFT(tokenURI);

    const receipt = await createToken.wait();

    // console.log("hish", createToken);
    // console.log("list", listToken);
    console.log("receipt", receipt);

    console.log("logs", receipt.logs);

    console.log("Logs0: ", contract.interface.parseLog(receipt.logs[0]))
    console.log("Logs1: ", contract.interface.parseLog(receipt.logs[1]))

  };

  useEffect(() => {
    const refreshAccounts = (accounts: any) => {
      if (accounts.length > 0) {
        updateWallet(accounts);
      } else {
        setWallet(initialState);
      }
    };

    const refreshChain = (chainId: any) => {
      setWallet((wallet) => ({ ...wallet, chainId }));
    };
    getProvider();
    return () => {
      window.ethereum?.removeListener("accountsChanged", refreshAccounts);
      window.ethereum?.removeListener("chainChanged", refreshChain);
    };
  }, []);
  const getProvider = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
  };
  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(
      await window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = await window.ethereum.request({
      method: "eth_chainId",
    });
    setWallet({ accounts, balance, chainId });
  };
  const handleConnect = async () => {
    setHasProvider(true);
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);

      signer = await provider.getSigner();
    }
    await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: any) => {
        updateWallet(accounts);
      })
      .catch((err: any) => {});
  };
  console.log(wallet.accounts[0]);
  return (
    <div>
      <CardNFT />
      <div className=" flex flex-wrap  ">
        <button
          className=" bg-white text-black p-3 m-2 rounded-lg"
          onClick={handleConnect}
        >
          Connect
        </button>
        <button
          onClick={transferHandler}
          className=" bg-black text-white p-3 m-2 rounded-lg"
        >
          Create
        </button>
      </div>
      {hasProvider && <div>{wallet.accounts[0]}</div>}
    </div>
  );
};

export default MarketplaceScreen;
