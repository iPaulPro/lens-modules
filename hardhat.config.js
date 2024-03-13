/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [
      {
        version: '0.8.21',
        settings: {
          evmVersion: 'paris',
          viaIR: true,
          optimizer: {
            enabled: true,
            runs: 10,
            details: {
              yul: true,
            },
          },
        },
      },
    ],
  },
};
