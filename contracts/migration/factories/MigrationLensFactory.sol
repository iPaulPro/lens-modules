// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {
    LensFactory, FactoryConstructorParams, RuleConstructorParams
} from "lens-modules/contracts/extensions/factories/LensFactory.sol";
import {EventEmitter} from "lens-modules/contracts/migration/EventEmitter.sol";
import {IRoleBasedAccessControl} from "lens-modules/contracts/core/interfaces/IRoleBasedAccessControl.sol";
import {RuleChange} from "lens-modules/contracts/core/types/Types.sol";
import {PermissionlessAccessControl} from "lens-modules/contracts/extensions/access/PermissionlessAccessControl.sol";

contract MigrationLensFactory is LensFactory, EventEmitter {
    constructor(FactoryConstructorParams memory factories, RuleConstructorParams memory rules)
        LensFactory(factories, rules)
    {}

    function _deployAccessControl(address, /* owner */ address[] memory /* admins */ )
        internal
        override
        returns (IRoleBasedAccessControl)
    {
        PermissionlessAccessControl accessControl = new PermissionlessAccessControl();
        return IRoleBasedAccessControl(address(accessControl));
    }

    function _injectRuleAccessControl(RuleChange memory rule, address /* accessControl */ )
        internal
        pure
        override
        returns (RuleChange memory)
    {
        return rule;
    }

    function _injectRuleAccessControl(RuleChange[] memory rules, address /* accessControl */ )
        internal
        pure
        override
        returns (RuleChange[] memory)
    {
        return rules;
    }

    function _prepareRules(RuleChange[] memory rules, bytes4, /* ruleSelector */ address /* accessControl */ )
        internal
        pure
        override
        returns (RuleChange[] memory)
    {
        return rules;
    }

    function _prepareFeedRulesBasedOnGroup(
        RuleChange[] memory feedRules,
        IRoleBasedAccessControl, /* feedAccessControl */
        address, /* group */
        bool /* allowNonMembersToReply */
    ) internal pure override returns (RuleChange[] memory) {
        return feedRules;
    }

    function _injectRulesForNamespace(RuleChange[] memory rules, address /* accessControl */ )
        internal
        pure
        override
        returns (RuleChange[] memory)
    {
        return rules;
    }
}
