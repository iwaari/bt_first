# Smart Contract with Web3.js, Truffle, and Ganache

This project demonstrates how to write, deploy, and interact with a smart contract using the Web3.js library, Truffle framework, and Ganache or a public testnet like Holeski. The smart contract allows for the following functionality:

The contract can receive Ether.
The owner of the contract can withdraw all Ether from the contract's balance.
The contract includes a function to check its balance.
For this project, the Holeski Testnet was used as the public Ethereum testnet for deployment and interaction.

## Table of Contents

1. [Smart Contract](#smart-contract)
2. [Environment Setup](#environment-setup)
3. [Web3.js Configuration](#web3js-configuration)
4. [Truffle Setup](#truffle-setup)
5. [Deploying the Contract](#deploying-the-contract)
6. [Interacting with the Contract](#interacting-with-the-contract)
7. [Metamask Setup](#metamask-setup)
8. [License](#license)

## **Smart Contract**

### Explanation:

1. **Smart Contract**:  
   The `EtherWallet.sol` file allows the contract to accept Ether, check its balance, and let the owner withdraw Ether.

2. **Environment Setup**:  
   Install Web3.js, Truffle, and configure your development environment.

3. **Web3.js Configuration**:  
   Set up Web3.js to interact with the **Holeski Testnet** for deploying and interacting with the smart contract.

4. **Truffle Setup**:  
   Configure Truffle to compile, deploy, and test your smart contract.

5. **MetaMask Setup**:  
   Guide on configuring MetaMask with the Holeski Testnet to interact with your contract.

6. **Interacting with the Contract**:  
   Use Web3.js to check balances, perform transactions, and interact with the contract functions such as withdrawing funds.

---

## **Environment Setup**

1. **Install Dependencies**:  
   Install Node.js and required libraries:

   ```bash
   npm install web3 truffle

   ```

2. **Configure Holeski:**
   Add the Holeski Testnet to MetaMask:

Network Name: Holeski Testnet
RPC URL: Replace with your provider's Holeski RPC endpoint (e.g., Infura or Alchemy).
Chain ID: 17000
Currency Symbol: ETH

3. **Get Test Ether:**
   Use a Holeski faucet to get test Ether for deploying and interacting with the contract.

## **Deployment**

1. Compile the Contract:
   Run the following command to compile the smart contract using Truffle:
   **truffle compile**

2. Deploy the Contract:
   Deploy the contract to the Holeski Testnet by running:
   **truffle migrate --network holeski**

## **Interacting with the Contract**
Use Web3.js to interact with the deployed smart contract.

## **MetaMask Configuration**
Add the Holeski Testnet to MetaMask by providing the following details:

Network Name: Holeski Testnet
RPC URL: https://<your-holeski-rpc-url>
Chain ID: 17000
Currency Symbol: ETH
Import your account from Truffle (if needed) to MetaMask by using the private key generated during contract deployment.


## License

This README is now tailored for Holeski, providing clear instructions for setting up, deploying, and interacting with the smart contract. Let me know if there’s anything else you’d like to add!
