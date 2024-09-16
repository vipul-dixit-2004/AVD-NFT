/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
const { API_KEY, PRIVATE_KEY } = process.env;
module.exports = {
  solidity: "0.8.7",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: API_KEY,
      accounts: [`0x${PRIVATE_KEY}`],
      timeout: 20000,
    },
  },
};
// 0xbd9eba6fF73e0aEfc5678eccd908BCDf1bf5156a
