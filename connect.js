const { Web3 } = require('web3'); 

const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

// Test connection
(async () => {
  try {
    const isListening = await web3.eth.net.isListening();
    console.log("Connected to Ganache:", isListening);
  } catch (error) {
    console.error("Connection failed:", error);
  }
})();