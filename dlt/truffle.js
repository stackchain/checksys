require("babel-register");
require("babel-polyfill");

const HDWalletProvider = require("truffle-hdwallet-provider");

const mnemonic = "pet fever horror split leave daring wink apple holiday half cousin toddler";
// wallet: 0x117cF7dcFCB79b61d37403060826d076B3A859f9
// pk: 65CAB0B67232802A4ED2C5D0358E3B7DF15B41F584294F68A9B467667D4957EC

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 7900000,
    },
    ganache: {
      host: "localhost",
      port: 7545,
      network_id: "5777",
      gas: 6721975,
      gasPrice: 20000000000,
    },
    mainnet: {
      network_id: "1",
      gas: 7900000,
      gasPrice: 50000000000
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(process.env.REACT_APP_MNEMONIC || mnemonic, "https://ropsten.infura.io/v3/08cc459b03024199a9b5644b48670d80");
      },
      network_id: "3",
      gas: 4706206,
      gasPrice: 35000000000
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(process.env.REACT_APP_MNEMONIC || mnemonic, "https://rinkeby.infura.io/v3/08cc459b03024199a9b5644b48670d80");
      },
      network_id: "4",
      gas: 7500000,
      gasPrice: 10000000000
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(process.env.REACT_APP_MNEMONIC || mnemonic, "https://kovan.infura.io/v3/08cc459b03024199a9b5644b48670d80");
      },
      network_id: 42, 
      gas: 7900000,
      gasPrice: 10000000000
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8777,         // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x01      // <-- Use this low gas price
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
    version: "0.5.0"
  },
  mocha: {
    enableTimeouts: false
  },
  compilers: {
    solc: {
      version: "0.5.0"
    }
  }
};