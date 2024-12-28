const { Web3 } = require('web3'); // Explicit import for Web3 4.x
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));
const contractABI = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "stateMutability": "payable",
      "type": "receive"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];
  
const contractAddress = '0x6F761956314990829Bb45fD4E92C28563381dfD9';

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getBalance() {
    const balance = await contract.methods.getBalance().call();
    console.log("Contract Balance:", web3.utils.fromWei(balance, 'ether'), "ETH");
}

getBalance();