

## How to run
1. install 
```
npm install -g truffle
npm install -g ganache
```

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
```
`get account from ganache-cli`
```
account0 = web3.eth.accounts[0]
# call contract
CYCToken.deployed().then(inst => { CYCToken = inst })

CYCTokenInstance.totalSupply.call()
```
5. deploy contract in `ropsten`
```
truffle migrate --network ropsten
```
runing result:
```
  Deploying Migrations...
  ... 0x3a54eef24a98431a9752b4872b7ab20ffad4f94dd1ed165bdd8b01e6a42e91a8


  Migrations: 0x58c59e5161bf366890cb04e5466bbe15fdff5d38
Saving successful migration to network...

  ... 0xe2aabf83510d45506a4ee19a4484eb8e173bce7becae0ef068a59ec5ca8e88e0

Running migration: 2_deploy_contract..js
  Deploying CYCToken...
  ... 0x18cb419a716de367e124ae677f7a600ecad50dbb87ee402045d3cd0f29d5609c
  CYCToken: 0xf00835a4f7d4afa449687f6254e209e1238eaf19
Saving successful migration to network...
  ... 0xd986b491a933c7763745ee5a1167e7c5773b0ffad2738a6e2c03d826b2f8b1b7
``` 

** view contract in [here](https://ropsten.etherscan.io/address/0xf00835a4f7d4afa449687f6254e209e1238eaf19)

## Refer
1. [EIP-20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)
2. [truffle](http://www.cocoachina.com/blockchain/20180314/22592.html)
3. [Lavevel-Token](https://github.com/halls7588/ERC20-Token-and-ICO-Contract/blob/master/Lavevel-Token.sol)
4. [**DongriToken**](https://github.com/dongri/DongriToken)
5. [**ERC20**](https://github.com/OpenZeppelin/zeppelin-solidity/tree/master/contracts/token/ERC20)
6. [**OurToken**](https://github.com/Kubide/solidity-Boilerplate/blob/master/contracts/OurToken.sol)

[provider](https://www.npmjs.com/package/truffle-wallet-provider)