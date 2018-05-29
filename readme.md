

## How to run
1. install 
```
npm install -g truffle
npm install -g ganache

npm init -y
npm install -E zeppelin-solidity

// npm update -g truffle
```
(&#x1F34E;) npm install  openzeppelin-solidity
:star: openzeppelin-solidity@1.9.0

2. create project in a empty folder
```
truffle init
ganache-cli -p 8545 // start client
```

3. compile/deploy contract in root dir
```
truffle compile  // check build folder
truffle migrate --network development // check it in truffle.js
```

4. interact with Contract in console

```
truffle console --network development

// get account from ganache-cli
account0 = web3.eth.accounts[0]

// call contract
CYCToken.deployed().then(inst => { CYCTokenInstance = inst })

CYCTokenInstance.totalSupply.call()
// event
CYCTokenInstance.Transfer.call()
```

5. deploy contract in `ropsten`

```
truffle migrate --network ropsten
```

* runing result:
```
Deploying CYCToken...
  ... 0x2d04ff6f016a8e03f8c3f662f5a73b6ca94bfa4d95c0055b847cd8ed453f363e
  CYCToken: 0xd797d0b277e2f3b01c123ceef78180b6ea643fc2
``` 

* :tada:view contract in [here](https://ropsten.etherscan.io/token/0xd797d0b277e2f3b01c123ceef78180b6ea643fc2)

## Warning to be fixed
when compile sol
```
Warning: Defining constructors as functions with the same name as the contract is deprecated. Use "constructor(...) { ... }" instead.
  function CYCToken() public {
  ^ (Relevant source part starts here and spans across multiple lines).
```

## solidity_flattener 

[truffle-flattener:](https://github.com/alcuadrado/truffle-flattener)
```
truffle-flattener <*.sol> >> <new.sol>
```

## Refer
1. [EIP-20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
2. [truffle](http://www.cocoachina.com/blockchain/20180314/22592.html)
3. [Lavevel-Token](https://github.com/halls7588/ERC20-Token-and-ICO-Contract/blob/master/Lavevel-Token.sol)
4. [**DongriToken**](https://github.com/dongri/DongriToken)
5. [**ERC20**](https://github.com/OpenZeppelin/zeppelin-solidity/tree/master/contracts/token/ERC20)
6. [**OurToken**](https://github.com/Kubide/solidity-Boilerplate/blob/master/contracts/OurToken.sol)

7. [Awesome Crowdsales](https://github.com/rstormsf/awesome-crowdsales)
8. [provider](https://www.npmjs.com/package/truffle-wallet-provider)
9. [smart contract](https://www.jianshu.com/c/4d3800411cfa)

10. [Kubide/solidity-Boilerplate: `A basic Solidity` - Truffle - OpenZeppelin - Infura Boilerplate](https://github.com/Kubide/solidity-Boilerplate)