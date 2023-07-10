import { ethers } from "hardhat";

async function main() {
 const NFTMarket = await ethers.getContractFactory("NFTMarket");
 const nftMarket = await NFTMarket.deploy();
 
 console.log("Deploy to : ", nftMarket)


//  const Demo = await ethers.getContractFactory('Demo');
//  const demo = await Demo.deploy();
//  const erc20 = await ethers.getContractAt('ERC20', '0x...');
 
//  await erc20.approve(demo.address, 123, {value: 0});
//  await demo.deposit(erc20.address, 123, {value: 0});

//  await demo.depositETH(10, { value: 10})

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
