export const LensContracts = {
  mainnet: {
    chainId: 137,
    network: "polygon",
    LensProfilesGuardianTimelock: 604800,
    LensHandlesGuardianTimelock: 86400,
    LensHubProxy: "0xdb46d1dc155634fbc732f92e853b10b288ad5a1d",
    ProfileCreator: "0xe7Af8325aA443F7678B651d4f0De23663E818691",
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
    chainId: 80002,
    network: "amoy",
    LensProfilesGuardianTimelock: 300,
    LensHandlesGuardianTimelock: 300,
    LensHubProxy: "0xA2574D9DdB6A325Ad2Be838Bd854228B80215148",
    ProfileCreator: "0x8de25afc4B37e0AdBb58caf3dF06fAf419455404",
    Modules: {
      follow: [
        {
          name: "FeeFollowModule",
          address: "0x1F7A5E77493AADc59FCD835921a60A1010312D1E"
        },
        {
          name: "RevertFollowModule",
          address: "0x0c4944D3d0dDf692B578100Ed260a67c7d7F7930"
        }
      ],
      act: [
        {
          name: "CollectPublicationAction",
          address: "0x34A437A91415C36712B0D912c171c74595Be437d"
        }
      ],
      collect: [
        {
          name: "SimpleFeeCollectModule",
          address: "0x185B529b421Ff60b0F2388483b757b39103cfcb1"
        },
        {
          name: "MultirecipientFeeCollectModule",
          address: "0xC13ACcCe5cDb32bED1Af0B11cdb637E3966BCB45"
        }
      ],
      reference: [
        {
          name: "DegreesOfSeparationReferenceModule",
          address: "0x2C1F5d6f6dc5df8ce021B5DF6d0AF84c32817d0C"
        },
        {
          name: "FollowerOnlyReferenceModule",
          address: "0x0D11dC88286466DE99E3DE836eaF35826d373a3c"
        }
      ],
    },
    Treasury: "0x0000000000000000000000000000000000000000",
    TreasuryFee: "0",
    LegacyCollectNFTImpl: "0x0000000000000000000000000000000000000000",
    FollowNFTImpl: "0x3CA67DAfe181AAd74Ad026Cc098E248869f50Ff1",
    LensHandlesImpl: "0x33b7c0692dd8267f936936c0a0f7079144d78b92",
    LensHandles: "0xf6fDD7932219D64f267E4BfaF8d19774526d31D9",
    TokenHandleRegistryImpl: "0x33b7c0692dd8267f936936c0a0f7079144d78b92",
    TokenHandleRegistry: "0x24360dc6Af3c0b37baA8B0aaDD5BcA11C1a1389A",
    ModuleRegistryImpl: "0x90e0b396c83f6df96cd1f76df3db2daf9eae9c93",
    ModuleRegistry: "0x9E81eD8099dF82004D298144138C12AbB959DF1E",
    LensHubV2Impl: "0x68b2751c4113bbacca7c024a030355fe3989bda7",
    GovernanceContract: "0x0000000000000000000000000000000000000000",
    ProfileCreationProxy: "0x8de25afc4B37e0AdBb58caf3dF06fAf419455404",
    PublicActProxy: "0x88c8fa7C470d9d94aDfA40187157917B26A548d3",
    CollectNFT: "0xC7B6faDeCE0345E60ffa46BD3100094815aeB428",
    CollectPublicationActionImpl: "0x21e305f2aea4ef7980b15a3cd204b28ac8706f50",
    LitAccessControlImpl: "0xae17edd1cbce05394575192006893af9cb1afc05",
    LitAccessControl: "0x9Ddad77aD520d02D2566563b446935C6edD970fC",
  },
} as const;