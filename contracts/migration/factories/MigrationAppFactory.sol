// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {AppFactory} from "lens-modules/contracts/extensions/factories/AppFactory.sol";
import {EventEmitter} from "lens-modules/contracts/migration/EventEmitter.sol";

contract MigrationAppFactory is AppFactory, EventEmitter {
    constructor(address beacon, address lock) AppFactory(beacon, lock) {}
}
