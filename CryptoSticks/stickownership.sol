//SPDX-License_Identifier: MIT
pragma solidity >=0.8.0;

import "./stickfight.sol";
import "./erc721.sol";

/// @title StickOwnership
/// @author Prithvi Prasanna
/// @dev Allowing transfering and collection of Stickmen

abstract contract StickmenOwnership is StickFight, ERC721 {
    
    mapping (uint => address) stickApproval;
    
    function balanceOf(address _owner) external view override returns (uint256) {
        return addyToStickCount[_owner];
    }

    function ownerOf(uint256 _tokenId) external view override returns (address) {
        return stickIdToOwner[_tokenId];
    }

    function _transfer(address _from, address _to, uint256 _tokenId) private {
        addyToStickCount[_from]--;
        addyToStickCount[_to]++;
        stickIdToOwner[_tokenId] = _to; //transfer stick address onwards
        emit Transfer(_from, _to, _tokenId);

    }

    function transferFrom(address _from, address _to, uint256 _tokenId) external override payable {
        require(stickIdToOwner[_tokenId] == msg.sender); //checking to see if owner is authrozing transfer
        _transfer(_from, _to, _tokenId);
    }

    function approve(address _approved, uint256 _tokenId) external override payable onlyOwnerOf(_tokenId) {
        stickApproval[_tokenId] = _approved;
        emit Approval(msg.sender, _approved, _tokenId);
    }

}