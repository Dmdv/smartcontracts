const MyToken = artifacts.require("./MyToken.sol");
const Box = artifacts.require("Box");

module.exports = async function(deployer) {
  await deployer.deploy(Box);
  await deployer.deploy(MyToken, 10000000);
};
