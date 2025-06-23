// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {AccessControlFactory} from "lens-modules/contracts/extensions/factories/AccessControlFactory.sol";
import {EventEmitter} from "lens-modules/contracts/migration/EventEmitter.sol";

contract MigrationAccessControlFactory is AccessControlFactory, EventEmitter {
    constructor(address lock) AccessControlFactory(lock) {}
}
