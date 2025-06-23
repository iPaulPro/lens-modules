// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {NamespaceFactory} from "lens-modules/contracts/extensions/factories/NamespaceFactory.sol";
import {EventEmitter} from "lens-modules/contracts/migration/EventEmitter.sol";

contract MigrationNamespaceFactory is NamespaceFactory, EventEmitter {
    constructor(address primitiveBeacon, address proxyAdminLock, address lensFactory)
        NamespaceFactory(primitiveBeacon, proxyAdminLock, lensFactory)
    {}
}
