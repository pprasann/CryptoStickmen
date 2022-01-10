//SPDX-License_Identifier: MIT
pragma solidity >=0.8.0;

import "./ownable.sol";

contract StickmenFactory is Ownable {

    event NewStickmen(uint stickId, string name, uint dna);
    uint dnaDigits = 10; //2 head, body, legs, arms, hat
    uint dnaModulus = 10 ** dnaDigits;
    uint cooldownTime = 30 minutes;

    struct Stickmen {
        string name;
        uint dna;
        uint32 level;
        uint32 readyTime;
        uint32 winCount;
        uint32 lossCount;
    }


    Stickmen[] public stickmen; //dynamic stickmen array of Stickmen structs
    mapping (uint => address) stickIdToOwner;
    mapping (address => uint) addyToStickCount;

    //using memory to find local vars of struct, arrays or mappings
    //function arguements are always in memory
    function _createStickmen(string memory _name, uint _dna) private {
        stickmen.push(Stickmen(_name, _dna, 1 , uint32(block.timestamp + cooldownTime),0,0));
        uint id = stickmen.length - 1;
        stickIdToOwner[id] = msg.sender; //connecting stickId to current sender
        addyToStickCount[msg.sender]++; 
        emit NewStickmen(id, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns(uint) {
        uint rand = uint256(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

    function createRandomStickmen(string memory _name) public {
        require(addyToStickCount[msg.sender] == 0);
        uint randDna = _generateRandomDna(_name);
        _createStickmen(_name, randDna);
    }


}
