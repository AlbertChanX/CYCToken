const Web3 = require("web3");
const web3 = new Web3();
// local account
const HDWalletProvider = require("truffle-hdwallet-provider-privkey");
const privKey = Buffer.from("FC6AA280B7FB004F3FA52715415E0E216EE085FF1C273D3499D0F72D822BEE3D", 'hex'); // raw private key
// var keystore = require('fs').readFileSync('./keystore').toString();
// // var pass = require('fs').readFileSync('./pass').toString();
// var wallet = require('ethereumjs-wallet').fromV3(keystore, '123456');

// var privKey = new Buffer("FC6AA280B7FB004F3FA52715415E0E216EE085FF1C273D3499D0F72D822BEE3D", 'hex'); // raw private key
const ETH_NODE = "https://ropsten.infura.io/oHXBBObmi52OGTiLIa6J";
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
