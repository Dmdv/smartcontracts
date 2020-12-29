// Load dependencies

// npm install --save-dev @openzeppelin/test-environment

// Run with npm test: "mocha --exit --recursive"

// Once you require the library from your JavaScript code,
// it will automatically run a local testing blockchain for you.
// It also exports a list of accounts that have been pre-funded with Ether
// and convenient ways to load your contracts from their compiled artifacts,
// among other utilities.

// https://docs.openzeppelin.com/learn/writing-automated-tests#setting-up-a-testing-environment

// Test environment API:
// https://docs.openzeppelin.com/test-environment/0.1/api

const { accounts, contract } = require('@openzeppelin/test-environment');
const { expect } = require('chai');

// Load compiled artifacts
const Box = contract.fromArtifact('Box');

// Start test block
describe('Box with test-environment', function () {
    const [ owner ] = accounts;

    beforeEach(async function () {
        // Deploy a new Box contract for each test
        this.contract = await Box.new({ from: owner });
    });

    // Test case
    it('retrieve returns a value previously stored', async function () {
        // Store a value - recall that only the owner account can do this!
        await this.contract.store(42, { from: owner });

        // Test if the returned value is the same one
        // Note that we need to use strings to compare the 256 bit integers
        expect((await this.contract.retrieve()).toString()).to.equal('42');
    });
});
