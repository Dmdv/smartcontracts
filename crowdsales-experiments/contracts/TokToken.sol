// SPDX-License-Identifier: MIT
pragma solidity >=0.7.5 <=0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/presets/ERC20PresetMinterPauserUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";

contract TokToken is
    Initializable,
    ERC20PresetMinterPauserUpgradeable,
    OwnableUpgradeable
{
    function initialize(string memory name, string memory symbol)
        public
        override
        initializer
    {
        ERC20PresetMinterPauserUpgradeable.initialize(name, symbol);
        _mint(msg.sender, 500000000 ether);
    }
}
