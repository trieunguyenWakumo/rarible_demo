"use client";
import React, { useCallback } from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import { formatBalance } from "../wallet/format";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";

import {
  WalletConnectModalSign,
  useConnect,
} from "@walletconnect/modal-sign-react";

import NFTScreen from "./MainNFTScreen";
import data from "../../data/network";

const metamask = window.ethereum.isMetaMask;
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}
const chainId = window.ethereum.chainId;
//
const initialState = { accounts: [], balance: "", chainId: "" };
const NetworkWallet = () => {
  const [showNetWork, setNameNetWork] = useState("");
  

  const [selectNetWork, setSelectNetWork] = useState("");
  const [wallet, setWallet] = useState<any>(initialState);
  const [connectButtonDisabled, setConnectButtonDisabled] = useState(false);
  const { connect } = useConnect({
    requiredNamespaces: {
      eip155: {
        methods: ["eth_sendTransaction", "personal_sign"],
        chains: ["eip155:1"],
        events: ["chainChanged", "accountsChanged"],
      },
    },
  });
  const [showArrow, setShowArrow] = useState(false);
  const [showWalletConnect, setShowWalletConnect] = useState(false);

  const handelArrow = () => {
    showArrow ? setShowArrow(false) : setShowArrow(true);
  };
  const handelWalletConnect = () => {
    showWalletConnect
      ? setShowWalletConnect(false)
      : setShowWalletConnect(true);
  };

  useEffect(() => {
    if(chainId != null){
      switch (chainId) {
        case "0x89":
          setNameNetWork("MUMBAI");
          break;
        case "0x1":
          setNameNetWork("ETH");
          break;
        case "0x38":
          setNameNetWork("BNB");
          break;
      }}
      switchNetWork()
  }, [selectNetWork]);
  const switchNetWork = useCallback(() => {
    if (selectNetWork == "ETH") {
      window.ethereum
        .request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        })
        .catch(console.log("error"));
      setShowArrow(false);
      setSelectNetWork(selectNetWork);
    } else {
      window.ethereum
        .request({
          method: "wallet_addEthereumChain",
          params: data[`${selectNetWork}`],
        })
        .catch(console.log("error"));
      setShowArrow(false);
      setSelectNetWork(selectNetWork);
    }
  },[selectNetWork]);

  const onWalletConnect = async () => {
    try {
      setConnectButtonDisabled(true);
      const data = await connect();
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setConnectButtonDisabled(false);
    }
  };
  const handleConnect = useCallback(() => {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
    } else {
      window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts: any) => {
          updateWallet(accounts);
          setShowWalletConnect(false);
        });
    }
  }, []);

  const updateWallet = async (accounts: any) => {
    const balance = formatBalance(
      window.ethereum.request({
        method: "eth_getBalance",
        params: [accounts[0], "latest"],
      })
    );
    const chainId = window.ethereum.request({
      method: "eth_chainId",
    });
    setWallet({ accounts, balance, chainId });
    console.log("wallet", wallet?.accounts?.[0]);
  };

  return (
    <>
      <div className="flex flex-warp justify-between">
        <div></div>
        <div className="flex flex-warp">
          <div className="m-2 relative">
            <button
              className=" flex flex-wrap border-[1px]  bg-white p-2 rounded-lg hover:bg-blue-400 "
              onClick={handelArrow}
            >
              {" "}
              <p className=" text-sm font-bold ">
                {" "}
                {showNetWork || "Switch NetWork"}
              </p>
              {showArrow ? (
                <BiDownArrowAlt size={20} />
              ) : (
                <BiUpArrowAlt size={20} />
              )}
            </button>
            {showArrow ? (
              <div className="absolute w-[120px] bg-white font-semibold">
                <ul>
                  <li className=" m-2 border-b-[3px]">
                    <button
                      onClick={() => setSelectNetWork("ETH")}
                      className="flex flex-wrap"
                    >
                      ETH
                      {selectNetWork == "ETH" && (
                        <span className="ml-2">
                          <BsCheck size={16} className="text-green-300" />
                        </span>
                      )}
                    </button>{" "}
                  </li>
                  <li className="  m-2 border-b-[3px]">
                    <button
                      onClick={() => setSelectNetWork("BNB")}
                      className="flex flex-wrap"
                    >
                      BNB
                      {selectNetWork == "BNB" && (
                        <span className="ml-2">
                          <BsCheck size={16} className="text-green-300" />
                        </span>
                      )}
                    </button>
                  </li>
                  <li className=" m-2 border-b-[3px]">
                    <button
                      onClick={() => setSelectNetWork("MUMBAI")}
                      className="flex flex-wrap"
                    >
                      MUMBAI
                      {selectNetWork == "MUMBAI" && (
                        <span className="">
                          <BsCheck size={16} className="text-green-300" />
                        </span>
                      )}
                    </button>{" "}
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
          <div className="flex flex-col m-2 ">
            <div className="relative">
              <button
                className=" flex flex-wrap    bg-blue-400 p-2  text-white rounded-lg hover:bg-black  hover:text-white "
                onClick={handelWalletConnect}
              >
                <span className="w-[120px] truncate">
                  {" "}
                  {(metamask && wallet?.accounts?.[0]) || "Connect Wallet"}
                </span>
              </button>
              {showWalletConnect ? (
                <div className="absolute bg-white font-semibold">
                  <ul>
                    <li className="flex flex-wrap pt-2 border-b-[3px]">
                      <button
                        onClick={handleConnect}
                        className=" bg-black  text-white mb-2 rounded-lg p-2 "
                      >
                        Metamask
                      </button>
                    </li>
                    <li className="flex flex-wrap pt-2 border-b-[3px]">
                      <button
                        className="bg-blue-400  text-white mb-2 text-sm rounded-lg p-2 "
                        onClick={onWalletConnect}
                        disabled={connectButtonDisabled}
                      >
                        Connect Wallet
                      </button>
                    </li>
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
          <WalletConnectModalSign
            projectId={projectId}
            metadata={{
              name: "My Dapp",
              description: "My Dapp description",
              url: "https://my-dapp.com",
              icons: ["https://my-dapp.com/logo.png"],
            }}
          />
        </div>
      </div>
      <NFTScreen addressNetWork={selectNetWork} />
    </>
  );
};

export default React.memo(NetworkWallet);
