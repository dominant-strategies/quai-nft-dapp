const quais = require('quais')
const TestNFT = require('../artifacts/contracts/ERC721.sol/TestERC721.json')
const { deployMetadata } = require("hardhat")
require('dotenv').config()

// Pull contract arguments from .env
const tokenArgs = [process.env.INITIAL_OWNER]

async function deployERC721() {

  // Get IPFS Hash
  const ipfsHash = await deployMetadata.pushMetadataToIPFS("TestERC721")

  // Config provider, wallet, and contract factory
  const provider = new quais.JsonRpcProvider(hre.network.config.url, undefined, { usePathing: true })
  const wallet = new quais.Wallet(hre.network.config.accounts[0], provider)
  const ERC721 = new quais.ContractFactory(TestNFT.abi, TestNFT.bytecode, wallet, ipfsHash)

  // Broadcast deploy transaction
  const erc721 = await ERC721.deploy(...tokenArgs)
  console.log('Transaction broadcasted: ', erc721.deploymentTransaction().hash)

  // Wait for contract to be deployed
  await erc721.waitForDeployment()
  console.log('Contract deployed to: ', await erc721.getAddress())
}

deployERC721()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })