// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherWallet {
    address public owner;

    // Event to log deposits and withdrawals
    event Deposited(address indexed sender, uint amount);
    event Withdrawn(address indexed owner, uint amount);

    // Constructor to set the contract owner
    constructor() {
        owner = msg.sender; // Set the contract owner to the account that deploys the contract
    }

    // Function to receive Ether
    receive() external payable {
        emit Deposited(msg.sender, msg.value); // Emit event on receiving Ether
    }

    // Function to withdraw all Ether from the contract
    function withdraw() external {
        require(msg.sender == owner, "Only the owner can withdraw");
        uint balance = address(this).balance;
        require(balance > 0, "No balance to withdraw");

        payable(owner).transfer(balance);
        emit Withdrawn(owner, balance); // Emit event on withdrawal
    }

    // Function to check the balance of the contract
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}
