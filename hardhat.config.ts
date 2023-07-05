import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
const AURORA_API = "https://aurora-testnet.infura.io/v3/598703c4060b48728c6e2feb4dd2cddc"
const config: HardhatUserConfig = {
  solidity: "0.8.18",
  defaultNetwork: "aurora",
  networks: {
    hardhat: {
    },
    aurora: {
      url: AURORA_API,
      accounts: ['ebe32347c4353cb962c386aa132c7c27b294ad2f919164c24bb3afd4b4a7c39f']
    },
    localhost: {
      url: 'http://127.0.0.1:8545',
      chainId: 31337,
    }
  },
};

export default config;