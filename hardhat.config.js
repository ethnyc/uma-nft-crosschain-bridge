require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");

const networks = require("./networks.json");

module.exports = {
  solidity: "0.8.4",
  networks: {
    hardhat: process.env.FORK_RINKEBY
      ? {
          forking: {
            url: networks.rinkeby.rpc,
            blockNumber: 10857376,
          },
        }
      : {},
  },
  gasReporter: {
    enabled: process.env.REPORT_GAS !== undefined,
    currency: "USD",
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
