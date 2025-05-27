# Lens Modules

This repository contains the contracts from the core Lens Protocol repo ([link](https://github.com/lens-protocol/lens-v3/tree/latest-mainnet)) as a standalone library, useful in Hardhat and Foundry projects.

It includes the Solidity source code of the contracts, their ABIs, and deployment addresses for Lens Chain mainnet and testnet.

The files are kept in sync with the `latest-mainnet` tag.

## Installation

```
npm i lens-modules
```

## Usage

#### Contracts

Import Lens contracts you want to use in your Solidity project. The paths mirror the `lens-v3` repo structure. Eg:

```solidity
import {Account} from "lens-modules/contracts/extensions/account/Account.sol";
import {IGraph} from "lens-modules/contracts/core/interfaces/IGraph.sol";
import {KeyValue} from "lens-modules/contracts/core/types/Types.sol";
```

#### Deployments

Use the `Deployments` helper JavaScript class to get the contract addresses of the Lens deployments on mainnet and testnet. Eg:

```javascript
import { lensDeployments } from "lens-modules/deployments";
const lensFactoryAddress = lensDeployments.mainnet.LensFactory.address;
```

#### ABIs

Use the `ABIs` helper JavaScript class to get the ABI of any Lens contract. Eg:

```javascript
import { accountAbi } from "lens-modules/abis";
```