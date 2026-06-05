// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test} from "forge-std/Test.sol";
import {Counter} from "../src/Counter.sol";

contract CounterTest is Test {
    Counter public counter;

    function setUp() public {
        counter = new Counter();
        counter.setNumber(0);
    }

    function test_Increment() public {
        counter.increment();
        assertEq(counter.number(), 1);
    }

    function testFuzz_SetNumber(uint256 x) public {
        counter.setNumber(x);
        assertEq(counter.number(), x);
    }

    function test_AddToNumber(uint256 x) public {
        uint256 initial = counter.number();
        counter.addToNumber(x);
        uint256 result = counter.number();
        assertEq(result, initial + x);
    }

    function test_Add(uint256 a, uint256 b) public view {
        uint256 result = counter.add(a, b);
        assertEq(result, a + b);
    }
}
