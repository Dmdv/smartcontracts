
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

Add Wallet
```shell
npm install @truffle/hdwallet-provider
```
[Connect to public network](https://docs.openzeppelin.com/learn/connecting-to-public-test-networks)

Get console for the specific network
```shell
npx truffle console --network rinkeby
```
Migrate
```shell
truffle migrate --network rinkeby
```

Migrate 2 deployment only
```shell
truffle migrate -f 2 --network rinkeby
```

Get All Accounts
```shell
accounts
```
Get First Address
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

### Create local testing enironment

```shell
npm install --save-dev ganache-cli
```

### Run your node or instead run ganache UI

```shell
npx ganache-cli --deterministic
```

### Run migration in the created network

```shell
npx truffle migrate --network development
```

### Intetraction with deployed Box
```shell
$ npx truffle console --network rinkeby
truffle(rinkeby)> box = await Box.deployed()
truffle(rinkeby)> box.address
'0xF325bB49f91445F97241Ec5C286f90215a7E3BC6'
truffle(rinkeby)> (await box.retrieve()).toString()
'42'
```

## Transfer control of upgrades to a Gnosis Safe  
https://help.gnosis-safe.io/en/articles/3876461-create-a-safe-multisig

3_transfer_ownership.js

```javascript
// migrations/3_transfer_ownership.js
const { admin } = require('@openzeppelin/truffle-upgrades');
 
module.exports = async function (deployer, network) {
  // Use address of your Gnosis Safe
  const gnosisSafe = '0x1c14600daeca8852BA559CC8EdB1C383B8825906';
 
  // Don't change ProxyAdmin ownership for our test network
  if (network !== 'test') {
    // The owner of the ProxyAdmin can upgrade our contracts
    await admin.transferProxyAdminOwnership(gnosisSafe);
  }
};
```

```shell
npx truffle migrate --network rinkeby
```

## Create a new version of our implementation

BoxV2.sol  
BoxV2.test.js  
BoxV2.proxy.test.js

```shell
npx truffle test
npx truffle migrate --network rinkeby
```
Interacting with deployed version

```shell
$ npx truffle console --network rinkeby
truffle(rinkeby)> box = await Box.deployed()
truffle(rinkeby)> box.address
'0xF325bB49f91445F97241Ec5C286f90215a7E3BC6'
truffle(rinkeby)> (await box.retrieve()).toString()
'42'
```

## Deploy the new implementation

4_prepare_upgrade_boxv2.js

`We can run the migration on the Rinkeby network to deploy the new implementation. Note: We need to skip dry run when running this migration.`

```shell
npx truffle migrate --network rinkeby
```


## References

1. https://docs.openzeppelin.com/learn/
2. https://docs.openzeppelin.com/upgrades-plugins/1.x/
3. https://forum.openzeppelin.com/t/openzeppelin-upgrades-step-by-step-tutorial-for-truffle/3579
