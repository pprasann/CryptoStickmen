//SPDX-License_Identifier: MIT
pragma solidity >=0.8.0;

import "./StickmenFactory.sol";

contract StickmenHelper is StickmenFactory {

    uint levelUpFee = 0.001 ether;

    modifier aboveLevel(uint _level, uint _stickId) {
        require(stickmen[_stickId].level >= _level);
        _;
    }

    modifier onlyOwnerOf(uint _stickId) {
        require(stickIdToOwner[_stickId] == msg.sender);
        _;
        
    }

    // function kill() public onlyOwner {
    //     selfdestruct(owner());
    // }

    function getStickmenByOwner(address _owner) external view returns(uint[] memory) {
        uint[] memory result = new uint[](addyToStickCount[_owner]);
        uint counter = 0;
        for (uint i = 0; i < stickmen.length; i++) {
            if (stickIdToOwner[i] == _owner) {
                result[counter] = i;
                counter++;
            }
        }
        return result;
    }
    
//     function withdraw() external onlyOwner {
//         address payable _owner = address(uint160(owner()));
//         _owner.transfer(address(this).balance);
//   }

//     function setLevelUpFee(uint _fee) external onlyOwner {
//         levelUpFee = _fee;
//   }

    // function levelUp(uint _stickId) external payable {
    //     require(msg.value == levelUpFee);
    //     stickmen[_stickId].level++;
    // }

    function _triggerCooldown(Stickmen storage _stickmen) internal view returns (bool) {
        return (_stickmen.readyTime <= block.timestamp);
    }

    function levelUp(uint _stickId) external payable {
    require(msg.value == levelUpFee);
    stickmen[_stickId].level = stickmen[_stickId].level++;
    }



}