# Tests and deployment steps

### Local testing

For local testing you can use custom script

```javascript
// scripts/index.js
module.exports = async function main(callback) {
  try {
    // Our code will go here
    // Retrieve accounts from the local node
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};
```

which may run like this

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

