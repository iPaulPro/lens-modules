export const LensContracts = {
  mainnet: {
    chainId: 137,
    network: "polygon",
    LensProfilesGuardianTimelock: 604800,
    LensHandlesGuardianTimelock: 86400,
    LensHubProxy: "0xdb46d1dc155634fbc732f92e853b10b288ad5a1d",
    ProfileCreator: "0xe7Af8325aA443F7678B651d4f0De23663E818691",
    LensPeriphery: "0xeff187b4190E551FC25a7fA4dFC6cf7fDeF7194f",
    Modules: {
      follow: [
        {
          name: "FeeFollowModule",
          address: "0xa8f6ba162dB789039D07A4f0ce90b1aE1f46FE8E"
        },
        {
          name: "RevertFollowModule",
          address: "0x4E2D0157464501C98E781491a9dbC99c2F3fD90f"
        }
      ],
      act: [
        {
          name: "CollectPublicationAction",
          address: "0x0D90C58cBe787CD70B5Effe94Ce58185D72143fB"
        }
      ],
      collect: [
        {
          name: "SimpleFeeCollectModule",
          address: "0x060f5448ae8aCF0Bc06D040400c6A89F45b488bb"
        },
        {
          name: "MultirecipientFeeCollectModule",
          address: "0x50f1D8779078c790b82dE5Aa8d72A841e1CBBbE1"
        }
      ],
      reference: [
        {
          name: "DegreesOfSeparationReferenceModule",
          address: "0xBe69302b0E3bAc1018B2772A7B26EB2325b3F9C8"
        },
        {
          name: "FollowerOnlyReferenceModule",
          address: "0x19F8980aF29207bbd7A6D0aD0858d59bd11d4647"
        }
      ]
    },
    Treasury: "0x6b5d40412956b8546bA2210810C100219f7011B6",
    TreasuryFee: "500",
    LegacyCollectNFTImpl: "0x5886B1Db98a3f5AaFBDeE2DEC4783C6927655B7e",
    FollowNFTImpl: "0x288715E67B7b184fD299143280CA6c1Eb7F31e1B",
    LensHandlesImpl: "0xcE557F3DDfBd1B87074E4386cd98D6B8E80997ED",
    LensHandles: "0xe7E7EaD361f3AaCD73A61A9bD6C10cA17F38E945",
    TokenHandleRegistryImpl: "0x52fa68D73C83df39B9a637F82361d9b70aAb74F4",
    TokenHandleRegistry: "0xD4F2F33680FCCb36748FA9831851643781608844",
    ModuleRegistryImpl: "0xeD935AcE8f82FcAB4cae41F240c3a4aE51931313",
    ModuleRegistry: "0x1eD5983F0c883B96f7C35528a1e22EEA67DE3Ff9",
    LensHubV2Impl: "0x92fE81FF570869eDE4c90fc5C949bb566b1f52f7",
    GovernanceContract: "0xB03B8801cF9D074Ea468aAA8eBd9B5EeD67Ac5B6",
    GovernanceContractAdmin: "0xf94b90BbEee30996019bABD12cEcdDCcf68331DE",
    ProxyAdminContract: "0x573FDF61727436a38ec6C5f6408B1F50cd69e015",
    ProxyAdminContractAdmin: "0xB7589cBf00623b09160aD5F6CA9536C66E0C2ebc",
    LensV2UpgradeContract: "0xd38c614AD4c09877F3a95Fef2FBf2781b4e9736D",
    ProfileCreationProxy: "0xdCB72aaB62d52aBC2E6be99BEEe535C2D1361fc0",
    PublicActProxy: "0x53582b1b7BE71622E7386D736b6baf87749B7a2B",
    CollectNFT: "0x0c2a7761E2971D906338F5da1ecF0027E4247fd7",
    CollectPublicationActionImpl: "0xcc3f120f3d3bf860b910b228d2114f474b382c1d",
    LitAccessControlImpl: "0x79dcA158B2A019EA2377f5989066a1ac0aC20e10",
    LitAccessControl: "0x98a6C31E43b158198da95Ef1242faCA868424187",
    ProfileTokenURI: "0xE01e1017Eb1D49Aa7034628cd2e3021536cdeBE5",
    HandleTokenURI: "0x9632dC8eb31CEC8fcd166a99C1Da179716aE2E48",
    FollowTokenURI: "0x07D8a9FEdef6DC7004b9ae0935eA178bFa8bBdF1"
  },
  testnet: {
    chainId: 80001,
    network: "mumbai",
    LensProfilesGuardianTimelock: 300,
    LensHandlesGuardianTimelock: 300,
    LensHubProxy: "0x60Ae865ee4C725cd04353b5AAb364553f56ceF82",
    ProfileCreator: "0x6C1e1bC39b13f9E0Af9424D76De899203F47755F",
    LensPeriphery: "0xD5037d72877808cdE7F669563e9389930AF404E8",
    Modules: {
      follow: [
        {
          name: "FeeFollowModule",
          address: "0xB7612562C63dDcAFE4349beE6Ca35e9170819504"
        },
        {
          name: "RevertFollowModule",
          address: "0xaaB7E564ECbb2D11bCb9592A18F2E9281BA9f73A"
        }
      ],
      act: [
        {
          name: "CollectPublicationAction",
          address: "0x4FdAae7fC16Ef41eAE8d8f6578d575C9d64722f2"
        }
      ],
      collect: [
        {
          name: "SimpleFeeCollectModule",
          address: "0x345Cc3A3F9127DE2C69819C2E07bB748dE6E45ee"
        },
        {
          name: "MultirecipientFeeCollectModule",
          address: "0xe9FabdC429640DC35153C9Ba13AE83A0A1996912"
        }
      ],
      reference: [
        {
          name: "DegreesOfSeparationReferenceModule",
          address: "0xFb290857DBA5c24Ef548a8D98CEFba8E56293254"
        },
        {
          name: "FollowerOnlyReferenceModule",
          address: "0x9Dd0b6e39F8Ea8B8dE9D55acC4652573E2eCB16f"
        }
      ],
    },
    Treasury: "0x8c6a6488822a5Dad91CBBfFAF7Af3379Bd6d8306",
    TreasuryFee: "50",
    LegacyCollectNFTImpl: "0x5886B1Db98a3f5AaFBDeE2DEC4783C6927655B7e",
    FollowNFTImpl: "0xC2452BAAeffd6109750401bF83e15E5aaec98606",
    LensHandlesImpl: "0x4d2c60431d4fb2484c82fdd8c05985fff93851e1",
    LensHandles: "0x44e1668150A154f01D53d1f05B8Fa0d8f3f341a9",
    TokenHandleRegistryImpl: "0xe3a704fee3260cbee9b54a300be53f534ad6755a",
    TokenHandleRegistry: "0x66cA05cAc4e8D543028192dD28C0570a0b6e3413",
    ModuleRegistryImpl: "0x7f1b6c596b917619690a836da5247279d73dc7a1",
    ModuleRegistry: "0x4BeB63842BB800A1Da77a62F2c74dE3CA39AF7C0",
    LensHubV2Impl: "0xb4a26f55cc2d1473b8a7649d90d34ba52a480391",
    GovernanceContract: "0xB03B8801cF9D074Ea468aAA8eBd9B5EeD67Ac5B6",
    ProfileCreationProxy: "0x0554a7163C3aa423429719940FFE179F21cD83f6",
    PublicActProxy: "0x4ed64Eb32C96Df0eA60BB8934798F4DFd3098Ba1",
    CollectNFT: "0x15062A8b16EAe79D68EC6a583212349bdF679C5e",
    CollectPublicationActionImpl: "0x2f422811abbc5afa6d18f083e70bc6326fd245e0",
    LitAccessControlImpl: "0x6f0512ac88ddeb0a4be8eecc716dac0793eecff2",
    LitAccessControl: "0xc4F726a10fDEb0E98e16Fa658b606192d57FC71c",
  },
} as const;