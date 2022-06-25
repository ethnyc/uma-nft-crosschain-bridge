//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "./Bridge.sol";

contract MockUMA {
    function call(address bridge) public {
        console.log("MockUMA:call");
        Bridge(bridge).xReceive();
    }
}
