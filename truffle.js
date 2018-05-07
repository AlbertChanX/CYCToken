const Web3 = require("web3");
const web3 = new Web3();
// local account
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
var pass = require('fs').readFileSync('./password').toString();
const privKey = Buffer.from(pass, 'hex'); // raw private key
// var keystore = require('fs').readFileSync('./keystore').toString();
// var wallet = require('ethereumjs-wallet').fromV3(keystore, '123456');

// var privKey = new Buffer("pk", 'hex'); // raw private key
// repalce 'xx' with api key 
const ETH_NODE = "https://ropsten.infura.io/xx";
const fromAddress = "0xed147cc91c1c3522c47028738b0df3b6f2c1409c"
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(privKey, ETH_NODE);
      },
      network_id: 3,  // ???
      'gas': 4700000
    }   
  }
};
