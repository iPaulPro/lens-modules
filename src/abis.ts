//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControlFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlFactoryAbi = [
  {
    type: "constructor",
    inputs: [{ name: "lock", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
    ],
    name: "deployOwnerAdminOnlyAccessControl",
    outputs: [
      {
        name: "",
        internalType: "contract IRoleBasedAccessControl",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_AccessControlFactory_OwnerAdminDeployment",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccessControlled
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accessControlledAbi = [
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "newAccessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "setAccessControl",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlUpdated",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Account
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accountAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "nativeGHO", internalType: "address", type: "address" },
      { name: "wrappedGHO", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    inputs: [
      { name: "selector", internalType: "bytes4", type: "bytes4" },
      { name: "encodedParams", internalType: "bytes", type: "bytes" },
    ],
    name: "abiDecodeForKnownSelectorHelper",
    outputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "address", type: "address" },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "accountManager", internalType: "address", type: "address" },
      {
        name: "permissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
    ],
    name: "addAccountManager",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      { name: "addedBy", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "canBeAddedToGroup",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "executor", internalType: "address", type: "address" }],
    name: "canExecuteTransactions",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "executor", internalType: "address", type: "address" }],
    name: "canSetMetadataURI",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "allowanceChanges",
        internalType: "struct AllowanceChange[]",
        type: "tuple[]",
        components: [
          { name: "spender", internalType: "address", type: "address" },
          {
            name: "allowanceDecreases",
            internalType: "struct Allowance[]",
            type: "tuple[]",
            components: [
              { name: "currency", internalType: "address", type: "address" },
              { name: "byAmount", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "allowanceIncreases",
            internalType: "struct Allowance[]",
            type: "tuple[]",
            components: [
              { name: "currency", internalType: "address", type: "address" },
              { name: "byAmount", internalType: "uint256", type: "uint256" },
            ],
          },
        ],
      },
    ],
    name: "changeAllowance",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "managers", internalType: "address[]", type: "address[]" }],
    name: "clearAllAllowances",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "executeTransaction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "transactions",
        internalType: "struct Transaction[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "value", internalType: "uint256", type: "uint256" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "executeTransactions",
    outputs: [{ name: "", internalType: "bytes[]", type: "bytes[]" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "accountManager", internalType: "address", type: "address" },
      { name: "currency", internalType: "address", type: "address" },
    ],
    name: "getAccountManagerAllowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "getAccountManagerPermissions",
    outputs: [
      {
        name: "",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "accountManagers", internalType: "address[]", type: "address[]" },
      {
        name: "accountManagerPermissions",
        internalType: "struct AccountManagerPermissions[]",
        type: "tuple[]",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "isAccountManager",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "removeAccountManager",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "removeOwnerAsManager",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "accountManager", internalType: "address", type: "address" },
      {
        name: "accountManagerPermissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
    ],
    name: "updateAccountManagerPermissions",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accountManager",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "permissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Account_AccountManagerAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accountManager",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_Account_AccountManagerRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accountManager",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "permissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Account_AccountManagerUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_AllAllowancesCleared",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "currency",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newAllowance",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Lens_Account_AllowanceDecreased",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "currency",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newAllowance",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Lens_Account_AllowanceIncreased",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Account_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Account_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Account_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Account_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "target",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "executor",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_TransactionExecuted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InsufficientAllowance" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotAllowed" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccountBlockingRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accountBlockingRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "source", internalType: "address", type: "address" },
      { name: "target", internalType: "address", type: "address" },
    ],
    name: "blockUser",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "source", internalType: "address", type: "address" },
      { name: "blockTarget", internalType: "address", type: "address" },
    ],
    name: "isBlocked",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processDeletePost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollowRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processPostRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnfollow",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "source", internalType: "address", type: "address" },
      { name: "target", internalType: "address", type: "address" },
    ],
    name: "unblockUser",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "target",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_AccountBlocking_AccountBlocked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "target",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_AccountBlocking_AccountUnblocked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "ActionOnSelf" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "Blocked" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AccountFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const accountFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "beacon", internalType: "address", type: "address" },
      { name: "lock", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "accountManagers", internalType: "address[]", type: "address[]" },
      {
        name: "accountManagersPermissions",
        internalType: "struct AccountManagerPermissions[]",
        type: "tuple[]",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployAccount",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "accountManagers",
        internalType: "address[]",
        type: "address[]",
        indexed: false,
      },
      {
        name: "accountManagersPermissions",
        internalType: "struct AccountManagerPermissions[]",
        type: "tuple[]",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Account_Created",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ActionHub
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const actionHubAbi = [
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configureAccountAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configurePostAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "disableAccountAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "disablePostAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "enableAccountAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "enablePostAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "executeAccountAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "action", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "executePostAction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "action", internalType: "address", type: "address" }],
    name: "signalUniversalAccountAction",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "action", internalType: "address", type: "address" }],
    name: "signalUniversalPostAction",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_AccountAction_Configured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_AccountAction_Disabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_AccountAction_Enabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_AccountAction_Executed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_AccountAction_Reconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ActionHub_AccountAction_Universal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "feed",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "postAuthor",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_PostAction_Configured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "feed",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "postAuthor",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_PostAction_Disabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "feed",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "postAuthor",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_PostAction_Enabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "feed",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "postAuthor",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_PostAction_Executed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "msgSender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "feed",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "postAuthor",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "returnData",
        internalType: "bytes",
        type: "bytes",
        indexed: false,
      },
    ],
    name: "Lens_ActionHub_PostAction_Reconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "action",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ActionHub_PostAction_Universal",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  { type: "error", inputs: [], name: "Disabled" },
  { type: "error", inputs: [], name: "InvalidSourceStampOriginalMsgSender" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "UnexpectedContractImpl" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AdditionRemovalPidGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const additionRemovalPidGroupRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [],
    name: "PARAM__ACCESS_CONTROL",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// App
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const appAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [{ name: "feeds", internalType: "address[]", type: "address[]" }],
    name: "addFeeds",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "groups", internalType: "address[]", type: "address[]" }],
    name: "addGroups",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "signers", internalType: "address[]", type: "address[]" }],
    name: "addSigners",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "nonce", internalType: "uint256", type: "uint256" }],
    name: "cancelNonce",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultFeed",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultGraph",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultGroup",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultNamespace",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultPaymaster",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getFeeds",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getGraphs",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getGroups",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNamespaces",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getPaymaster",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getSigners",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasury",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "isSourceStampVerificationEnabled",
        internalType: "bool",
        type: "bool",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      {
        name: "initialProps",
        internalType: "struct AppInitialProperties",
        type: "tuple",
        components: [
          { name: "graph", internalType: "address", type: "address" },
          { name: "feeds", internalType: "address[]", type: "address[]" },
          { name: "namespace", internalType: "address", type: "address" },
          { name: "groups", internalType: "address[]", type: "address[]" },
          { name: "defaultFeed", internalType: "address", type: "address" },
          { name: "signers", internalType: "address[]", type: "address[]" },
          { name: "paymaster", internalType: "address", type: "address" },
          { name: "treasury", internalType: "address", type: "address" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "feeds", internalType: "address[]", type: "address[]" }],
    name: "removeFeeds",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "groups", internalType: "address[]", type: "address[]" }],
    name: "removeGroups",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "signers", internalType: "address[]", type: "address[]" }],
    name: "removeSigners",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "newAccessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "setAccessControl",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "feed", internalType: "address", type: "address" }],
    name: "setDefaultFeed",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "group", internalType: "address", type: "address" }],
    name: "setDefaultGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "graph", internalType: "address", type: "address" }],
    name: "setGraph",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "namespace", internalType: "address", type: "address" }],
    name: "setNamespace",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "paymaster", internalType: "address", type: "address" }],
    name: "setPaymaster",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "isEnabled", internalType: "bool", type: "bool" }],
    name: "setSourceStampVerification",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "treasury", internalType: "address", type: "address" }],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "validateSource",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "feed", internalType: "address", type: "address", indexed: true }],
    name: "Lens_App_DefaultFeedSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_DefaultGroupSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_App_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_App_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_App_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "feed", internalType: "address", type: "address", indexed: true }],
    name: "Lens_App_FeedAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "feed", internalType: "address", type: "address", indexed: true }],
    name: "Lens_App_FeedRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "graph",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GraphAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "graph",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GraphRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GroupAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GroupRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_App_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "namespace",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_NamespaceAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "namespace",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_NamespaceRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "paymaster",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_PaymasterAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "paymaster",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_PaymasterRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "signer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_SignerAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "signer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_SignerRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "isEnabled", internalType: "bool", type: "bool", indexed: true }],
    name: "Lens_App_SourceStampVerificationSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "treasury",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_TreasurySet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "nonce",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Lens_Source_NonceUsed",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "Expired" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NonceUsed" },
  { type: "error", inputs: [], name: "NotFound" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "WrongSigner" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AppFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const appFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "beacon", internalType: "address", type: "address" },
      { name: "lock", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "sourceStampVerificationEnabled",
        internalType: "bool",
        type: "bool",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "proxyAdminOwner", internalType: "address", type: "address" },
      {
        name: "initialProperties",
        internalType: "struct AppInitialProperties",
        type: "tuple",
        components: [
          { name: "graph", internalType: "address", type: "address" },
          { name: "feeds", internalType: "address[]", type: "address[]" },
          { name: "namespace", internalType: "address", type: "address" },
          { name: "groups", internalType: "address[]", type: "address[]" },
          { name: "defaultFeed", internalType: "address", type: "address" },
          { name: "signers", internalType: "address[]", type: "address[]" },
          { name: "paymaster", internalType: "address", type: "address" },
          { name: "treasury", internalType: "address", type: "address" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployApp",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "app", internalType: "address", type: "address", indexed: true },
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_AppFactory_Deployment",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BanMemberGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const banMemberGroupRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [],
    name: "PARAM__ACCESS_CONTROL",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "PARAM__BAN_MEMBER",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "PID__BAN_MEMBER",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "PID__UNBAN_MEMBER",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      {
        name: "membersToBan",
        internalType: "struct BanMemberGroupRule.MemberBatchParams[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          {
            name: "customParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "ruleProcessingParams",
            internalType: "struct RuleProcessingParams[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
        ],
      },
    ],
    name: "ban",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "groupParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "groupRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "ban",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "isMemberBanned",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      { name: "accounts", internalType: "address[]", type: "address[]" },
    ],
    name: "unban",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "unban",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "bannedAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "bannedBy",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_BanMemberGroupRule_MemberBanned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "unbannedAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "unbannedBy",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_BanMemberGroupRule_MemberUnbanned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "Banned" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseAccountAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseAccountActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BasePostAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const basePostActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// BaseSource
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const baseSourceAbi = [
  {
    type: "function",
    inputs: [{ name: "nonce", internalType: "uint256", type: "uint256" }],
    name: "cancelNonce",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasury",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "validateSource",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "nonce",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Lens_Source_NonceUsed",
  },
  { type: "error", inputs: [], name: "Expired" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NonceUsed" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "WrongSigner" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155Holder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155HolderAbi = [
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "uint256[]", type: "uint256[]" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1155Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1155ReceiverAbi = [
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc165Abi = [
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967ProxyAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_logic", internalType: "address", type: "address" },
      { name: "_data", internalType: "bytes", type: "bytes" },
    ],
    stateMutability: "payable",
  },
  { type: "fallback", stateMutability: "payable" },
  { type: "receive", stateMutability: "payable" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "newAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "beacon",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "BeaconUpgraded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Upgrade
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UpgradeAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "newAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "beacon",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "BeaconUpgraded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC721Holder
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc721HolderAbi = [
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EntityExtraDataBased
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const entityExtraDataBasedAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Errors
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const errorsAbi = [
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "ActionOnSelf" },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "AlreadyExists" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "AutoUpgradeEnabled" },
  { type: "error", inputs: [], name: "Banned" },
  { type: "error", inputs: [], name: "Blocked" },
  { type: "error", inputs: [], name: "CannotFollowAgain" },
  { type: "error", inputs: [], name: "CannotHaveRules" },
  { type: "error", inputs: [], name: "CannotStartWithThat" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "Disabled" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "DuplicatedValue" },
  { type: "error", inputs: [], name: "Expired" },
  { type: "error", inputs: [], name: "FailedToTransferNative" },
  { type: "error", inputs: [], name: "Immutable" },
  { type: "error", inputs: [], name: "InsufficientAllowance" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "InvalidSignature" },
  { type: "error", inputs: [], name: "InvalidSourceStampOriginalMsgSender" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "Locked" },
  { type: "error", inputs: [], name: "NonceUsed" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "NotAMember" },
  { type: "error", inputs: [], name: "NotAllowed" },
  { type: "error", inputs: [], name: "NotEnough" },
  { type: "error", inputs: [], name: "NotEnoughBalance" },
  { type: "error", inputs: [], name: "NotFollowing" },
  { type: "error", inputs: [], name: "NotFound" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "SingleAnyOfRule" },
  { type: "error", inputs: [], name: "UnexpectedContractImpl" },
  { type: "error", inputs: [], name: "UnexpectedValue" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
  { type: "error", inputs: [], name: "Untrusted" },
  { type: "error", inputs: [], name: "UsernameAssigned" },
  { type: "error", inputs: [], name: "WrongSigner" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EventEmitter
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eventEmitterAbi = [
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log1EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog1",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log2EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog2",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log3EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "topic3", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog3",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log4EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "topic3", internalType: "bytes32", type: "bytes32" },
          { name: "topic4", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog4",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// EventEmitterEarly
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eventEmitterEarlyAbi = [
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log1EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog1",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log2EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog2",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log3EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "topic3", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog3",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log4EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "topic3", internalType: "bytes32", type: "bytes32" },
          { name: "topic4", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog4",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Events
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const eventsAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ExtraDataBased
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const extraDataBasedAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ExtraStorageBased
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const extraStorageBasedAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Feed
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const feedAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeFeedRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "changePostRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "createPost",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "deletePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "editPost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getAuthorPostSequentialId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getFeedRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "author", internalType: "address", type: "address" }],
    name: "getNextPostId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPost",
    outputs: [
      {
        name: "",
        internalType: "struct Post",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          {
            name: "authorPostSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "postSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "rootPostId", internalType: "uint256", type: "uint256" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          { name: "creationTimestamp", internalType: "uint80", type: "uint80" },
          { name: "creationSource", internalType: "address", type: "address" },
          {
            name: "lastUpdatedTimestamp",
            internalType: "uint80",
            type: "uint80",
          },
          {
            name: "lastUpdateSource",
            internalType: "address",
            type: "address",
          },
          { name: "isDeleted", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostAuthor",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "author", internalType: "address", type: "address" }],
    name: "getPostCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getPostCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getPostExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getPostRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostSequentialId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostUnchecked",
    outputs: [
      {
        name: "",
        internalType: "struct Post",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          {
            name: "authorPostSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "postSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "rootPostId", internalType: "uint256", type: "uint256" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          { name: "creationTimestamp", internalType: "uint80", type: "uint80" },
          { name: "creationSource", internalType: "address", type: "address" },
          {
            name: "lastUpdatedTimestamp",
            internalType: "uint80",
            type: "uint80",
          },
          {
            name: "lastUpdateSource",
            internalType: "address",
            type: "address",
          },
          { name: "isDeleted", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "postExists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "newAccessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "setAccessControl",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Feed_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Feed_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "localSequentialId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "rootPostId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostDeleted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newPostParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostEdited",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_Post_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Feed_Post_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_Post_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "CannotHaveRules" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "InvalidSourceStampOriginalMsgSender" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnexpectedValue" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FeedFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const feedFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "primitiveBeacon", internalType: "address", type: "address" },
      { name: "proxyAdminLock", internalType: "address", type: "address" },
      { name: "lensFactory", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "proxyAdminOwner", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployFeed",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "feed", internalType: "address", type: "address", indexed: true },
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_FeedFactory_Deployment",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// FollowersOnlyPostRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const followersOnlyPostRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "rootPostId", internalType: "uint256", type: "uint256" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotFollowing" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Graph
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const graphAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "ruleChangesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "changeFollowRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeGraphRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "followRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "follow",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "targetAccount", internalType: "address", type: "address" },
    ],
    name: "getFollow",
    outputs: [
      {
        name: "",
        internalType: "struct Follow",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getFollowRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "followedAccount", internalType: "address", type: "address" },
      { name: "followId", internalType: "uint256", type: "uint256" },
    ],
    name: "getFollowSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "followId", internalType: "uint256", type: "uint256" },
    ],
    name: "getFollowerById",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getFollowersCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getFollowingCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getGraphRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "targetAccount", internalType: "address", type: "address" },
    ],
    name: "isFollowing",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "newAccessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "setAccessControl",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToUnfollow", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unfollow",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Graph_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Graph_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Graph_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "followerAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accountToFollow",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "followId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "followRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Followed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Graph_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "followerAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accountToUnfollow",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "followId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Graph_Unfollowed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "ActionOnSelf" },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "AlreadyExists" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "CannotFollowAgain" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "InvalidSourceStampOriginalMsgSender" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "NotFollowing" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GraphFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const graphFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "primitiveBeacon", internalType: "address", type: "address" },
      { name: "proxyAdminLock", internalType: "address", type: "address" },
      { name: "lensFactory", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "proxyAdminOwner", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployGraph",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "graph",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_GraphFactory_Deployment",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Group
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const groupAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "membersToAdd",
        internalType: "struct Group.MemberBatchParams[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          {
            name: "customParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "ruleProcessingParams",
            internalType: "struct RuleProcessingParams[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "addMembers",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeGroupRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getGroupRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembership",
    outputs: [
      {
        name: "",
        internalType: "struct Membership",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembershipId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "membershipId", internalType: "uint256", type: "uint256" }],
    name: "getMembershipSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembershipTimestamp",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNumberOfMembers",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "foundingMember", internalType: "address", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "isMember",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "joinGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "leaveGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "membersToRemove",
        internalType: "struct Group.MemberBatchParams[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          {
            name: "customParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "ruleProcessingParams",
            internalType: "struct RuleProcessingParams[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "removeMembers",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "newAccessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "setAccessControl",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Group_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Group_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Group_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberJoined",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberLeft",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Group_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "InvalidSourceStampOriginalMsgSender" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "NotAllowed" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GroupFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const groupFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "primitiveBeacon", internalType: "address", type: "address" },
      { name: "proxyAdminLock", internalType: "address", type: "address" },
      { name: "lensFactory", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "proxyAdminOwner", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "foundingMember", internalType: "address", type: "address" },
    ],
    name: "deployGroup",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_GroupFactory_Deployment",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GroupGatedFeedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const groupGatedFeedRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processDeletePost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processPostRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotAMember" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// GroupGatedGraphRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const groupGatedGraphRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollowRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnfollow",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotAMember" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlAbi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "contractAddress", internalType: "address", type: "address" },
    ],
    name: "canChangeAccessControl",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getType",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasAccess",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccessControlled
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccessControlledAbi = [
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccount
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccountAbi = [
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    inputs: [
      { name: "accountManager", internalType: "address", type: "address" },
      {
        name: "accountManagerPermissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
    ],
    name: "addAccountManager",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "executor", internalType: "address", type: "address" }],
    name: "canExecuteTransactions",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "canSetMetadataURI",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "allowanceChanges",
        internalType: "struct AllowanceChange[]",
        type: "tuple[]",
        components: [
          { name: "spender", internalType: "address", type: "address" },
          {
            name: "allowanceDecreases",
            internalType: "struct Allowance[]",
            type: "tuple[]",
            components: [
              { name: "currency", internalType: "address", type: "address" },
              { name: "byAmount", internalType: "uint256", type: "uint256" },
            ],
          },
          {
            name: "allowanceIncreases",
            internalType: "struct Allowance[]",
            type: "tuple[]",
            components: [
              { name: "currency", internalType: "address", type: "address" },
              { name: "byAmount", internalType: "uint256", type: "uint256" },
            ],
          },
        ],
      },
    ],
    name: "changeAllowance",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "managers", internalType: "address[]", type: "address[]" }],
    name: "clearAllAllowances",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "executeTransaction",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "transactions",
        internalType: "struct Transaction[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "value", internalType: "uint256", type: "uint256" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "executeTransactions",
    outputs: [{ name: "", internalType: "bytes[]", type: "bytes[]" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "accountManager", internalType: "address", type: "address" },
      { name: "currency", internalType: "address", type: "address" },
    ],
    name: "getAccountManagerAllowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "getAccountManagerPermissions",
    outputs: [
      {
        name: "",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "isAccountManager",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "accountManager", internalType: "address", type: "address" }],
    name: "removeAccountManager",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "accountManager", internalType: "address", type: "address" },
      {
        name: "accountManagerPermissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
    ],
    name: "updateAccountManagerPermissions",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accountManager",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "permissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Account_AccountManagerAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accountManager",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_Account_AccountManagerRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accountManager",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "permissions",
        internalType: "struct AccountManagerPermissions",
        type: "tuple",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Account_AccountManagerUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_AllAllowancesCleared",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "currency",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newAllowance",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Lens_Account_AllowanceDecreased",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "currency",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newAllowance",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Lens_Account_AllowanceIncreased",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Account_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Account_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Account_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Account_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "target",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      { name: "data", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "executor",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Account_TransactionExecuted",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccountAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccountActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IAccountGroupAdditionSettings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAccountGroupAdditionSettingsAbi = [
  {
    type: "function",
    inputs: [
      { name: "group", internalType: "address", type: "address" },
      { name: "addedBy", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "canBeAddedToGroup",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IApp
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iAppAbi = [
  {
    type: "function",
    inputs: [{ name: "feeds", internalType: "address[]", type: "address[]" }],
    name: "addFeeds",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "groups", internalType: "address[]", type: "address[]" }],
    name: "addGroups",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "signers", internalType: "address[]", type: "address[]" }],
    name: "addSigners",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultFeed",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultGraph",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultGroup",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultNamespace",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getDefaultPaymaster",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getFeeds",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getGraphs",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getGroups",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNamespaces",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getPaymaster",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getSigners",
    outputs: [{ name: "", internalType: "address[]", type: "address[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasury",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "isSourceStampVerificationEnabled",
        internalType: "bool",
        type: "bool",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      {
        name: "initialProps",
        internalType: "struct AppInitialProperties",
        type: "tuple",
        components: [
          { name: "graph", internalType: "address", type: "address" },
          { name: "feeds", internalType: "address[]", type: "address[]" },
          { name: "namespace", internalType: "address", type: "address" },
          { name: "groups", internalType: "address[]", type: "address[]" },
          { name: "defaultFeed", internalType: "address", type: "address" },
          { name: "signers", internalType: "address[]", type: "address[]" },
          { name: "paymaster", internalType: "address", type: "address" },
          { name: "treasury", internalType: "address", type: "address" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "feeds", internalType: "address[]", type: "address[]" }],
    name: "removeFeeds",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "groups", internalType: "address[]", type: "address[]" }],
    name: "removeGroups",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "signers", internalType: "address[]", type: "address[]" }],
    name: "removeSigners",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "feed", internalType: "address", type: "address" }],
    name: "setDefaultFeed",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "group", internalType: "address", type: "address" }],
    name: "setDefaultGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "graph", internalType: "address", type: "address" }],
    name: "setGraph",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "namespace", internalType: "address", type: "address" }],
    name: "setNamespace",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "paymaster", internalType: "address", type: "address" }],
    name: "setPaymaster",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "isEnabled", internalType: "bool", type: "bool" }],
    name: "setSourceStampVerification",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "treasury", internalType: "address", type: "address" }],
    name: "setTreasury",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "feed", internalType: "address", type: "address", indexed: true }],
    name: "Lens_App_DefaultFeedSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_DefaultGroupSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_App_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_App_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_App_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "feed", internalType: "address", type: "address", indexed: true }],
    name: "Lens_App_FeedAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "feed", internalType: "address", type: "address", indexed: true }],
    name: "Lens_App_FeedRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "graph",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GraphAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "graph",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GraphRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GroupAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_GroupRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_App_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "namespace",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_NamespaceAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "namespace",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_NamespaceRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "paymaster",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_PaymasterAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "paymaster",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_PaymasterRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "signer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_SignerAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "signer",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_SignerRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "isEnabled", internalType: "bool", type: "bool", indexed: true }],
    name: "Lens_App_SourceStampVerificationSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "treasury",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_App_TreasurySet",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155Abi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
    ],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "accounts", internalType: "address[]", type: "address[]" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
    ],
    name: "balanceOfBatch",
    outputs: [{ name: "", internalType: "uint256[]", type: "uint256[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
      { name: "amounts", internalType: "uint256[]", type: "uint256[]" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeBatchTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "amount", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "ids",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false,
      },
      {
        name: "values",
        internalType: "uint256[]",
        type: "uint256[]",
        indexed: false,
      },
    ],
    name: "TransferBatch",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      { name: "id", internalType: "uint256", type: "uint256", indexed: false },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "TransferSingle",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "value", internalType: "string", type: "string", indexed: false },
      { name: "id", internalType: "uint256", type: "uint256", indexed: true },
    ],
    name: "URI",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ReceiverAbi = [
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "ids", internalType: "uint256[]", type: "uint256[]" },
      { name: "values", internalType: "uint256[]", type: "uint256[]" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155BatchReceived",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "id", internalType: "uint256", type: "uint256" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC1155Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC165
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc165Abi = [
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822Proxiable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1822ProxiableAbi = [
  {
    type: "function",
    inputs: [],
    name: "proxiableUUID",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1967
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1967Abi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "newAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "beacon",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "BeaconUpgraded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20Abi = [
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
    ],
    name: "allowance",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "spender", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    outputs: [{ name: "", internalType: "uint8", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transfer",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "spender",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "value",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: "function",
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "nonces",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "spender", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "deadline", internalType: "uint256", type: "uint256" },
      { name: "v", internalType: "uint8", type: "uint8" },
      { name: "r", internalType: "bytes32", type: "bytes32" },
      { name: "s", internalType: "bytes32", type: "bytes32" },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC4906Events
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc4906EventsAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "BatchMetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "MetadataUpdate",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721Abi = [
  {
    type: "function",
    inputs: [
      { name: "_approved", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceID", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_to", internalType: "address", type: "address", indexed: true },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Enumerable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721EnumerableAbi = [
  {
    type: "function",
    inputs: [
      { name: "_approved", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "_owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceID", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "_index", internalType: "uint256", type: "uint256" }],
    name: "tokenByIndex",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_owner", internalType: "address", type: "address" },
      { name: "_index", internalType: "uint256", type: "uint256" },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "totalSupply",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "_from", internalType: "address", type: "address" },
      { name: "_to", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "_operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_from",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "_to", internalType: "address", type: "address", indexed: true },
      {
        name: "_tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Metadata
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721MetadataAbi = [
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "operator", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "owner", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Namespace
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721NamespaceAbi = [
  {
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "accountOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassignAccountRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "unassignUsernameRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "assignRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "assignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeNamespaceRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "createUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "operator", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNamespace",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getNamespaceRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getTokenIdByUsername",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameAssignmentSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getUsernameByTokenId",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameCreationSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getUsernameExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "namespace", internalType: "string", type: "string" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "nftName", internalType: "string", type: "string" },
      { name: "nftSymbol", internalType: "string", type: "string" },
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "owner", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassigningRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "removalRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setUsernameExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unassignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "usernameOf",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Namespace_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Assigned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Username_Created",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Username_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Removed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_Username_Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "previousAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Unassigned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721ReceiverUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverUpgradeableAbi = [
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "from", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721TokenReceiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721TokenReceiverAbi = [
  {
    type: "function",
    inputs: [
      { name: "_operator", internalType: "address", type: "address" },
      { name: "_from", internalType: "address", type: "address" },
      { name: "_tokenId", internalType: "uint256", type: "uint256" },
      { name: "_data", internalType: "bytes", type: "bytes" },
    ],
    name: "onERC721Received",
    outputs: [{ name: "", internalType: "bytes4", type: "bytes4" }],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC7572
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc7572Abi = [
  {
    type: "function",
    inputs: [],
    name: "contractURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  { type: "event", anonymous: false, inputs: [], name: "ContractURIUpdated" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFeed
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFeedAbi = [
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeFeedRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "changePostRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "createPost",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "deletePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "editPost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getAuthorPostSequentialId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getFeedRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "author", internalType: "address", type: "address" }],
    name: "getNextPostId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPost",
    outputs: [
      {
        name: "",
        internalType: "struct Post",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          {
            name: "authorPostSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "postSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "rootPostId", internalType: "uint256", type: "uint256" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          { name: "creationTimestamp", internalType: "uint80", type: "uint80" },
          { name: "creationSource", internalType: "address", type: "address" },
          {
            name: "lastUpdatedTimestamp",
            internalType: "uint80",
            type: "uint80",
          },
          {
            name: "lastUpdateSource",
            internalType: "address",
            type: "address",
          },
          { name: "isDeleted", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostAuthor",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "author", internalType: "address", type: "address" }],
    name: "getPostCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getPostCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getPostExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getPostRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostSequentialId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostUnchecked",
    outputs: [
      {
        name: "",
        internalType: "struct Post",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          {
            name: "authorPostSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "postSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "rootPostId", internalType: "uint256", type: "uint256" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          { name: "creationTimestamp", internalType: "uint80", type: "uint80" },
          { name: "creationSource", internalType: "address", type: "address" },
          {
            name: "lastUpdatedTimestamp",
            internalType: "uint80",
            type: "uint80",
          },
          {
            name: "lastUpdateSource",
            internalType: "address",
            type: "address",
          },
          { name: "isDeleted", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "postExists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Feed_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Feed_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "localSequentialId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "rootPostId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostDeleted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newPostParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostEdited",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_Post_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Feed_Post_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_Post_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleSelectorEnabled",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFeedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFeedRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processDeletePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processPostRuleChanges",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IFollowRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iFollowRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGraph
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGraphAbi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "changeFollowRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeGraphRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "followRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "follow",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "followedAccount", internalType: "address", type: "address" },
    ],
    name: "getFollow",
    outputs: [
      {
        name: "",
        internalType: "struct Follow",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getFollowRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "followedAccount", internalType: "address", type: "address" },
      { name: "followId", internalType: "uint256", type: "uint256" },
    ],
    name: "getFollowSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "followId", internalType: "uint256", type: "uint256" },
    ],
    name: "getFollowerById",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getFollowersCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getFollowingCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getGraphRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "targetAccount", internalType: "address", type: "address" },
    ],
    name: "isFollowing",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToUnfollow", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unfollow",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Graph_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Graph_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Graph_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "followerAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accountToFollow",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "followId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "followRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Followed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Graph_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "followerAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accountToUnfollow",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "followId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Graph_Unfollowed",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGraphRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGraphRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollowRuleChanges",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToUnfollow", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnfollow",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGroup
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGroupAbi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeGroupRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getGroupRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembership",
    outputs: [
      {
        name: "",
        internalType: "struct Membership",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembershipId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "membershipId", internalType: "uint256", type: "uint256" }],
    name: "getMembershipSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembershipTimestamp",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNumberOfMembers",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "foundingMember", internalType: "address", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "isMember",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "joinGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "leaveGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Group_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Group_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Group_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberJoined",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberLeft",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Group_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleSelectorEnabled",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iGroupRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILensFees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLensFeesAbi = [
  {
    type: "function",
    inputs: [],
    name: "getLensFeesData",
    outputs: [
      {
        name: "",
        internalType: "struct LensFeesData",
        type: "tuple",
        components: [
          { name: "treasuryAddress", internalType: "address", type: "address" },
          { name: "treasuryFeeBps", internalType: "uint16", type: "uint16" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasuryAddress",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasuryFeeBps",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILensNativePaymentHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLensNativePaymentHelperAbi = [
  {
    type: "function",
    inputs: [{ name: "to", internalType: "address", type: "address" }],
    name: "refundNative",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferNative",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ILock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iLockAbi = [
  {
    type: "function",
    inputs: [],
    name: "isLocked",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMetadataBased
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMetadataBasedAbi = [
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "returnData", internalType: "bytes[]", type: "bytes[]" },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call3[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "allowFailure", internalType: "bool", type: "bool" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate3",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call3Value[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "allowFailure", internalType: "bool", type: "bool" },
          { name: "value", internalType: "uint256", type: "uint256" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "aggregate3Value",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "blockAndAggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "blockHash", internalType: "bytes32", type: "bytes32" },
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "getBasefee",
    outputs: [{ name: "basefee", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "blockNumber", internalType: "uint256", type: "uint256" }],
    name: "getBlockHash",
    outputs: [{ name: "blockHash", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getBlockNumber",
    outputs: [{ name: "blockNumber", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getChainId",
    outputs: [{ name: "chainid", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockCoinbase",
    outputs: [{ name: "coinbase", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockDifficulty",
    outputs: [{ name: "difficulty", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockGasLimit",
    outputs: [{ name: "gaslimit", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getCurrentBlockTimestamp",
    outputs: [{ name: "timestamp", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "addr", internalType: "address", type: "address" }],
    name: "getEthBalance",
    outputs: [{ name: "balance", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getLastBlockHash",
    outputs: [{ name: "blockHash", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "requireSuccess", internalType: "bool", type: "bool" },
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "tryAggregate",
    outputs: [
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "requireSuccess", internalType: "bool", type: "bool" },
      {
        name: "calls",
        internalType: "struct IMulticall3.Call[]",
        type: "tuple[]",
        components: [
          { name: "target", internalType: "address", type: "address" },
          { name: "callData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "tryBlockAndAggregate",
    outputs: [
      { name: "blockNumber", internalType: "uint256", type: "uint256" },
      { name: "blockHash", internalType: "bytes32", type: "bytes32" },
      {
        name: "returnData",
        internalType: "struct IMulticall3.Result[]",
        type: "tuple[]",
        components: [
          { name: "success", internalType: "bool", type: "bool" },
          { name: "returnData", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "payable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INamespace
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNamespaceAbi = [
  {
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "accountOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassignAccountRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "unassignUsernameRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "assignRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "assignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeNamespaceRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "createUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNamespace",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getNamespaceRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameAssignmentSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameCreationSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getUsernameExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "namespace", internalType: "string", type: "string" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "nftName", internalType: "string", type: "string" },
      { name: "nftSymbol", internalType: "string", type: "string" },
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassigningRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "removalRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setUsernameExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unassignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "usernameOf",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Namespace_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Assigned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Username_Created",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Username_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Removed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "previousAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Unassigned",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// INamespaceRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iNamespaceRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAssigning",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreation",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnassigning",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IOwnable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iOwnableAbi = [
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPostAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPostActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IPostRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iPostRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "rootPostId", internalType: "uint256", type: "uint256" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "rootPostId", internalType: "uint256", type: "uint256" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IRequestBasedGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iRequestBasedGroupRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "group", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "cancelMembershipRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "primitiveParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "group", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "sendMembershipRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IRoleBasedAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iRoleBasedAccessControlAbi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "contractAddress", internalType: "address", type: "address" },
    ],
    name: "canChangeAccessControl",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "roleId", internalType: "uint256", type: "uint256" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "getAccess",
    outputs: [{ name: "", internalType: "enum Access", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getType",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "roles",
        internalType: "struct Role[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          { name: "roleId", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasAccess",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "roles",
        internalType: "struct Role[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          { name: "roleId", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "roleId", internalType: "uint256", type: "uint256" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
      { name: "access", internalType: "enum Access", type: "uint8" },
    ],
    name: "setAccess",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "granted", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "Lens_AccessControl_AccessAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_AccessRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "granted", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "Lens_AccessControl_AccessUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_RoleGranted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_RoleRevoked",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISimpleCollectAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSimpleCollectActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
    ],
    name: "getCollectActionData",
    outputs: [
      {
        name: "",
        internalType: "struct CollectActionData",
        type: "tuple",
        components: [
          { name: "amount", internalType: "uint160", type: "uint160" },
          { name: "collectLimit", internalType: "uint96", type: "uint96" },
          { name: "token", internalType: "address", type: "address" },
          { name: "currentCollects", internalType: "uint96", type: "uint96" },
          {
            name: "recipients",
            internalType: "struct RecipientData[]",
            type: "tuple[]",
            components: [
              { name: "recipient", internalType: "address", type: "address" },
              { name: "splitBps", internalType: "uint16", type: "uint16" },
            ],
          },
          { name: "endTimestamp", internalType: "uint72", type: "uint72" },
          { name: "referralFeeBps", internalType: "uint16", type: "uint16" },
          {
            name: "followerOnlyGraph",
            internalType: "address",
            type: "address",
          },
          {
            name: "collectionAddress",
            internalType: "address",
            type: "address",
          },
          { name: "isImmutable", internalType: "bool", type: "bool" },
          { name: "isDisabled", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ISource
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iSourceAbi = [
  {
    type: "function",
    inputs: [],
    name: "getTreasury",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "validateSource",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IToken
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTokenAbi = [
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITokenURIProvider
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTokenUriProviderAbi = [
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ITransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iTransparentUpgradeableProxyAbi = [
  {
    type: "function",
    inputs: [],
    name: "admin",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "implementation",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "address", type: "address" }],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "bytes", type: "bytes" },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "newAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "beacon",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "BeaconUpgraded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IVersionedBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iVersionedBeaconAbi = [
  {
    type: "function",
    inputs: [],
    name: "implementation",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "implementationVersion",
        internalType: "uint256",
        type: "uint256",
      },
    ],
    name: "implementation",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensCollectedPost
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensCollectedPostAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isImmutable", internalType: "bool", type: "bool" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "contractURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
    ],
    name: "setTokenURIProvider",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "BatchMetadataUpdate",
  },
  { type: "event", anonymous: false, inputs: [], name: "ContractURIUpdated" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_ERC721_Initialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenURIProvider",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ERC721_TokenURIProviderSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_LensCollectedPost_Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  { type: "error", inputs: [], name: "AlreadyExists" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "UnexpectedContractImpl" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensCreate2
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensCreate2Abi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [],
    name: "CONSTRUCTOR_ARGS_HASH",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "CREATE2_PREFIX",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "PROXY_BYTECODE_HASH",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "SENDER_BYTES",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "salt", internalType: "bytes32", type: "bytes32" },
      { name: "implementation", internalType: "address", type: "address" },
      { name: "proxyAdmin", internalType: "address", type: "address" },
      { name: "initializerCall", internalType: "bytes", type: "bytes" },
      { name: "expectedAddress", internalType: "address", type: "address" },
    ],
    name: "createTransparentUpgradeableProxy",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "salt", internalType: "bytes32", type: "bytes32" }],
    name: "getAddress",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "UnexpectedValue" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensERC721
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensErc721Abi = [
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
    ],
    name: "setTokenURIProvider",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "BatchMetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_ERC721_Initialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenURIProvider",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ERC721_TokenURIProviderSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "UnexpectedContractImpl" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      {
        name: "factories",
        internalType: "struct FactoryConstructorParams",
        type: "tuple",
        components: [
          {
            name: "accessControlFactory",
            internalType: "contract AccessControlFactory",
            type: "address",
          },
          {
            name: "accountFactory",
            internalType: "contract AccountFactory",
            type: "address",
          },
          {
            name: "appFactory",
            internalType: "contract AppFactory",
            type: "address",
          },
          {
            name: "groupFactory",
            internalType: "contract GroupFactory",
            type: "address",
          },
          {
            name: "feedFactory",
            internalType: "contract FeedFactory",
            type: "address",
          },
          {
            name: "graphFactory",
            internalType: "contract GraphFactory",
            type: "address",
          },
          {
            name: "namespaceFactory",
            internalType: "contract NamespaceFactory",
            type: "address",
          },
        ],
      },
      {
        name: "rules",
        internalType: "struct RuleConstructorParams",
        type: "tuple",
        components: [
          {
            name: "accountBlockingRule",
            internalType: "address",
            type: "address",
          },
          {
            name: "groupGatedFeedRule",
            internalType: "address",
            type: "address",
          },
          {
            name: "usernameSimpleCharsetRule",
            internalType: "address",
            type: "address",
          },
          {
            name: "banMemberGroupRule",
            internalType: "address",
            type: "address",
          },
          {
            name: "addRemovePidGroupRule",
            internalType: "address",
            type: "address",
          },
          {
            name: "usernameReservedNamespaceRule",
            internalType: "address",
            type: "address",
          },
        ],
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "namespacePrimitiveAddress",
        internalType: "address",
        type: "address",
      },
      {
        name: "accountParams",
        internalType: "struct CreateAccountParams",
        type: "tuple",
        components: [
          { name: "metadataURI", internalType: "string", type: "string" },
          { name: "owner", internalType: "address", type: "address" },
          {
            name: "accountManagers",
            internalType: "address[]",
            type: "address[]",
          },
          {
            name: "accountManagersPermissions",
            internalType: "struct AccountManagerPermissions[]",
            type: "tuple[]",
            components: [
              {
                name: "canExecuteTransactions",
                internalType: "bool",
                type: "bool",
              },
              { name: "canTransferTokens", internalType: "bool", type: "bool" },
              { name: "canTransferNative", internalType: "bool", type: "bool" },
              { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
            ],
          },
          {
            name: "accountCreationSourceStamp",
            internalType: "struct SourceStamp",
            type: "tuple",
            components: [
              { name: "source", internalType: "address", type: "address" },
              {
                name: "originalMsgSender",
                internalType: "address",
                type: "address",
              },
              { name: "validator", internalType: "address", type: "address" },
              { name: "nonce", internalType: "uint256", type: "uint256" },
              { name: "deadline", internalType: "uint256", type: "uint256" },
              { name: "signature", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "accountExtraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "usernameParams",
        internalType: "struct CreateUsernameParams",
        type: "tuple",
        components: [
          { name: "username", internalType: "string", type: "string" },
          {
            name: "createUsernameCustomParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "createUsernameRuleProcessingParams",
            internalType: "struct RuleProcessingParams[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "assignUsernameCustomParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "assignRuleProcessingParams",
            internalType: "struct RuleProcessingParams[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "usernameExtraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "createAccountWithUsernameFree",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
      {
        name: "groupParams",
        internalType: "struct GroupWithFeed_GroupParams",
        type: "tuple",
        components: [
          { name: "groupMetadataURI", internalType: "string", type: "string" },
          {
            name: "groupRules",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "groupExtraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "groupFoundingMember",
            internalType: "address",
            type: "address",
          },
        ],
      },
      {
        name: "feedParams",
        internalType: "struct GroupWithFeed_FeedParams",
        type: "tuple",
        components: [
          { name: "feedMetadataURI", internalType: "string", type: "string" },
          {
            name: "feedRules",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "feedExtraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
          {
            name: "allowNonMembersToReply",
            internalType: "bool",
            type: "bool",
          },
        ],
      },
    ],
    name: "createGroupWithFeed",
    outputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "accountManagers", internalType: "address[]", type: "address[]" },
      {
        name: "accountManagersPermissions",
        internalType: "struct AccountManagerPermissions[]",
        type: "tuple[]",
        components: [
          {
            name: "canExecuteTransactions",
            internalType: "bool",
            type: "bool",
          },
          { name: "canTransferTokens", internalType: "bool", type: "bool" },
          { name: "canTransferNative", internalType: "bool", type: "bool" },
          { name: "canSetMetadataURI", internalType: "bool", type: "bool" },
        ],
      },
      {
        name: "sourceStamp",
        internalType: "struct SourceStamp",
        type: "tuple",
        components: [
          { name: "source", internalType: "address", type: "address" },
          {
            name: "originalMsgSender",
            internalType: "address",
            type: "address",
          },
          { name: "validator", internalType: "address", type: "address" },
          { name: "nonce", internalType: "uint256", type: "uint256" },
          { name: "deadline", internalType: "uint256", type: "uint256" },
          { name: "signature", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployAccount",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "sourceStampVerificationEnabled",
        internalType: "bool",
        type: "bool",
      },
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
      {
        name: "initialProperties",
        internalType: "struct AppInitialProperties",
        type: "tuple",
        components: [
          { name: "graph", internalType: "address", type: "address" },
          { name: "feeds", internalType: "address[]", type: "address[]" },
          { name: "namespace", internalType: "address", type: "address" },
          { name: "groups", internalType: "address[]", type: "address[]" },
          { name: "defaultFeed", internalType: "address", type: "address" },
          { name: "signers", internalType: "address[]", type: "address[]" },
          { name: "paymaster", internalType: "address", type: "address" },
          { name: "treasury", internalType: "address", type: "address" },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployApp",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
      {
        name: "rules",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployFeed",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
      {
        name: "rules",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "deployGraph",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
      {
        name: "rules",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "foundingMember", internalType: "address", type: "address" },
    ],
    name: "deployGroup",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "namespace", internalType: "string", type: "string" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "owner", internalType: "address", type: "address" },
      { name: "admins", internalType: "address[]", type: "address[]" },
      {
        name: "rules",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "nftName", internalType: "string", type: "string" },
      { name: "nftSymbol", internalType: "string", type: "string" },
    ],
    name: "deployNamespace",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getFactories",
    outputs: [
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getRules",
    outputs: [
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTemporaryAccessControl",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  { type: "error", inputs: [], name: "DuplicatedValue" },
  { type: "error", inputs: [], name: "InvalidParameter" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensFees
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensFeesAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "treasuryAddress", internalType: "address", type: "address" },
      { name: "treasuryFeeBps", internalType: "uint16", type: "uint16" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "getLensFeesData",
    outputs: [
      {
        name: "",
        internalType: "struct LensFeesData",
        type: "tuple",
        components: [
          { name: "treasuryAddress", internalType: "address", type: "address" },
          { name: "treasuryFeeBps", internalType: "uint16", type: "uint16" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasuryAddress",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getTreasuryFeeBps",
    outputs: [{ name: "", internalType: "uint16", type: "uint16" }],
    stateMutability: "view",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensNativePaymentHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensNativePaymentHelperAbi = [
  { type: "receive", stateMutability: "payable" },
  {
    type: "function",
    inputs: [{ name: "to", internalType: "address", type: "address" }],
    name: "refundNative",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "amount", internalType: "uint256", type: "uint256" },
    ],
    name: "transferNative",
    outputs: [],
    stateMutability: "nonpayable",
  },
  { type: "error", inputs: [], name: "FailedToTransferNative" },
  { type: "error", inputs: [], name: "NotEnoughBalance" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensRulePaymentHandler
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensRulePaymentHandlerAbi = [] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LensUsernameTokenURIProvider
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lensUsernameTokenUriProviderAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [{ name: "str", internalType: "string", type: "string" }],
    name: "_toLowercase",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LibString
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const libStringAbi = [
  { type: "error", inputs: [], name: "HexLengthInsufficient" },
  { type: "error", inputs: [], name: "StringNot7BitASCII" },
  { type: "error", inputs: [], name: "TooBigForSmallString" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lock
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lockAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "locked", internalType: "bool", type: "bool" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log1EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog1",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log2EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog2",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log3EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "topic3", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog3",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "events",
        internalType: "struct Log4EventData[]",
        type: "tuple[]",
        components: [
          { name: "topic1", internalType: "bytes32", type: "bytes32" },
          { name: "topic2", internalType: "bytes32", type: "bytes32" },
          { name: "topic3", internalType: "bytes32", type: "bytes32" },
          { name: "topic4", internalType: "bytes32", type: "bytes32" },
          { name: "data", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "emitEventsLog4",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "isLocked",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "locked", internalType: "bool", type: "bool" }],
    name: "setLockStatus",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "locked", internalType: "bool", type: "bool" },
    ],
    name: "setLockStatusForAddress",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "locked", internalType: "bool", type: "bool", indexed: true }],
    name: "Lens_Lock_LockStatusSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "target",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "locked", internalType: "bool", type: "bool", indexed: true },
    ],
    name: "Lens_Lock_LockStatusSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MembershipApprovalGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const membershipApprovalGroupRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "group", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "cancelMembershipRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "group", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
    ],
    name: "rejectMembershipRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "group", internalType: "address", type: "address" },
      { name: "accounts", internalType: "address[]", type: "address[]" },
    ],
    name: "rejectMembershipRequests",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "group", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "sendMembershipRequest",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approvedBy",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_ApprovalGroupRule_MembershipApproved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "rejectedBy",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_ApprovalGroupRule_MembershipRejected",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ApprovalGroupRule_MembershipRequestCancelled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "group",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ApprovalGroupRule_MembershipRequested",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AlreadyExists" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MetadataBased
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const metadataBasedAbi = [
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Namespace
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const namespaceAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "accountOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassignAccountRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "unassignUsernameRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "assignRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "assignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeNamespaceRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassigningProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "creationProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "assigningProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "createAndAssignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "createUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getAccessControl",
    outputs: [{ name: "", internalType: "contract IAccessControl", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getApproved",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNamespace",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getNamespaceRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getTokenIdByUsername",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameAssignmentSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "getUsernameByTokenId",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameCreationSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getUsernameExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "namespace", internalType: "string", type: "string" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "nftName", internalType: "string", type: "string" },
      { name: "nftSymbol", internalType: "string", type: "string" },
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "operator", internalType: "address", type: "address" },
    ],
    name: "isApprovedForAll",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "name",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassigningRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "removalRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "newAccessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "setAccessControl",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "operator", internalType: "address", type: "address" },
      { name: "approved", internalType: "bool", type: "bool" },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
    ],
    name: "setTokenURIProvider",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setUsernameExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "interfaceId", internalType: "bytes4", type: "bytes4" }],
    name: "supportsInterface",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "symbol",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "tokenId", internalType: "uint256", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "from", internalType: "address", type: "address" },
      { name: "to", internalType: "address", type: "address" },
      { name: "tokenId", internalType: "uint256", type: "uint256" },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unassignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "usernameOf",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "approved",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Approval",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "owner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "operator",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "approved", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "ApprovalForAll",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "_fromTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "_toTokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
    ],
    name: "BatchMetadataUpdate",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "accessControl",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accessControlType",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
    ],
    name: "Lens_AccessControlUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "name", internalType: "string", type: "string", indexed: false },
      {
        name: "symbol",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_ERC721_Initialized",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "tokenURIProvider",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_ERC721_TokenURIProviderSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Namespace_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Assigned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Username_Created",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Username_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Removed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_Username_Transfer",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "previousAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Unassigned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "from", internalType: "address", type: "address", indexed: true },
      { name: "to", internalType: "address", type: "address", indexed: true },
      {
        name: "tokenId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Transfer",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "AlreadyExists" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "FailedToTransferNative" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "InvalidSourceStampOriginalMsgSender" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnexpectedContractImpl" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
  { type: "error", inputs: [], name: "UsernameAssigned" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NamespaceFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const namespaceFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "primitiveBeacon", internalType: "address", type: "address" },
      { name: "proxyAdminLock", internalType: "address", type: "address" },
      { name: "lensFactory", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "namespace", internalType: "string", type: "string" },
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "proxyAdminOwner", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      { name: "nftName", internalType: "string", type: "string" },
      { name: "nftSymbol", internalType: "string", type: "string" },
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
    ],
    name: "deployNamespace",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "namespaceAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "namespace",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_NamespaceFactory_Deployment",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Ownable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableAbi = [
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableMetadataBasedAccountAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableMetadataBasedAccountActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_AccountAction_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableMetadataBasedPostAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableMetadataBasedPostActionAbi = [
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_PostAction_MetadataURISet",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnableMetadataBasedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownableMetadataBasedRuleAbi = [
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// OwnerAdminOnlyAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ownerAdminOnlyAccessControlAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "lock", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "canChangeAccessControl",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "roleId", internalType: "uint256", type: "uint256" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "getAccess",
    outputs: [{ name: "", internalType: "enum Access", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getType",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "roles",
        internalType: "struct Role[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          { name: "roleId", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasAccess",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "roles",
        internalType: "struct Role[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          { name: "roleId", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "roleId", internalType: "uint256", type: "uint256" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
      { name: "access", internalType: "enum Access", type: "uint8" },
    ],
    name: "setAccess",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "granted", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "Lens_AccessControl_AccessAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_AccessRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "granted", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "Lens_AccessControl_AccessUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_RoleGranted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_RoleRevoked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PayableUsingNativePaymentHelper
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const payableUsingNativePaymentHelperAbi = [] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PermissionlessAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const permissionlessAccessControlAbi = [
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "canChangeAccessControl",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [],
    name: "getType",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "uint256", type: "uint256" },
    ],
    name: "hasAccess",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "pure",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PrimitiveFactory
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const primitiveFactoryAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "primitiveBeacon", internalType: "address", type: "address" },
      { name: "proxyAdminLock", internalType: "address", type: "address" },
      { name: "lensFactory", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Proxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAbi = [
  { type: "fallback", stateMutability: "payable" },
  { type: "receive", stateMutability: "payable" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ProxyAdmin
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const proxyAdminAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "proxyAdminOwner", internalType: "address", type: "address" },
      { name: "lock", internalType: "address", type: "address" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "to", internalType: "address", type: "address" },
      { name: "value", internalType: "uint256", type: "uint256" },
      { name: "data", internalType: "bytes", type: "bytes" },
    ],
    name: "call",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "Locked" },
  { type: "error", inputs: [], name: "NotAContract" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Query
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const queryAbi = [
  {
    type: "function",
    inputs: [],
    name: "IS_SCRIPT",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "run",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "testQuery",
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RoleBasedAccessControl
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const roleBasedAccessControlAbi = [
  {
    type: "constructor",
    inputs: [{ name: "owner", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
    ],
    name: "canChangeAccessControl",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "roleId", internalType: "uint256", type: "uint256" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "getAccess",
    outputs: [{ name: "", internalType: "enum Access", type: "uint8" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getType",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "roles",
        internalType: "struct Role[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          { name: "roleId", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "grantRoles",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasAccess",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "hasRole",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "roleId", internalType: "uint256", type: "uint256" },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "roles",
        internalType: "struct Role[]",
        type: "tuple[]",
        components: [
          { name: "account", internalType: "address", type: "address" },
          { name: "roleId", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    name: "revokeRoles",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "roleId", internalType: "uint256", type: "uint256" },
      { name: "contractAddress", internalType: "address", type: "address" },
      { name: "permissionId", internalType: "uint256", type: "uint256" },
      { name: "access", internalType: "enum Access", type: "uint8" },
    ],
    name: "setAccess",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "granted", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "Lens_AccessControl_AccessAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_AccessRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "contractAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "granted", internalType: "bool", type: "bool", indexed: false },
    ],
    name: "Lens_AccessControl_AccessUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_RoleGranted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "roleId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
    ],
    name: "Lens_AccessControl_RoleRevoked",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "contractType",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "flavour",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Contract_Deployed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RuleBasedFeed
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ruleBasedFeedAbi = [
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeFeedRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "changePostRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "createPost",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "deletePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "editPost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getAuthorPostSequentialId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getFeedRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "author", internalType: "address", type: "address" }],
    name: "getNextPostId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPost",
    outputs: [
      {
        name: "",
        internalType: "struct Post",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          {
            name: "authorPostSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "postSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "rootPostId", internalType: "uint256", type: "uint256" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          { name: "creationTimestamp", internalType: "uint80", type: "uint80" },
          { name: "creationSource", internalType: "address", type: "address" },
          {
            name: "lastUpdatedTimestamp",
            internalType: "uint80",
            type: "uint80",
          },
          {
            name: "lastUpdateSource",
            internalType: "address",
            type: "address",
          },
          { name: "isDeleted", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostAuthor",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "author", internalType: "address", type: "address" }],
    name: "getPostCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getPostCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getPostExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getPostRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostSequentialId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "getPostUnchecked",
    outputs: [
      {
        name: "",
        internalType: "struct Post",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          {
            name: "authorPostSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          {
            name: "postSequentialId",
            internalType: "uint256",
            type: "uint256",
          },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "rootPostId", internalType: "uint256", type: "uint256" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          { name: "creationTimestamp", internalType: "uint80", type: "uint80" },
          { name: "creationSource", internalType: "address", type: "address" },
          {
            name: "lastUpdatedTimestamp",
            internalType: "uint80",
            type: "uint80",
          },
          {
            name: "lastUpdateSource",
            internalType: "address",
            type: "address",
          },
          { name: "isDeleted", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "postId", internalType: "uint256", type: "uint256" }],
    name: "postExists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Feed_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Feed_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "localSequentialId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "rootPostId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostDeleted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newPostParams",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "feedRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "rootPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "quotedPostRulesParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Feed_PostEdited",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_Post_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Feed_Post_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Feed_Post_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "postId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "author",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_Post_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Feed_RuleSelectorEnabled",
  },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RuleBasedGraph
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ruleBasedGraphAbi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "ruleChangesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "changeFollowRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeGraphRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "followRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "follow",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "followedAccount", internalType: "address", type: "address" },
    ],
    name: "getFollow",
    outputs: [
      {
        name: "",
        internalType: "struct Follow",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getFollowRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "followedAccount", internalType: "address", type: "address" },
      { name: "followId", internalType: "uint256", type: "uint256" },
    ],
    name: "getFollowSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "followId", internalType: "uint256", type: "uint256" },
    ],
    name: "getFollowerById",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getFollowersCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getFollowingCount",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getGraphRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "targetAccount", internalType: "address", type: "address" },
    ],
    name: "isFollowing",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToUnfollow", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unfollow",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Graph_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Graph_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Graph_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_Follow_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "followerAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accountToFollow",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "followId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "followRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_Followed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Graph_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Graph_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "followerAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "accountToUnfollow",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "followId",
        internalType: "uint256",
        type: "uint256",
        indexed: false,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "graphRulesProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Graph_Unfollowed",
  },
  { type: "error", inputs: [], name: "AllAnyOfRulesReverted" },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RequiredRuleReverted" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RuleBasedGroup
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ruleBasedGroupAbi = [
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "addMember",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeGroupRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getGroupRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembership",
    outputs: [
      {
        name: "",
        internalType: "struct Membership",
        type: "tuple",
        components: [
          { name: "id", internalType: "uint256", type: "uint256" },
          { name: "timestamp", internalType: "uint256", type: "uint256" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembershipId",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "membershipId", internalType: "uint256", type: "uint256" }],
    name: "getMembershipSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "getMembershipTimestamp",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNumberOfMembers",
    outputs: [{ name: "", internalType: "uint256", type: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "metadataURI", internalType: "string", type: "string" },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
      { name: "foundingMember", internalType: "address", type: "address" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "account", internalType: "address", type: "address" }],
    name: "isMember",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "joinGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "leaveGroup",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeMember",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Group_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Group_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Group_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberJoined",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberLeft",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "membershipId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Group_MemberRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Group_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Group_RuleSelectorEnabled",
  },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RuleBasedNamespace
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ruleBasedNamespaceAbi = [
  {
    type: "function",
    inputs: [{ name: "name", internalType: "string", type: "string" }],
    name: "accountOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassignAccountRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "unassignUsernameRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "assignRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "assignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "ruleChanges",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
    ],
    name: "changeNamespaceRules",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "createUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "exists",
    outputs: [{ name: "", internalType: "bool", type: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32" }],
    name: "getExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getNamespace",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
      { name: "isRequired", internalType: "bool", type: "bool" },
    ],
    name: "getNamespaceRules",
    outputs: [
      {
        name: "",
        internalType: "struct Rule[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameAssignmentSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "getUsernameCreationSource",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      { name: "key", internalType: "bytes32", type: "bytes32" },
    ],
    name: "getUsernameExtraData",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "namespace", internalType: "string", type: "string" },
      { name: "metadataURI", internalType: "string", type: "string" },
      { name: "nftName", internalType: "string", type: "string" },
      { name: "nftSymbol", internalType: "string", type: "string" },
      {
        name: "tokenURIProvider",
        internalType: "contract ITokenURIProvider",
        type: "address",
      },
      {
        name: "accessControl",
        internalType: "contract IAccessControl",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "username", internalType: "string", type: "string" }],
    name: "ownerOf",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "unassigningRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "removalRuleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "removeUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadata", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "extraDataToSet",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setUsernameExtraData",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "username", internalType: "string", type: "string" },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
    ],
    name: "unassignUsername",
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "user", internalType: "address", type: "address" }],
    name: "usernameOf",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [{ name: "key", internalType: "bytes32", type: "bytes32", indexed: true }],
    name: "Lens_Namespace_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Namespace_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleConfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "configParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleReconfigured",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorDisabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      { name: "rule", internalType: "address", type: "address", indexed: true },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "isRequired",
        internalType: "bool",
        type: "bool",
        indexed: false,
      },
      {
        name: "ruleSelector",
        internalType: "bytes4",
        type: "bytes4",
        indexed: false,
      },
    ],
    name: "Lens_Namespace_RuleSelectorEnabled",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Assigned",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "extraData",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
    ],
    name: "Lens_Username_Created",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataAdded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
    ],
    name: "Lens_Username_ExtraDataRemoved",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernameId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
      {
        name: "valueIndexed",
        internalType: "bytes",
        type: "bytes",
        indexed: true,
      },
    ],
    name: "Lens_Username_ExtraDataUpdated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Removed",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "previousAccount",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "customParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
        indexed: false,
      },
      {
        name: "ruleProcessingParams",
        internalType: "struct RuleProcessingParams[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "ruleParams",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
        indexed: false,
      },
      {
        name: "source",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Username_Unassigned",
  },
  { type: "error", inputs: [], name: "ConfigureCallReverted" },
  { type: "error", inputs: [], name: "InvalidConfigSalt" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotAContract" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
  { type: "error", inputs: [], name: "RuleNotConfigured" },
  { type: "error", inputs: [], name: "SelectorEnabledForDifferentRuleType" },
  { type: "error", inputs: [], name: "UnsupportedSelector" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimpleCollectAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simpleCollectActionAbi = [
  {
    type: "constructor",
    inputs: [{ name: "actionHub", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
    ],
    name: "getCollectActionData",
    outputs: [
      {
        name: "",
        internalType: "struct CollectActionData",
        type: "tuple",
        components: [
          { name: "amount", internalType: "uint160", type: "uint160" },
          { name: "collectLimit", internalType: "uint96", type: "uint96" },
          { name: "token", internalType: "address", type: "address" },
          { name: "currentCollects", internalType: "uint96", type: "uint96" },
          {
            name: "recipients",
            internalType: "struct RecipientData[]",
            type: "tuple[]",
            components: [
              { name: "recipient", internalType: "address", type: "address" },
              { name: "splitBps", internalType: "uint16", type: "uint16" },
            ],
          },
          { name: "endTimestamp", internalType: "uint72", type: "uint72" },
          { name: "referralFeeBps", internalType: "uint16", type: "uint16" },
          {
            name: "followerOnlyGraph",
            internalType: "address",
            type: "address",
          },
          {
            name: "collectionAddress",
            internalType: "address",
            type: "address",
          },
          { name: "isImmutable", internalType: "bool", type: "bool" },
          { name: "isDisabled", internalType: "bool", type: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_PostAction_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "Disabled" },
  { type: "error", inputs: [], name: "DoesNotExist" },
  { type: "error", inputs: [], name: "Expired" },
  { type: "error", inputs: [], name: "FailedToTransferNative" },
  { type: "error", inputs: [], name: "Immutable" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "InvalidRecipient" },
  { type: "error", inputs: [], name: "InvalidSplits" },
  { type: "error", inputs: [], name: "LimitReached" },
  { type: "error", inputs: [], name: "NotFollowing" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimplePaymentFeedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simplePaymentFeedRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processDeletePost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processPostRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "isTrusted", internalType: "bool", type: "bool" },
    ],
    name: "setTrust",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "trustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Trusted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "untrustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Untrusted",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "Untrusted" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimplePaymentFollowRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simplePaymentFollowRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "isTrusted", internalType: "bool", type: "bool" },
    ],
    name: "setTrust",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "trustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Trusted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "untrustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Untrusted",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotFound" },
  { type: "error", inputs: [], name: "Untrusted" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimplePaymentGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simplePaymentGroupRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "isTrusted", internalType: "bool", type: "bool" },
    ],
    name: "setTrust",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "trustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Trusted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "untrustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Untrusted",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "Untrusted" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SimplePaymentRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const simplePaymentRuleAbi = [
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "isTrusted", internalType: "bool", type: "bool" },
    ],
    name: "setTrust",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "trustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Trusted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "untrustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Untrusted",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SourceStampBased
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const sourceStampBasedAbi = [
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "addressScope",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "entityType",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      {
        name: "entityId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "key", internalType: "bytes32", type: "bytes32", indexed: true },
      { name: "value", internalType: "bytes", type: "bytes", indexed: false },
    ],
    name: "Lens_ExtraStorageSet",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TippingAccountAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tippingAccountActionAbi = [
  {
    type: "constructor",
    inputs: [{ name: "actionHub", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "PARAM__TIP_TOKEN",
    outputs: [{ name: "", internalType: "bytes32", type: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_AccountAction_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "FailedToTransferNative" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TippingPostAction
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tippingPostActionAbi = [
  {
    type: "constructor",
    inputs: [{ name: "actionHub", internalType: "address", type: "address" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "execute",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "feed", internalType: "address", type: "address" },
      { name: "postId", internalType: "uint256", type: "uint256" },
      { name: "isDisabled", internalType: "bool", type: "bool" },
      {
        name: "params",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "setDisabled",
    outputs: [{ name: "", internalType: "bytes", type: "bytes" }],
    stateMutability: "payable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_PostAction_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "FailedToTransferNative" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenGatedFeedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenGatedFeedRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "postParams",
        internalType: "struct CreatePostParams",
        type: "tuple",
        components: [
          { name: "author", internalType: "address", type: "address" },
          { name: "contentURI", internalType: "string", type: "string" },
          { name: "repostedPostId", internalType: "uint256", type: "uint256" },
          { name: "quotedPostId", internalType: "uint256", type: "uint256" },
          { name: "repliedPostId", internalType: "uint256", type: "uint256" },
          {
            name: "ruleChanges",
            internalType: "struct RuleChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleAddress", internalType: "address", type: "address" },
              { name: "configSalt", internalType: "bytes32", type: "bytes32" },
              {
                name: "configurationChanges",
                internalType: "struct RuleConfigurationChange",
                type: "tuple",
                components: [
                  { name: "configure", internalType: "bool", type: "bool" },
                  {
                    name: "ruleParams",
                    internalType: "struct KeyValue[]",
                    type: "tuple[]",
                    components: [
                      { name: "key", internalType: "bytes32", type: "bytes32" },
                      { name: "value", internalType: "bytes", type: "bytes" },
                    ],
                  },
                ],
              },
              {
                name: "selectorChanges",
                internalType: "struct RuleSelectorChange[]",
                type: "tuple[]",
                components: [
                  {
                    name: "ruleSelector",
                    internalType: "bytes4",
                    type: "bytes4",
                  },
                  { name: "isRequired", internalType: "bool", type: "bool" },
                  { name: "enabled", internalType: "bool", type: "bool" },
                ],
              },
            ],
          },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreatePost",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processDeletePost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct EditPostParams",
        type: "tuple",
        components: [
          { name: "contentURI", internalType: "string", type: "string" },
          {
            name: "extraData",
            internalType: "struct KeyValue[]",
            type: "tuple[]",
            components: [
              { name: "key", internalType: "bytes32", type: "bytes32" },
              { name: "value", internalType: "bytes", type: "bytes" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processEditPost",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "uint256", type: "uint256" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processPostRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotEnough" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenGatedFollowRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenGatedFollowRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotEnough" },
  { type: "error", inputs: [], name: "NotFound" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenGatedGraphRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenGatedGraphRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "followerAccount", internalType: "address", type: "address" },
      { name: "accountToFollow", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollow",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct RuleChange[]",
        type: "tuple[]",
        components: [
          { name: "ruleAddress", internalType: "address", type: "address" },
          { name: "configSalt", internalType: "bytes32", type: "bytes32" },
          {
            name: "configurationChanges",
            internalType: "struct RuleConfigurationChange",
            type: "tuple",
            components: [
              { name: "configure", internalType: "bool", type: "bool" },
              {
                name: "ruleParams",
                internalType: "struct KeyValue[]",
                type: "tuple[]",
                components: [
                  { name: "key", internalType: "bytes32", type: "bytes32" },
                  { name: "value", internalType: "bytes", type: "bytes" },
                ],
              },
            ],
          },
          {
            name: "selectorChanges",
            internalType: "struct RuleSelectorChange[]",
            type: "tuple[]",
            components: [
              { name: "ruleSelector", internalType: "bytes4", type: "bytes4" },
              { name: "isRequired", internalType: "bool", type: "bool" },
              { name: "enabled", internalType: "bool", type: "bool" },
            ],
          },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processFollowRuleChanges",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnfollow",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotEnough" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenGatedGroupRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenGatedGroupRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAddition",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "account", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processJoining",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processLeaving",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotEnough" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenGatedNamespaceRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenGatedNamespaceRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAssigning",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreation",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnassigning",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotEnough" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TokenGatedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const tokenGatedRuleAbi = [
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TransparentUpgradeableProxy
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const transparentUpgradeableProxyAbi = [
  {
    type: "constructor",
    inputs: [
      { name: "_logic", internalType: "address", type: "address" },
      { name: "admin_", internalType: "address", type: "address" },
      { name: "_data", internalType: "bytes", type: "bytes" },
    ],
    stateMutability: "payable",
  },
  { type: "fallback", stateMutability: "payable" },
  { type: "receive", stateMutability: "payable" },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "newAdmin",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "AdminChanged",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "beacon",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "BeaconUpgraded",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "implementation",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Upgraded",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// TrustBasedRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const trustBasedRuleAbi = [
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "isTrusted", internalType: "bool", type: "bool" },
    ],
    name: "setTrust",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "trustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Trusted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "untrustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Untrusted",
  },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UsernameLengthNamespaceRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usernameLengthNamespaceRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAssigning",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreation",
    outputs: [],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnassigning",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UsernamePricePerLengthNamespaceRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usernamePricePerLengthNamespaceRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleConfigurationParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAssigning",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreation",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnassigning",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "target", internalType: "address", type: "address" },
      { name: "isTrusted", internalType: "bool", type: "bool" },
    ],
    name: "setTrust",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "trustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Trusted",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "untrustedAddress",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Rule_Untrusted",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "InvalidParameter" },
  { type: "error", inputs: [], name: "Untrusted" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UsernameReservedNamespaceRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usernameReservedNamespaceRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      {
        name: "ruleParams",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAssigning",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "configSalt", internalType: "bytes32", type: "bytes32" },
      { name: "originalMsgSender", internalType: "address", type: "address" },
      { name: "account", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreation",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnassigning",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "permissionId",
        internalType: "uint256",
        type: "uint256",
        indexed: true,
      },
      { name: "name", internalType: "string", type: "string", indexed: false },
    ],
    name: "Lens_PermissionId_Available",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernamePrimitive",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "indexedUsername",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
      {
        name: "account",
        internalType: "address",
        type: "address",
        indexed: false,
      },
      {
        name: "createdBy",
        internalType: "address",
        type: "address",
        indexed: false,
      },
    ],
    name: "Lens_UsernameReservedNamespaceRule_ReservedUsernameCreated",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernamePrimitive",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "indexedUsername",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_UsernameReservedNamespaceRule_UsernameReleased",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "usernamePrimitive",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "configSalt",
        internalType: "bytes32",
        type: "bytes32",
        indexed: true,
      },
      {
        name: "indexedUsername",
        internalType: "string",
        type: "string",
        indexed: true,
      },
      {
        name: "username",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_UsernameReservedNamespaceRule_UsernameReserved",
  },
  { type: "error", inputs: [], name: "AccessDenied" },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotImplemented" },
  { type: "error", inputs: [], name: "RedundantStateChange" },
] as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UsernameSimpleCharsetNamespaceRule
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const usernameSimpleCharsetNamespaceRuleAbi = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "configure",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "source", internalType: "address", type: "address" }],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [],
    name: "getMetadataURI",
    outputs: [{ name: "", internalType: "string", type: "string" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "owner", internalType: "address", type: "address" },
      { name: "metadataURI", internalType: "string", type: "string" },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [],
    name: "owner",
    outputs: [{ name: "", internalType: "address", type: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processAssigning",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "username", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processCreation",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processRemoval",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [
      { name: "", internalType: "bytes32", type: "bytes32" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "address", type: "address" },
      { name: "", internalType: "string", type: "string" },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
      {
        name: "",
        internalType: "struct KeyValue[]",
        type: "tuple[]",
        components: [
          { name: "key", internalType: "bytes32", type: "bytes32" },
          { name: "value", internalType: "bytes", type: "bytes" },
        ],
      },
    ],
    name: "processUnassigning",
    outputs: [],
    stateMutability: "pure",
  },
  {
    type: "function",
    inputs: [{ name: "metadataURI", internalType: "string", type: "string" }],
    name: "setMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    inputs: [{ name: "newOwner", internalType: "address", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "previousOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
      {
        name: "newOwner",
        internalType: "address",
        type: "address",
        indexed: true,
      },
    ],
    name: "Lens_Ownable_OwnershipTransferred",
  },
  {
    type: "event",
    anonymous: false,
    inputs: [
      {
        name: "metadataURI",
        internalType: "string",
        type: "string",
        indexed: false,
      },
    ],
    name: "Lens_Rule_MetadataURISet",
  },
  { type: "error", inputs: [], name: "AlreadyInitialized" },
  { type: "error", inputs: [], name: "CannotStartWithThat" },
  { type: "error", inputs: [], name: "InvalidMsgSender" },
  { type: "error", inputs: [], name: "NotAllowed" },
  { type: "error", inputs: [], name: "NotImplemented" },
] as const;
