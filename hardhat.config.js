import "@nomicfoundation/hardhat-toolbox";
require("dotenv").config();

const config = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: process.env.BASE_RPC,
      accounts: [process.env.PRIVATEKEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};

export default config;
