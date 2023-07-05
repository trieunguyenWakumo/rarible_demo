import { ethers } from "hardhat";

async function main() {
 const NFTMarket = await ethers.getContractFactory("NFTMarket");
 const nftMarket = await NFTMarket.deploy();
 
 console.log("Deploy to : ", nftMarket)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
