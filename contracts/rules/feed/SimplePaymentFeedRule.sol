// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {CreatePostParams, EditPostParams} from "lens-modules/contracts/core/interfaces/IFeed.sol";
import {IFeedRule} from "lens-modules/contracts/core/interfaces/IFeedRule.sol";
import {SimplePaymentRule} from "lens-modules/contracts/rules/base/SimplePaymentRule.sol";
import {AccessControlLib} from "lens-modules/contracts/core/libraries/AccessControlLib.sol";
import {IAccessControl} from "lens-modules/contracts/core/interfaces/IAccessControl.sol";
import {KeyValue, RuleChange, RecipientData} from "lens-modules/contracts/core/types/Types.sol";
import {Events} from "lens-modules/contracts/core/types/Events.sol";
import {Errors} from "lens-modules/contracts/core/types/Errors.sol";
import {Initializable} from "lens-modules/contracts/core/upgradeability/Initializable.sol";
import {BPS_MAX} from "lens-modules/contracts/core/types/Constants.sol";

contract SimplePaymentFeedRule is SimplePaymentRule, Initializable, IFeedRule {
    using AccessControlLib for IAccessControl;
    using AccessControlLib for address;

    /// @custom:keccak lens.permission.SkipPayment
    uint256 constant PID__SKIP_PAYMENT = uint256(0x00f37ae888d55466c7f464a414e84bc629550dc0e0655302b62e8c608a260b5c);

    /// @custom:keccak lens.param.accessControl
    bytes32 constant PARAM__ACCESS_CONTROL = 0xcf3b0fab90208e4185bf857e0f943f6672abffb7d0898e0750beeeb991ae35fa;
    /// @custom:keccak lens.param.referrals
    bytes32 constant PARAM__REFERRALS = 0x183a1b7fdb9626f5ae4e8cac88ee13cc03b29800d2690f61e2a2566f76d8773f;
    /// @custom:keccak lens.param.referralFee
    bytes32 constant PARAM__REFERRAL_FEE = 0x6dff2c1710f2154b19d8cf5d6f7d8f5b3909222c3cdd8801486403e4d423b1b6;

    /// @custom:keccak lens.storage.SimplePaymentFeedRule
    bytes32 constant STORAGE__SIMPLE_PAYMENT_FEED_RULE =
        0x5e6777f4876eb423f2ce5c53ce0620e54ccba4e91fb0b6f712f26df7261b66ca;

    struct Configuration {
        address accessControl;
        uint16 referralFeeBps;
        PaymentConfiguration paymentConfiguration;
    }

    struct Storage {
        mapping(address feed => mapping(bytes32 configSalt => Configuration config)) configuration;
    }

    function $storage() private pure returns (Storage storage _storage) {
        assembly {
            _storage.slot := STORAGE__SIMPLE_PAYMENT_FEED_RULE
        }
    }

    constructor() SimplePaymentRule(address(0), "") {
        _disableInitializers();
    }

    function initialize(address owner, string memory metadataURI) external initializer {
        emit Events.Lens_PermissionId_Available(PID__SKIP_PAYMENT, "lens.permission.SkipPayment");
        SimplePaymentRule._initialize(owner, metadataURI);
    }

    function configure(bytes32 configSalt, KeyValue[] calldata ruleParams) external override {
        Configuration memory configuration = _extractConfigurationFromParams(ruleParams);
        configuration.accessControl.verifyHasAccessFunction();
        require(configuration.referralFeeBps <= BPS_MAX, Errors.InvalidParameter());
        _validatePaymentConfiguration(configuration.paymentConfiguration);
        $storage().configuration[msg.sender][configSalt] = configuration;
    }

    function processCreatePost(
        bytes32 configSalt,
        uint256, /* postId */
        CreatePostParams calldata postParams,
        KeyValue[] calldata, /* primitiveParams */
        KeyValue[] calldata ruleParams
    ) external override {
        _processPayment(
            $storage().configuration[msg.sender][configSalt].accessControl,
            $storage().configuration[msg.sender][configSalt].paymentConfiguration,
            _extractPaymentConfigurationFromParams(ruleParams),
            postParams.author,
            _extractReferralsFromParams(ruleParams),
            $storage().configuration[msg.sender][configSalt].referralFeeBps
        );
    }

    function processEditPost(
        bytes32, /* configSalt */
        uint256, /* postId */
        EditPostParams calldata, /* postParams */
        KeyValue[] calldata, /* primitiveParams */
        KeyValue[] calldata /* ruleParams */
    ) external pure override {
        revert Errors.NotImplemented();
    }

    function processDeletePost(
        bytes32, /* configSalt */
        uint256, /* postId */
        KeyValue[] calldata, /* primitiveParams */
        KeyValue[] calldata /* ruleParams */
    ) external pure override {
        revert Errors.NotImplemented();
    }

    function processPostRuleChanges(
        bytes32, /* configSalt */
        uint256, /* postId */
        RuleChange[] calldata, /* ruleChanges */
        KeyValue[] calldata /* ruleParams */
    ) external pure override {
        revert Errors.NotImplemented();
    }

    function _processPayment(
        address accessControl,
        PaymentConfiguration memory paymentConfiguration,
        PaymentConfiguration memory expectedPaymentConfiguration,
        address payer,
        RecipientData[] memory referrals,
        uint16 referralFeeBps
    ) internal {
        if (!accessControl.hasAccess(payer, PID__SKIP_PAYMENT)) {
            _processPayment(paymentConfiguration, expectedPaymentConfiguration, payer, referrals, referralFeeBps);
        }
    }

    function _extractConfigurationFromParams(KeyValue[] calldata params) internal pure returns (Configuration memory) {
        Configuration memory configuration;
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == PARAM__ACCESS_CONTROL) {
                configuration.accessControl = abi.decode(params[i].value, (address));
            } else if (params[i].key == PARAM__REFERRAL_FEE) {
                configuration.referralFeeBps = abi.decode(params[i].value, (uint16));
            } else if (params[i].key == PARAM__PAYMENT_CONFIG) {
                configuration.paymentConfiguration = abi.decode(params[i].value, (PaymentConfiguration));
            }
        }
        return configuration;
    }

    function _extractPaymentConfigurationFromParams(KeyValue[] calldata params)
        internal
        pure
        returns (PaymentConfiguration memory)
    {
        PaymentConfiguration memory paymentConfiguration;
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == PARAM__PAYMENT_CONFIG) {
                paymentConfiguration = abi.decode(params[i].value, (PaymentConfiguration));
                break;
            }
        }
        return paymentConfiguration;
    }

    function _extractReferralsFromParams(KeyValue[] calldata params) internal pure returns (RecipientData[] memory) {
        RecipientData[] memory referrals = new RecipientData[](0);
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == PARAM__REFERRALS) {
                referrals = abi.decode(params[i].value, (RecipientData[]));
                break;
            }
        }
        return referrals;
    }
}
