//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Bridge {
    address private _umaContract;

    event Send();
    event Receive();

    constructor(address umaContract) {
        _umaContract = umaContract;
    }

    modifier onlyUmaContract() {
        console.log("Bridge:onlyUmaContract");
        require(msg.sender == _umaContract, "Bridge: msg sender invalid");
        console.log("Bridge:onlyUmaContract:passed");
        _;
    }

    function xSend() public {
        console.log("Bridge:xSend");
        emit Send();
    }

    function xReceive() public onlyUmaContract {
        console.log("Bridge:xReceive");
        emit Receive();
    }
}
