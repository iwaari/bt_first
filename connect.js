const Web3 = require('web3');

// Replace with your actual Infura Holesky URL
const infuraUrl = 'https://holesky.infura.io/v3/b40669b034204648bb77c2fb2c51f749'; 
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

// Test connection
(async () => {
  try {
    const isListening = await web3.eth.net.isListening();
    console.log("Connected to Holesky via Infura:", isListening);
  } catch (error) {
    console.error("Connection failed:", error);
  }
})();
