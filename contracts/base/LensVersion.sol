// SPDX-License-Identifier: MIT

pragma solidity ^0.8.15;

import {ILensVersion} from '../interfaces/ILensVersion.sol';
import {Errors} from '../libraries/constants/Errors.sol';
import {TransparentUpgradeableProxy} from '@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy.sol';

contract LensVersion is ILensVersion {
    string internal constant version = '2.0.4';

    bytes20 internal constant gitCommit = hex'24fdfde436e32c7a6d05180d7ef13cf1c6366b44';

    event LensUpgradeVersion(address implementation, string version, bytes20 gitCommit, uint256 timestamp);

    /// @inheritdoc ILensVersion
    function getVersion() external pure override returns (string memory) {
        return version;
    }

    /// @inheritdoc ILensVersion
    function getGitCommit() external pure override returns (bytes20) {
        return gitCommit;
    }

    function emitVersion() external {
        (, bytes memory adminData) = address(this).delegatecall(abi.encodeCall(TransparentUpgradeableProxy.admin, ()));
        (, bytes memory implementationData) = address(this).delegatecall(
            abi.encodeCall(TransparentUpgradeableProxy.implementation, ())
        );
        if (msg.sender != abi.decode(adminData, (address))) {
            revert Errors.NotHub();
        }
        emit LensUpgradeVersion(abi.decode(implementationData, (address)), version, gitCommit, block.timestamp);
    }
}
