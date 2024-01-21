# Lens Module Contracts

This repository contains the module contracts from the core Lens Protocol repo ([link](https://github.com/lens-protocol/core/tree/5454b58664fab805b6888a68ff40915d251f32f3/contracts)) as a standalone library, useful in Hardhat and Foundry projects.

It provides all the libraries, interfaces, and base contracts required when creating follow, collect, and Open Action modules.

## Installation

```
npm i lens-modules
```

## Usage

```solidity
pragma solidity ^0.8.21;

import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";

contract OpenActionModule is 
    HubRestricted,
    IPublicationActionModule,
    LensModuleMetadata
{
    constructor(
        address owner,
        address hub
    )
        Ownable(owner)
        HubRestricted(hub)
        LensModuleMetadata()
    {
        // ...
    }

    function initializePublicationAction(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyHub returns (bytes memory) {
        // ...
    }

    function processPublicationAction(
        Types.ProcessActionParams calldata params
    ) external override onlyHub returns (bytes memory) {
        // ...
    }
}
```