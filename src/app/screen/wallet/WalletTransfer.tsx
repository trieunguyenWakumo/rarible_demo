"use client";
import React, { useState, useEffect, useCallback } from "react";
import { formatBalance, formatChainAsNum } from "./format";
import {parseUnits, ethers } from "ethers";
import ABI from "./../../data/ABI.json";
import { MdWallet } from "react-icons/md";
const Wallet = () => {
  //0x1F474158849B6aDF419b6B95EC3aeEDebaeC1658
  const contractAddress = "0x0000000000000000000000000000000000001010";
  const [hasProvider, setHasProvider] = useState(false);
  const initialState = { accounts: [], balance: "", chainId: "" };
  const [wallet, setWallet] = useState(initialState);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [transferHash, setTransferHash] = useState(null);
  const [transferAddress, setTransferAddress] = useState<string>("");
  const [transferAmount, setTransferAmount] = useState<string>("");

  const transferHandler = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const contract = new ethers.Contract(contractAddress, ABI, signer);
    console.log("address", transferAddress);
    console.log("DATA AMOUNT", transferAmount);
    const results = await contract.transfer(
      transferAddress,
      parseUnits(`${transferAmount}`, 18)
    );
    console.log(parseUnits(transferAmount, 18));
    await results.wait();
    console.log("results", results);
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
  
  const handleConnect = async () => {
    setHasProvider(true);
    await window.ethereum
      .request({
        method: "eth_requestAccounts",
      })
      .then((accounts: any) => {
        updateWallet(accounts);
      })
      .catch((err: any) => {
        setError(true);
        setErrorMessage(err.message);
      });
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
  return (
    <section>
      <div>
        <div className="">
          <div className="w-[300px]  break-all">
            {wallet.accounts.length < 1 && (
              <button
                type="submit"
                className=" flex flex-wrap bg-black rounded-xl border-1  pr-[12px] pl-[12px] pt-[10px] pb-[10px] text-white font-medium"
                onClick={handleConnect}
              >
                <div className="p-1">
                  <MdWallet />
                </div>

                <p> Send Amount </p>
              </button>
            )}
            {wallet.accounts.length > 0 && (
              <div className="flex flex-wrap bg-transparent rounded-xl border-1  pr-[12px] pl-[12px] pt-[10px] pb-[10px] text-white font-medium ">
                <button onClick={handleConnect}>
                  <h3 className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Wallet Accounts:
                    <label className=" mb-2 text-sm font-medium text-red-600 dark:text-white">
                      {wallet.accounts[0]}
                    </label>
                  </h3>
                </button>
                {/* <div>
                  <h3 className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Wallet Balance:
                    <label className=" mb-2 text-sm font-medium text-sky-600 dark:text-white">
                      {wallet.balance}
                    </label>
                  </h3>
                </div>
                <div>
                  <h3 className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Hex ChainId:
                    <label className=" mb-2 text-sm font-medium text-red-600 dark:text-white">
                      {wallet.chainId}
                    </label>
                  </h3>
                </div>
                <div>
                  <h3 className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Numeric ChainId:
                    <label className=" mb-2 text-sm font-medium text-red-600 dark:text-white">
                      {formatChainAsNum(wallet.chainId)}
                    </label>
                  </h3>
                </div> */}
              </div>
            )}
            {error && (
              <div onClick={() => setError(false)}>
                <strong> Error: </strong> {errorMessage}
              </div>
            )}

            {wallet.accounts.length > 0 && (
              <>
                {/* <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    {" "}
                    Receiver Address
                  </label>
                  <input
                    id="address"
                    type="text"
                    name="address"
                    onChange={(e) => setTransferAddress(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className=" mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Amount
                  </label>
                  <input
                    id="amount"
                    type="number"
                    name="amount"
                    onChange={(e) => setTransferAmount(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <button
                  className="w-full mt-2 text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
                  onClick={transferHandler}
                >
                  Send
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400"></p>
                <div>{transferHash}</div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wallet;
