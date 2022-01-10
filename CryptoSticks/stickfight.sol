//SPDX-License_Identifier: MIT
pragma solidity >=0.8.0;

import "./stickmenhelper.sol";

contract StickFight is StickmenHelper {
    
    uint randNonce = 0;
    //Rock = 0
    //Paper = 1
    //Scissors = 2
    function randomPick(uint _modulus, uint _id) internal returns(uint) {
        randNonce++;
        return uint(keccak256(abi.encodePacked(block.timestamp,_id, randNonce))) % _modulus;
        //timestamp of now, msg.sender, and randNonce combine with modulus 3
    }
    
    function rpsFight(uint _stickId, uint _targetId) public onlyOwnerOf( _stickId) {
        Stickmen storage myStick = stickmen[_stickId];
        Stickmen storage enemyStick = stickmen[_targetId];
        uint randStick = randomPick(3, _stickId);
        randNonce+=100;
        uint randEnemy = randomPick(3, _targetId);
        //Rock vs Rock = TIE
        if(randStick==0 && randEnemy==0) {
            rpsFight(_stickId, _targetId);
        }
        //Rock vs Paper = LOSE
        else if(randStick==0 && randEnemy==1) {
            myStick.lossCount++;
            enemyStick.winCount++;
        }

        //Rock vs Scissors = WIN
        else if(randStick==0 && randEnemy==2) {
            myStick.winCount++;
            myStick.level++;
            enemyStick.lossCount++;
        }
        //Paper vs Rock = WIN
        else if(randStick==1 && randEnemy==0) {
            myStick.winCount++;
            myStick.level++;
            enemyStick.lossCount++;
        }
        //Paper vs Paper = TIE
        else if(randStick==1 && randEnemy==1) {
            rpsFight(_stickId, _targetId);
        }
        //Paper vs Scissors = LOSE
        else if(randStick==1 && randEnemy==2) {
            myStick.lossCount++;
            enemyStick.winCount++;
        }
        //Scissors vs Rock = LOSE
        else if(randStick==1 && randEnemy==0) {
            myStick.lossCount++;
            enemyStick.winCount++;
        }
        //Scissors vs Paper = WIN
        else if(randStick==1 && randEnemy==0) {
            myStick.winCount++;
            myStick.level++;
            enemyStick.lossCount++;
        }
        //Scissors vs Scissors = TIE
        else {
            rpsFight(_stickId, _targetId);
        }
        
        _triggerCooldown(myStick);

    }

}