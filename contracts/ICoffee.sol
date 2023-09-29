// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IBuyCoffee {
    function getMemos() external;

    function buyCoffee(
        string memory _name,
        string memory _message
    ) external payable;

    function withdrawTips() external;
}
