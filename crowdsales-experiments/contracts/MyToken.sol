// SPDX-License-Identifier: MIT
pragma solidity 0.7.5;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/math/SafeMath.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("My Cappuchino token", "CAPPU") {
        _mint(msg.sender, initialSupply);
    }
}