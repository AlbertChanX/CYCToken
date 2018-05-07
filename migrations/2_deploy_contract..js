// https://github.com/halls7588/ERC20-Token-and-ICO-Contract/blob/master/Lavevel-Token.sol
// http://truffleframework.com/docs/getting_started/migrations
// var CYCToken = artifacts.require("CYCToken.sol");
var MyToken = artifacts.require("MyToken");

module.exports = function(deployer) {
  // let initialSupply = 21000000e18 // 2100,0000
  deployer.deploy(MyToken, 'c', 'cc', 8, 100000);
};

// 0x32a26173c5f0d312938039ad8660f935e0328129