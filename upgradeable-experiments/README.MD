
## Step by Step

[Step by Step tutorial](https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-truffle/3579)


```shell
mkdir mycontract && cd mycontract
```
```shell
npm init -y
```
```shell
npm i --save-dev truffle
```
```shell
npx truffle init
```
```shell
npm i --save-dev @openzeppelin/truffle-upgrades
```

Create Box.sol  
Create Box.test.js  
Create Box.proxy.test.js  
```shell
 npx truffle test
```
Create 2_deploy_box.js

```javascript
// migrations/2_deploy_box.js
const Box = artifacts.require('Box');
 
const { deployProxy } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer) {
  await deployProxy(Box, [42], { deployer, initializer: 'store' });
};
```

Add wallet
```shell
npm install @truffle/hdwallet-provider
```

[Connect to public network](https://docs.openzeppelin.com/learn/connecting-to-public-test-networks)

Get console for the specific network
```shell
npx truffle console --network rinkeby
```
Get All accounts
```shell
accounts
```
Get first address
```shell
await web3.eth.getBalance(accounts[0])
```
Get an address of the contract
```shell
box = await Box.deployed()
```
Other commands
```shell
await box.store(42)
```
How to execute script in a network
```shell
npx truffle exec --network development ./scripts/index.js
```


## References

1. https://docs.openzeppelin.com/learn/
2. https://docs.openzeppelin.com/upgrades-plugins/1.x/
3. https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-truffle/3579
