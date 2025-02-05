/**
 * @type import('hardhat/config').HardhatUserConfig
 */

require('@nomicfoundation/hardhat-toolbox')
require("@quai/hardhat-deploy-metadata")
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

module.exports = {
  defaultNetwork: 'cyprus1',
  networks: {
    cyprus1: {
      url: process.env.RPC_URL,
      accounts: [process.env.CYPRUS1_PK],
      chainId: Number(process.env.CHAIN_ID),
    },
  },

  solidity: {
    version: '0.8.20',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
      evmVersion: 'london',
    },
  },

  paths: {
    sources: './contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
  mocha: {
    timeout: 20000,
  },
}