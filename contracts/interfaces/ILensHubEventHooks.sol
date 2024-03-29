// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

/**
 * @title ILensHubEventHooks
 * @author Lens Protocol
 *
 * @notice This is the interface for the LensHub contract's event hooks. As we want most of the core events to be
 * emitted by the LensHub contract, event hooks are needed for core events generated by pheripheral contracts.
 */
interface ILensHubEventHooks {
    /**
     * @dev Helper function to emit an `Unfollowed` event from the hub, to be consumed by indexers to track unfollows.
     * @custom:permissions FollowNFT of the Profile unfollowed.
     *
     * @param unfollowerProfileId The ID of the profile that executed the unfollow.
     * @param idOfProfileUnfollowed The ID of the profile that was unfollowed.
     * @param transactionExecutor The address of the account executing the unfollow operation.
     */
    function emitUnfollowedEvent(
        uint256 unfollowerProfileId,
        uint256 idOfProfileUnfollowed,
        address transactionExecutor
    ) external;
}
