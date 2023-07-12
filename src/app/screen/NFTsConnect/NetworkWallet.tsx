"use client";
import React from "react";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import DropdownImage from "../../components/button/DropdownImage";
import { formatBalance } from "../wallet.tsx/format";
import {
  WalletConnectModalSign,
  useConnect,
} from "@walletconnect/modal-sign-react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
if (!projectId) {
  throw new Error("You need to provide NEXT_PUBLIC_PROJECT_ID env variable");
}

//

const NetworkWallet = () => {
  const initialState = { accounts: [], balance: "", chainId: "" };
  const [wallet, setWallet] = useState(initialState);
  const [connectButtonDisabled, setConnectButtonDisabled] = useState(false);
  const [isNetWork, setIsNetWork] = useState("")
  const { connect } = useConnect({
    requiredNamespaces: {
      eip155: {
        methods: ["eth_sendTransaction", "personal_sign"],
        chains: ["eip155:1"],
        events: ["chainChanged", "accountsChanged"],
      },
    },
  });
  useEffect(()=>{
    switch(wallet.chainId)
    {
      case "0x89":
        setIsNetWork("MUMBAI")
        break
        case "0x38":
        setIsNetWork("BNB")
        break
        case "0x1":
        setIsNetWork("ETH")
        break
  
    }
  },[wallet])


  // 3. Sign in function
  const onConnect = async () => {
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
  const handleConnect = async () => {
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
    } else {
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts: any) => {
          updateWallet(accounts);
        });
    }
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
    console.log("wallet", wallet);
  };

  return (
    <>
    <div className="flex flex-warp justify-between">
    <div>
      
    </div>
      <div className="flex flex-warp">
        <div>
          <DropdownImage
            tokenChoose={isNetWork}
          />
        </div>
        <div className="flex flex-col m-2">
          <button
            onClick={handleConnect}
            className="bg-black  text-white mb-2 rounded-lg p-2 "
          >
            Connect
          </button>
          <button className="bg-blue-400  text-white mb-2 rounded-lg p-2 " onClick={onConnect} disabled={connectButtonDisabled}>
            Connect Wallet 
          </button>
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
    </>
  );
};

export default NetworkWallet;
