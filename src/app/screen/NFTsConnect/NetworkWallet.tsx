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
  const [disabled, setDisabled] = useState(false);
  const { connect } = useConnect({
    requiredNamespaces: {
      eip155: {
        methods: ["eth_sendTransaction", "personal_sign"],
        chains: ["eip155:1"],
        events: ["chainChanged", "accountsChanged"],
      },
    },
  });

  // 3. Sign in function
  const onConnect = async () => {
    try {
      setDisabled(true);
      const data = await connect();
      console.log(data);
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  };
  const handleConnect = async () => {
    let signer = null;
    let provider;
    if (window.ethereum == null) {
      console.log("MetaMask not installed; using read-only defaults");
    } else {
      provider = new ethers.BrowserProvider(window.ethereum);
      signer = await provider.getSigner();
      console.log(signer.address);
      await window.ethereum
        .request({
          method: "eth_requestAccounts",
        })
        .then((accounts: any) => {
          updateWallet(accounts);
        });
    }
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
            tokenChoose={"BNB"}
            tokenAwait1={"ETH"}
            tokenAwait2={"MUMBAI"}
          />
        </div>
        <div className="flex flex-col m-2">
          <button
            onClick={handleConnect}
            className="bg-black  text-white mb-2 rounded-lg p-2 "
          >
            Connect
          </button>
          <button className="bg-blue-400  text-white mb-2 rounded-lg p-2 " onClick={onConnect} disabled={disabled}>
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
