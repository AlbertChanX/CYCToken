// https://github.com/halls7588/ERC20-Token-and-ICO-Contract/blob/master/Lavevel-Token.sol

var CYCToken = artifacts.require("./CYCToken.sol");

module.exports = function(deployer) {
  let initialSupply = 21000000e18 // 2100,0000
  deployer.deploy(CYCToken, initialSupply);
};

// 0x32a26173c5f0d312938039ad8660f935e0328129