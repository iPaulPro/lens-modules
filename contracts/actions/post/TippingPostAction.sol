// SPDX-License-Identifier: UNLICENSED
// Copyright (C) 2024 Lens Labs. All Rights Reserved.
pragma solidity ^0.8.26;

import {OwnableMetadataBasedPostAction} from "lens-modules/contracts/actions/post/base/OwnableMetadataBasedPostAction.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {KeyValue, RecipientData} from "lens-modules/contracts/core/types/Types.sol";
import {IFeed} from "lens-modules/contracts/core/interfaces/IFeed.sol";
import {Errors} from "lens-modules/contracts/core/types/Errors.sol";
import {Initializable} from "lens-modules/contracts/core/upgradeability/Initializable.sol";
import {LensPaymentHandler} from "lens-modules/contracts/extensions/fees/LensPaymentHandler.sol";

contract TippingPostAction is LensPaymentHandler, OwnableMetadataBasedPostAction, Initializable {
    using SafeERC20 for IERC20;

    /// @custom:keccak lens.param.amount
    bytes32 constant PARAM__TIP_AMOUNT = 0xc8a06abcb0f2366f32dc2741bdf075c3215e3108918311ec0ac742f1ffd37f49;
    /// @custom:keccak lens.param.token
    bytes32 constant PARAM__TIP_TOKEN = 0xee737c77be2981e91c179485406e6d793521b20aca5e2137b6c497949a74bc94;
    /// @custom:keccak lens.param.referrals
    bytes32 constant PARAM__REFERRALS = 0x183a1b7fdb9626f5ae4e8cac88ee13cc03b29800d2690f61e2a2566f76d8773f;

    uint16 constant REFERRALS_FEE_MAX_BPS = 2000; // 20.00%

    constructor(address actionHub) OwnableMetadataBasedPostAction(actionHub, address(0), "") {
        _disableInitializers();
    }

    function initialize(address owner, string memory metadataURI) external initializer {
        OwnableMetadataBasedPostAction._initialize(owner, metadataURI);
    }

    function _execute(address originalMsgSender, address feed, uint256 postId, KeyValue[] calldata params)
        internal
        override
        returns (bytes memory)
    {
        address erc20Token;
        uint256 tipAmount;
        RecipientData[] memory referrals = new RecipientData[](0);
        for (uint256 i = 0; i < params.length; i++) {
            if (params[i].key == PARAM__TIP_AMOUNT) {
                tipAmount = abi.decode(params[i].value, (uint256));
            } else if (params[i].key == PARAM__TIP_TOKEN) {
                erc20Token = abi.decode(params[i].value, (address));
            } else if (params[i].key == PARAM__REFERRALS) {
                referrals = abi.decode(params[i].value, (RecipientData[]));
            }
        }
        require(tipAmount > 0, Errors.InvalidParameter());
        address account = IFeed(feed).getPostAuthor(postId);
        _handlePayment({
            payer: originalMsgSender,
            token: erc20Token,
            amount: tipAmount,
            recipient: account,
            referrals: referrals,
            referralFeeBps: REFERRALS_FEE_MAX_BPS
        });
        return abi.encode(account);
    }
}
