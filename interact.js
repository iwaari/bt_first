const Web3 = require('web3');

// Infura API key and Holesky URL (replace with your actual Infura URL)
const infuraUrl = 'https://holesky.infura.io/v3/b40669b034204648bb77c2fb2c51f749'; // Replace with your Infura URL

// Initialize Web3 using the provider (no need to use HttpProvider)
const web3 = new Web3(infuraUrl); // Directly use the URL in Web3 constructor
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

const contractAddress = '0x768243Dad10a5daA3FD3D07FE35CE4Be45580422'; // Replace with your contract address

const contract = new web3.eth.Contract(contractABI, contractAddress);

async function getBalance() {
    try {
        const balance = await contract.methods.getBalance().call();
        console.log("Contract Balance:", web3.utils.fromWei(balance, 'ether'), "ETH");
    } catch (error) {
        console.error("Error fetching balance:", error);
    }
}

getBalance();
