var cryptoSticksABI = [{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"stickId","type":"uint256"},{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"dna","type":"uint256"}],"name":"NewStickmen","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"createRandomStickmen","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"stickmen","outputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"dna","type":"uint256"},{"internalType":"uint32","name":"level","type":"uint32"},{"internalType":"uint32","name":"readyTime","type":"uint32"},{"internalType":"uint32","name":"winCount","type":"uint32"},{"internalType":"uint32","name":"lossCount","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]


// var cryptoSticksABI = [
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_approved",
//           "type": "address"
//         },
//         {
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "approve",
//       "outputs": [],
//       "payable": true,
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_stickId",
//           "type": "uint256"
//         }
//       ],
//       "name": "levelUp",
//       "outputs": [],
//       "payable": true,
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_stickId",
//           "type": "uint256"
//         },
//         {
//           "name": "_kittyId",
//           "type": "uint256"
//         }
//       ],
//       "name": "feedOnKitty",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "stickmen",
//       "outputs": [
//         {
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "name": "dna",
//           "type": "uint256"
//         },
//         {
//           "name": "level",
//           "type": "uint32"
//         },
//         {
//           "name": "readyTime",
//           "type": "uint32"
//         },
//         {
//           "name": "winCount",
//           "type": "uint32"
//         },
//         {
//           "name": "lossCount",
//           "type": "uint32"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [],
//       "name": "withdraw",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "_owner",
//           "type": "address"
//         }
//       ],
//       "name": "getZombiesByOwner",
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256[]"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "name": "zombieToOwner",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_address",
//           "type": "address"
//         }
//       ],
//       "name": "setKittyContractAddress",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_zombieId",
//           "type": "uint256"
//         },
//         {
//           "name": "_newDna",
//           "type": "uint256"
//         }
//       ],
//       "name": "changeDna",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "ownerOf",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [
//         {
//           "name": "_owner",
//           "type": "address"
//         }
//       ],
//       "name": "balanceOf",
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_name",
//           "type": "string"
//         }
//       ],
//       "name": "createRandomZombie",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "owner",
//       "outputs": [
//         {
//           "name": "",
//           "type": "address"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_from",
//           "type": "address"
//         },
//         {
//           "name": "_to",
//           "type": "address"
//         },
//         {
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "transferFrom",
//       "outputs": [],
//       "payable": true,
//       "stateMutability": "payable",
//       "type": "function"
//     },
//     {
//       "constant": true,
//       "inputs": [],
//       "name": "getAllZombies",
//       "outputs": [
//         {
//           "name": "",
//           "type": "uint256[]"
//         }
//       ],
//       "payable": false,
//       "stateMutability": "view",
//       "type": "function"
//     },
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_zombieId",
//           "type": "uint256"
//         },
//         {
//           "name": "_newName",
//           "type": "string"
//         }
//       ],
//       "name": "changeName",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_fee",
//           "type": "uint256"
//         }
//       ],
//       "name": "setLevelUpFee",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "_zombieId",
//           "type": "uint256"
//         },
//         {
//           "name": "_targetId",
//           "type": "uint256"
//         }
//       ],
//       "name": "attack",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "constant": false,
//       "inputs": [
//         {
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "transferOwnership",
//       "outputs": [],
//       "payable": false,
//       "stateMutability": "nonpayable",
//       "type": "function"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "name": "_from",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "name": "_to",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Transfer",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "name": "_owner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "name": "_approved",
//           "type": "address"
//         },
//         {
//           "indexed": false,
//           "name": "_tokenId",
//           "type": "uint256"
//         }
//       ],
//       "name": "Approval",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "name": "attackResult",
//           "type": "bool"
//         },
//         {
//           "indexed": false,
//           "name": "winCount",
//           "type": "uint16"
//         },
//         {
//           "indexed": false,
//           "name": "lossCount",
//           "type": "uint16"
//         }
//       ],
//       "name": "AttackResult",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": false,
//           "name": "zombieId",
//           "type": "uint256"
//         },
//         {
//           "indexed": false,
//           "name": "name",
//           "type": "string"
//         },
//         {
//           "indexed": false,
//           "name": "dna",
//           "type": "uint256"
//         }
//       ],
//       "name": "NewZombie",
//       "type": "event"
//     },
//     {
//       "anonymous": false,
//       "inputs": [
//         {
//           "indexed": true,
//           "name": "previousOwner",
//           "type": "address"
//         },
//         {
//           "indexed": true,
//           "name": "newOwner",
//           "type": "address"
//         }
//       ],
//       "name": "OwnershipTransferred",
//       "type": "event"
//     }
//   ]
  