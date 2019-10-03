export const storage = {
  address: {
    ropsten: "0x0c3d8bf736589fec99ad62fd4bcc81de447b3541",
    rinkeby: "0x6cC14e6463e5A47a3E35bB5Ff23bfB4d2AdbEd12",
    kovan: "0x9df474a009399a5bf96544207346302fff3d98ca",
    local: process.env.REACT_APP_CONTRACT_LOCAL
  },
  abi: [
    {
      "constant": false,
      "inputs": [],
      "name": "resume",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "TASK_REQUIRES_INFO",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "numChecklists",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "checklists",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "createAt",
          "type": "uint256"
        },
        {
          "name": "status",
          "type": "uint8"
        },
        {
          "name": "numTasks",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "assignments",
      "outputs": [
        {
          "name": "numAssignments",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "finish",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "running",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "TASK_REQUIRES_IMAGE",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "numInspections",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "payable": true,
      "stateMutability": "payable",
      "type": "fallback"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "checklist",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "name",
          "type": "string"
        }
      ],
      "name": "NewChecklist",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "checklist",
          "type": "uint256"
        }
      ],
      "name": "ChecklistReady",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "checklist",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "task",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "rules",
          "type": "uint8"
        },
        {
          "indexed": false,
          "name": "description",
          "type": "string"
        }
      ],
      "name": "NewTask",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "inspection",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "checklist",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "accountable",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "deadline",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "id",
          "type": "bytes32"
        }
      ],
      "name": "AssignInspection",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "name": "inspection",
          "type": "uint256"
        }
      ],
      "name": "AssignmentDone",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_checklist",
          "type": "uint256"
        },
        {
          "name": "_accountable",
          "type": "address"
        },
        {
          "name": "_deadline",
          "type": "uint256"
        },
        {
          "name": "_id",
          "type": "bytes32"
        }
      ],
      "name": "assignInspection",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_accountable",
          "type": "address"
        },
        {
          "name": "_assignment",
          "type": "uint256"
        }
      ],
      "name": "getAssignment",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint8"
        },
        {
          "name": "",
          "type": "uint256"
        },
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_accountable",
          "type": "address"
        },
        {
          "name": "_assignment",
          "type": "uint256"
        },
        {
          "name": "_task",
          "type": "uint8"
        }
      ],
      "name": "getCheck",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        },
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assignment",
          "type": "uint256"
        },
        {
          "name": "_task",
          "type": "uint8"
        },
        {
          "name": "_ok",
          "type": "bool"
        },
        {
          "name": "_info",
          "type": "string"
        },
        {
          "name": "_image",
          "type": "string"
        }
      ],
      "name": "executeTask",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "createChecklist",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_checklist",
          "type": "uint256"
        },
        {
          "name": "_description",
          "type": "string"
        },
        {
          "name": "_rules",
          "type": "uint8"
        }
      ],
      "name": "addTask",
      "outputs": [
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_checklist",
          "type": "uint256"
        },
        {
          "name": "_task",
          "type": "uint8"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "name": "",
          "type": "string"
        },
        {
          "name": "",
          "type": "uint8"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_checklist",
          "type": "uint256"
        }
      ],
      "name": "setChecklistReady",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_assignment",
          "type": "uint256"
        }
      ],
      "name": "setAssignmentDone",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
}