This is an example dApp inspired by [quai-no-code-deployer](https://github.com/dominant-strategies/quai-no-code-deployer) and [hardhat-example](https://github.com/dominant-strategies/hardhat-example) by [Dominant Strategies](https://github.com/dominant-strategies/).

# QUAI-NFT-DAPP
This app demonstrates how to use Quais.js in a modern Next.js App. It leverages hardhat to compile and deploy a simple Solidity ERC721 smart contract on Quai Network.

The NFT requires a submission in QUAI to mint and offers functions for updating supply and mint price as well as withdrawing contract balance to the owner.

The dApp provides owner functionality when the connected address matches the owner address. 

![screenshot](https://github.com/mpoletiek/quai-nft-dapp/blob/main/github_resources/app-screenshot.png?raw=true)

# Getting Started

Download the [Pelagus Wallet](https://pelaguswallet.io/) and visit the [Faucet](https://orchard.faucet.quai.network/) to get some QUAI.

You will need some QUAI to deploy and interact with the dApp.

Once the wallet is setup you will need to export your QUAI address's private key for hardhat to deploy your smart contract to the blockchain.

## Clone the repo

`git clone https://github.com/dominant-strategies/quai-nft-dapp`

## Install

`cd quai-nft-dapp`
`npm i`

## Setup Environment Variables
Copy `.env.dist` to `.env` and modify `CYPRUS1_PK` with your address's private key and `INITIAL_OWNER` with your public address.

```
CYPRUS1_PK="0x0000000000000000000000000000000000000000000000000000000000000000"
INITIAL_OWNER="0x0000000000000000000000000"
```
## Compile Smart Contract
The smart contract resides at `contracts/ERC721.sol`

Compile the smart contract using `npx hardhat compile`

```
Compiled 1 Solidity file successfully (evm target: london).
```

## Deploy Smart Contract
You should have already have some QUAI by visiting the [Faucet](https://faucet.quai.network) and copied your private key into `.env`.

To deploy the contract run `npx hardhat run scripts/deployERC721.js`

Wait for the transaction to broadcast and get mined on Quai Network.

```
Transaction broadcasted:  0x000
Contract deployed to:  0x000
```

Note the contract address at the end of `Contract deployed to: <contract-address>`

## Configure dApp

We need to tell the dApp where our contract resides.

Edit `.env` and set the contract address to your contract address from above by editing the `NEXT_PUBLIC_DEPLOYED_CONTRACT` variable.

```
NEXT_PUBLIC_DEPLOYED_CONTRACT=0x003d8Ab5376F1948916c2BCeE40DeAC3dC198475
```

## Run the App

To start the app use `npm run dev`

```
> quai-nft-dapp@0.1.0 dev
> next dev

   ▲ Next.js 15.0.3
   - Local:        http://localhost:3000
   - Environments: .env

 ✓ Starting...
 ✓ Ready in 3s
 ```

 ## Try it Out!

 Point your browser with Pelagus installed to `https://localhost:3000`

 Connect your wallet, mint an NFT!
