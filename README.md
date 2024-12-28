# Smart Contract with Web3.js, Truffle, and Ganache

This project demonstrates how to write, deploy, and interact with a smart contract using the Web3.js library, Truffle framework, and Ganache or a public testnet like Rinkeby. The smart contract allows for the following functionality:

- The contract can receive Ether.
- The owner of the contract can withdraw all Ether from the contract's balance.
- The contract includes a function to check its balance.

## Table of Contents
1. [Smart Contract](#smart-contract)
2. [Environment Setup](#environment-setup)
3. [Web3.js Configuration](#web3js-configuration)
4. [Truffle Setup](#truffle-setup)
5. [Deploying the Contract](#deploying-the-contract)
6. [Interacting with the Contract](#interacting-with-the-contract)
7. [Metamask Setup](#metamask-setup)
8. [License](#license)

## Smart Contract


### Explanation:
1. **Smart Contract**: The `SmartContract.sol` file allows the contract to accept Ether, check its balance, and let the owner withdraw Ether.
2. **Environment Setup**: Install Web3.js and Truffle, and configure your environment.
3. **Web3.js Configuration**: Set up Web3.js to interact with Ganache or a public testnet like Rinkeby.
4. **Truffle Setup**: Configure Truffle to deploy your smart contract and interact with it.
5. **Metamask Setup**: Guide on configuring Metamask with Ganache and a public testnet.
6. **Interacting with the Contract**: Use Web3.js to interact with the contract and check balances or perform actions like withdrawals.

Let me know if you need any additional details!

### Solidity Code (SmartContract.sol)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartContract {
    address public owner;

    constructor() {
        owner = msg.sender;  // Set the owner of the contract
    }

    // Function to receive Ether
    receive() external payable {}

    // Function for the owner to withdraw all Ether from the contract
    function withdraw() external {
        require(msg.sender == owner, "You are not the owner!");
        payable(owner).transfer(address(this).balance);
    }

    // Function to check the contract's balance
    function checkBalance() external view returns (uint256) {
        return address(this).balance;
    }
}
