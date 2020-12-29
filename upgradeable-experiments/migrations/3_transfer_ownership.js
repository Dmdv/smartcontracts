// migrations/3_transfer_ownership.js
const { admin } = require('@openzeppelin/truffle-upgrades');

module.exports = async function (deployer, network) {
    // Use address of your Gnosis Safe
    const gnosisSafe = '0x860FA46F170a87dF44D7bB867AA4a5D2813127c1';

    // Don't change ProxyAdmin ownership for our test network
    if (network !== 'test') {
        console.log("This is the network: " + network);
        // The owner of the ProxyAdmin can upgrade our contracts
        await admin.transferProxyAdminOwnership(gnosisSafe);
    }
};
