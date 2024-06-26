# Lens Module Contracts

This repository contains the module contracts from the core Lens Protocol repo ([link](https://github.com/lens-protocol/core/tree/5454b58664fab805b6888a68ff40915d251f32f3/contracts)) as a standalone library, useful in Hardhat and Foundry projects.

It provides all the libraries, interfaces, and base contracts required when creating follow, collect, and Open Action modules.

## Installation

```
npm i lens-modules
```

## Usage

Boilerplate for an Open Action module:

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

    function supportsInterface(
        bytes4 interfaceID
    ) public pure virtual override returns (bool) {
        return
            interfaceID == type(IPublicationActionModule).interfaceId ||
            super.supportsInterface(interfaceID);
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

The library also has the contracts needed to create a Follow or Collect Module. Here's a basic example of a `CollectModule` that can be registered with the platform `CollectPublicationAction` contract.

```solidity
// SPDX-License-Identifier: MIT
pragma solidity 0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {IERC721} from "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

import {Types} from "lens-modules/contracts/libraries/constants/Types.sol";
import {IPublicationActionModule} from "lens-modules/contracts/interfaces/IPublicationActionModule.sol";
import {HubRestricted} from "lens-modules/contracts/base/HubRestricted.sol";
import {IModuleRegistry} from "lens-modules/contracts/interfaces/IModuleRegistry.sol";
import {LensModuleMetadata} from "lens-modules/contracts/modules/LensModuleMetadata.sol";
import {LensModuleRegistrant} from "lens-modules/contracts/modules/base/LensModuleRegistrant.sol";
import {ICollectModule} from "lens-modules/contracts/modules/interfaces/ICollectModule.sol";
import {BaseFeeCollectModule} from "lens-modules/contracts/modules/act/collect/base/BaseFeeCollectModule.sol";
import {IBaseFeeCollectModule, BaseFeeCollectModuleInitData} from "lens-modules/contracts/modules/interfaces/IBaseFeeCollectModule.sol";
import {ModuleTypes} from "lens-modules/contracts/modules/libraries/constants/ModuleTypes.sol";
import {LensModule} from "lens-modules/contracts/modules/LensModule.sol";

contract YourCollectModule is Ownable, BaseFeeCollectModule, LensModuleMetadata {
    using SafeERC20 for IERC20;

    constructor(
        address hub,
        address actionModule,
        address moduleRegistry,
        address moduleOwner
    )
        Ownable(moduleOwner)
        BaseFeeCollectModule(hub, actionModule, moduleRegistry)
        LensModuleMetadata()
    {}

    function supportsInterface(
        bytes4 interfaceID
    ) public pure override(BaseFeeCollectModule, LensModule) returns (bool) {
        return
            BaseFeeCollectModule.supportsInterface(interfaceID) ||
            LensModule.supportsInterface(interfaceID);
    }

    function initializePublicationCollectModule(
        uint256 profileId,
        uint256 pubId,
        address /* transactionExecutor */,
        bytes calldata data
    ) external override onlyActionModule returns (bytes memory) {
        BaseFeeCollectModuleInitData memory baseInitData = abi.decode(
            data,
            (BaseFeeCollectModuleInitData)
        );
        _validateBaseInitData(baseInitData);
        _storeBasePublicationCollectParameters(profileId, pubId, baseInitData);
        return data;
    }

    function calculateFee(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) public view virtual override returns (uint160) {
        // Override calculateFee to add custom logic to calculate the fee
        return
            _dataByPublicationByProfile[processCollectParams.profileId][
                processCollectParams.pubId
            ].amount;
    }

    function processCollect(
        ModuleTypes.ProcessCollectParams calldata processCollectParams
    ) external override returns (bytes memory) {
        _validateAndStoreCollect(processCollectParams);
        // Override processCollect to add custom logic to process the collect
        if (processCollectParams.referrerProfileIds.length == 0) {
            _processCollect(processCollectParams);
        } else {
            _processCollectWithReferral(processCollectParams);
        }
        return processCollectParams.data;
    }
}
```