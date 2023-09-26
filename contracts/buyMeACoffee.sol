// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract BuyMeACoffee {
    struct Memo {
        address from;
        uint256 time;
        string name;
        string message;
    }

    Memo[] memos;

    address payable owner;

    event Newmemo(
        address indexed from,
        uint256 timestamp,
        string name,
        string message
    );

    constructor() {
        owner = payable(msg.sender);
    }

    function getMemos() external view returns (Memo[] memory) {
        return memos;
    }

    function buyCoffee(
        string memory _name,
        string memory _message
    ) public payable {
        require(msg.value > 0, "can't buy coffee for free");
        memos.push(
            Memo({
                from: msg.sender,
                time: block.timestamp,
                name: _name,
                message: _message
            })
        );

        emit Newmemo(msg.sender, block.timestamp, _name, _message);
    }

    function withdrawTips() external {
        require(owner == msg.sender, "ony owner can withdraw tips");
        require(owner.send(address(this).balance));
    }
}
