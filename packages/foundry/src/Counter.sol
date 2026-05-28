// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Counter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        number = newNumber;
    }

    function increment() public {
        number++;
    }

    function addToNumber(uint256 value) public {
        number += value;
    }

    function add(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }
}
