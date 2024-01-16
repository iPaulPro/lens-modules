// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0;

/**
 * @title IReferenceModule
 * @author Lens Protocol
 * @custom:pending-deprecation
 *
 * @notice This is the deprecated interface for previously Lens-compatible ReferenceModules.
 */
interface ILegacyReferenceModule {
    /**
     * @notice Initializes data for a given publication being published. This can only be called by the hub.
     *
     * @param profileId The token ID of the profile publishing the publication.
     * @param pubId The associated publication's LensHub publication ID.
     * @param data Arbitrary data passed from the user to be decoded.
     *
     * @return bytes An ABI-encoded data encapsulating the execution's state changes. This will be emitted by the
     * hub alongside the collect module's address and should be consumed by front ends.
     */
    function initializeReferenceModule(
        uint256 profileId,
        uint256 pubId,
        bytes calldata data
    ) external returns (bytes memory);

    /**
     * @notice Processes a comment action referencing a given publication. This can only be called by the hub.
     *
     * @param profileId The token ID of the profile associated with the publication being published.
     * @param pointedProfileId The profile ID of the profile associated with the publication being referenced.
     * @param pointedPubId The publication ID of the publication being referenced.
     * @param data Arbitrary data __passed from the commenter!__ to be decoded.
     */
    function processComment(
        uint256 profileId,
        uint256 pointedProfileId,
        uint256 pointedPubId,
        bytes calldata data
    ) external;

    /**
     * @notice Processes a mirror action referencing a given publication. This can only be called by the hub.
     *
     * @param profileId The token ID of the profile associated with the publication being published.
     * @param pointedProfileId The profile ID of the profile associated with the publication being referenced.
     * @param pointedPubId The publication ID of the publication being referenced.
     * @param data Arbitrary data __passed from the mirrorer!__ to be decoded.
     */
    function processMirror(
        uint256 profileId,
        uint256 pointedProfileId,
        uint256 pointedPubId,
        bytes calldata data
    ) external;
}
