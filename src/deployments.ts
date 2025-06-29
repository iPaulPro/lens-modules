export const lensDeployments = {
  mainnet: {
    AppImpl: {
      contractName: "App",
      address: "0xBF3773B6a2B4ac8c1D3e38B6f362bD4B74398b6C",
    },
    AccountImpl: {
      contractName: "Account",
      address: "0xDe00E6589b839CA97935F182E7A863566B63aD2c",
    },
    FeedImpl: {
      contractName: "Feed",
      address: "0x53DbB795cE5a922A86b0bBBb820f365F2151CE4B",
    },
    GraphImpl: {
      contractName: "Graph",
      address: "0x24b55E16c90E1F6C441F0a25c2A64bB83b6e1A73",
    },
    GroupImpl: {
      contractName: "Group",
      address: "0x01469AFC10D5F03cC3E73ae2B350893C2bd257Ef",
    },
    NamespaceImpl: {
      contractName: "Namespace",
      address: "0x3b670D827E2D9c665e8eB28e7758A24C2048FD91",
    },
    AccessControlFactory: {
      name: "AccessControlFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x0d028419c270C2d366929f459418a4905D1B778F",
      implementation: "0x2c87697FACd319959BEA999dd2cC7d27342F3554",
    },
    AccountFactory: {
      name: "AccountFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x26C7fd63B06deb4F9E4B5955D540767b9Ac7bbaa",
      implementation: "0xE238cEFc68F9CD55061a8Ab7E339cF9178dFf55B",
    },
    AppFactory: {
      name: "AppFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xB3b7502C47E16a1E3c6d660b73006f45Ec327B0B",
      implementation: "0x7599371450F2D8e0d47a9A1cceba263c07326500",
    },
    FeedFactory: {
      name: "FeedFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x591c6e036a6bC92C6bF0d1dB991D06E74C2B9a6A",
      implementation: "0xB86fD4e2e4B6497Be2124060E8876F6e2270D517",
    },
    GraphFactory: {
      name: "GraphFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x837E95c3A69Cd6efa3eCDE87A3a07801AAB25Ba0",
      implementation: "0x6D47B89d2b42680091C71c2B518e497727D60a5A",
    },
    GroupFactory: {
      name: "GroupFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x9810C41e805164f30b58395b2Af976B3229b0CE6",
      implementation: "0xd789934b2200ac1fC54Ba89fa24E2aE7BCEf6Be5",
    },
    NamespaceFactory: {
      name: "NamespaceFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x3155ccbeefbA266a4B6060fB1F9d4b8591d1De3F",
      implementation: "0x840C2394546C410AAe6D14D127CF8f14B5ed041C",
    },
    LensFactory: {
      name: "LensFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x1fa75D26819Ac733bf7B1C1B36C3F8aEF32d2Cc0",
      implementation: "0xd28bBAd2Cd8047d09cEB72FDE7f372e89DC3525F",
    },
    LensGlobalFeed: {
      name: "LensGlobalFeed",
      contractName: "Feed",
      address: "0xcB5E109FFC0E15565082d78E68dDDf2573703580",
    },
    LensGlobalGraph: {
      name: "LensGlobalGraph",
      contractName: "Graph",
      address: "0x433025d9718302E7B2e1853D712d96F00764513F",
    },
    LensGlobalNamespace: {
      name: "LensGlobalNamespace",
      contractName: "Namespace",
      address: "0x1aA55B9042f08f45825dC4b651B64c9F98Af4615",
    },
    AccessControlFactoryImpl: {
      contractName: "AccessControlFactory",
      address: "0x2c87697FACd319959BEA999dd2cC7d27342F3554",
    },
    AccountFactoryImpl: {
      contractName: "AccountFactory",
      address: "0xE238cEFc68F9CD55061a8Ab7E339cF9178dFf55B",
    },
    AppFactoryImpl: {
      contractName: "AppFactory",
      address: "0x7599371450F2D8e0d47a9A1cceba263c07326500",
    },
    FeedFactoryImpl: {
      contractName: "FeedFactory",
      address: "0xB86fD4e2e4B6497Be2124060E8876F6e2270D517",
    },
    GraphFactoryImpl: {
      contractName: "GraphFactory",
      address: "0x6D47B89d2b42680091C71c2B518e497727D60a5A",
    },
    NamespaceFactoryImpl: {
      contractName: "NamespaceFactory",
      address: "0x840C2394546C410AAe6D14D127CF8f14B5ed041C",
    },
    LensFactoryImpl: {
      contractName: "LensFactory",
      address: "0xd28bBAd2Cd8047d09cEB72FDE7f372e89DC3525F",
      constructorArguments: [
        {
          accessControlFactory: "0x0d028419c270C2d366929f459418a4905D1B778F",
          accountFactory: "0x26C7fd63B06deb4F9E4B5955D540767b9Ac7bbaa",
          appFactory: "0xB3b7502C47E16a1E3c6d660b73006f45Ec327B0B",
          groupFactory: "0x9810C41e805164f30b58395b2Af976B3229b0CE6",
          feedFactory: "0x591c6e036a6bC92C6bF0d1dB991D06E74C2B9a6A",
          graphFactory: "0x837E95c3A69Cd6efa3eCDE87A3a07801AAB25Ba0",
          namespaceFactory: "0x3155ccbeefbA266a4B6060fB1F9d4b8591d1De3F",
        },
        {
          accountBlockingRule: "0x3B766408f14141F4B567681A1c29CFB58D1C1574",
          groupGatedFeedRule: "0x40a2A352583B266097234f1260B5AAfB7B129047",
          usernameSimpleCharsetRule: "0x5DBE2054903512ff26E336C0cBdEd6E0DDBEAc4F",
          banMemberGroupRule: "0xe12543e5f917adA5aeF92B26Bc08E1925ec9F53F",
          addRemovePidGroupRule: "0x5C990114129dAb27F015F2d5ba756bD102807b86",
          usernameReservedNamespaceRule: "0x0E8B9960f2a891A561f2d52F0Cd98cCA19CDF8c9",
        },
      ],
    },
    LensCreate2Impl: {
      name: "LensCreate2Impl",
      contractName: "LensCreate2",
      address: "0x52AF9CF29976C310E3DE03C509E108edB6edb8c0",
    },
    ActionHubImpl: {
      contractName: "ActionHub",
      address: "0x4596724eA4bA9Cac81CDcD0d1ca860a3a92248b5",
    },
    ActionHub: {
      name: "ActionHub",
      contractName: "ActionHub",
      address: "0xc6D57Ee750Ef2ee017a9E985A0C4198bEd16A802",
      implementation: "0x4596724eA4bA9Cac81CDcD0d1ca860a3a92248b5",
    },
    LensFeesImpl: {
      name: "LensFeesImpl",
      contractName: "LensFees",
      address: "0xE23292bEA6bb5874A839a7E1FfB7301657353187",
    },
    LensFees: {
      name: "LensFees",
      contractName: "LensFees",
      address: "0xFd577b6317F4ab53D5675E85b8DEB7A814165C3C",
      implementation: "0xE23292bEA6bb5874A839a7E1FfB7301657353187",
    },
    TippingAccountActionImpl: {
      contractName: "TippingAccountAction",
      address: "0xA2fc9eDa3F7f90DA9f7Fa40646d631986D5B3c74",
    },
    TippingAccountAction: {
      name: "TippingAccountAction",
      contractName: "TippingAccountAction",
      address: "0x20170F1e53851dF4d9ea236a28399493C5B152c0",
      implementation: "0xA2fc9eDa3F7f90DA9f7Fa40646d631986D5B3c74",
    },
    TippingPostActionImpl: {
      contractName: "TippingPostAction",
      address: "0xc976641660A15cc66C26f10BD72e4F956EAAFD4f",
    },
    TippingPostAction: {
      name: "TippingPostAction",
      contractName: "TippingPostAction",
      address: "0x4984Ec4FfD17E64c8F91691D829BD5aeA287E47b",
      implementation: "0xc976641660A15cc66C26f10BD72e4F956EAAFD4f",
    },
    SimpleCollectActionImpl: {
      contractName: "SimpleCollectAction",
      address: "0x1b5ADAc187Aa132D80B41E14B7C5b1F7AD794074",
    },
    SimpleCollectAction: {
      name: "SimpleCollectAction",
      contractName: "SimpleCollectAction",
      address: "0x1cEE1cd464C4E44e80aCDB0B0e33f88849070F6E",
      implementation: "0x1b5ADAc187Aa132D80B41E14B7C5b1F7AD794074",
    },
    AccountBlockingRuleImpl: {
      name: "AccountBlockingRuleImpl",
      contractName: "AccountBlockingRule",
      address: "0xb6607e2678FD4b28858Ee7ee447C236d23b71c28",
    },
    AccountBlockingRule: {
      name: "AccountBlockingRule",
      contractName: "AccountBlockingRule",
      address: "0x3B766408f14141F4B567681A1c29CFB58D1C1574",
      implementation: "0xb6607e2678FD4b28858Ee7ee447C236d23b71c28",
    },
    AdditionRemovalPidGroupRuleImpl: {
      name: "AdditionRemovalPidGroupRuleImpl",
      contractName: "AdditionRemovalPidGroupRule",
      address: "0xf0d5B29A3F1Ad9CCfb26c9E58D11Bb3DFD382727",
    },
    AdditionRemovalPidGroupRule: {
      name: "AdditionRemovalPidGroupRule",
      contractName: "AdditionRemovalPidGroupRule",
      address: "0x5C990114129dAb27F015F2d5ba756bD102807b86",
      implementation: "0xf0d5B29A3F1Ad9CCfb26c9E58D11Bb3DFD382727",
    },
    BanMemberGroupRuleImpl: {
      name: "BanMemberGroupRuleImpl",
      contractName: "BanMemberGroupRule",
      address: "0x10A5b2f7430b85B117E7DE77b9343e024193c7Ac",
    },
    BanMemberGroupRule: {
      name: "BanMemberGroupRule",
      contractName: "BanMemberGroupRule",
      address: "0xe12543e5f917adA5aeF92B26Bc08E1925ec9F53F",
      implementation: "0x10A5b2f7430b85B117E7DE77b9343e024193c7Ac",
    },
    GroupGatedFeedRuleImpl: {
      name: "GroupGatedFeedRuleImpl",
      contractName: "GroupGatedFeedRule",
      address: "0x3Ccda5a574B75afbFc235E6fC25c940df181d956",
    },
    GroupGatedFeedRule: {
      name: "GroupGatedFeedRule",
      contractName: "GroupGatedFeedRule",
      address: "0x40a2A352583B266097234f1260B5AAfB7B129047",
      implementation: "0x3Ccda5a574B75afbFc235E6fC25c940df181d956",
    },
    UsernameLengthNamespaceRuleImpl: {
      name: "UsernameLengthNamespaceRuleImpl",
      contractName: "UsernameLengthNamespaceRule",
      address: "0xbe2d90D7b7b7c237f16c16424A6FAe9400A4767B",
    },
    UsernameLengthNamespaceRule: {
      name: "UsernameLengthNamespaceRule",
      contractName: "UsernameLengthNamespaceRule",
      address: "0xb541055222C87EE86A72558e8B582a9C0158A0d8",
      implementation: "0xbe2d90D7b7b7c237f16c16424A6FAe9400A4767B",
    },
    UsernameReservedNamespaceRuleImpl: {
      name: "UsernameReservedNamespaceRuleImpl",
      contractName: "UsernameReservedNamespaceRule",
      address: "0x5B00ec39877EdD2711480A713712f6e02be9e214",
    },
    UsernameReservedNamespaceRule: {
      name: "UsernameReservedNamespaceRule",
      contractName: "UsernameReservedNamespaceRule",
      address: "0x0E8B9960f2a891A561f2d52F0Cd98cCA19CDF8c9",
      implementation: "0x5B00ec39877EdD2711480A713712f6e02be9e214",
    },
    UsernameSimpleCharsetNamespaceRuleImpl: {
      name: "UsernameSimpleCharsetNamespaceRuleImpl",
      contractName: "UsernameSimpleCharsetNamespaceRule",
      address: "0x1F8D82763f04e544278522b923eA924258dF9c2C",
    },
    UsernameSimpleCharsetNamespaceRule: {
      name: "UsernameSimpleCharsetNamespaceRule",
      contractName: "UsernameSimpleCharsetNamespaceRule",
      address: "0x5DBE2054903512ff26E336C0cBdEd6E0DDBEAc4F",
      implementation: "0x1F8D82763f04e544278522b923eA924258dF9c2C",
    },
    SimplePaymentFeedRuleImpl: {
      contractName: "SimplePaymentFeedRule",
      address: "0xd9d34b26259ca6EE44bfd1040498095B86E8a796",
    },
    SimplePaymentFeedRule: {
      name: "SimplePaymentFeedRule",
      contractName: "SimplePaymentFeedRule",
      address: "0xD79dfb3f8290c0Da1899B91C3BbFE9aB56198004",
      implementation: "0xd9d34b26259ca6EE44bfd1040498095B86E8a796",
    },
    TokenGatedFeedRuleImpl: {
      name: "TokenGatedFeedRuleImpl",
      contractName: "TokenGatedFeedRule",
      address: "0xEfE523C811220ce8929491a6e9620Fc58b197fC8",
    },
    TokenGatedFeedRule: {
      name: "TokenGatedFeedRule",
      contractName: "TokenGatedFeedRule",
      address: "0xe320D45b21243771dC5a47909DB2389Abab81d5B",
      implementation: "0xEfE523C811220ce8929491a6e9620Fc58b197fC8",
    },
    TokenGatedGraphRuleImpl: {
      name: "TokenGatedGraphRuleImpl",
      contractName: "TokenGatedGraphRule",
      address: "0x84204cfeA1306f3Ca7dde38dc1a387E68F55A08E",
    },
    TokenGatedGraphRule: {
      name: "TokenGatedGraphRule",
      contractName: "TokenGatedGraphRule",
      address: "0x24779f9c251Cc5C2Ac0aE5C9f274666224e78035",
      implementation: "0x84204cfeA1306f3Ca7dde38dc1a387E68F55A08E",
    },
    FollowersOnlyPostRuleImpl: {
      name: "FollowersOnlyPostRuleImpl",
      contractName: "FollowersOnlyPostRule",
      address: "0x71ee189620688D9199d92145E8f58fC516673F47",
    },
    FollowersOnlyPostRule: {
      name: "FollowersOnlyPostRule",
      contractName: "FollowersOnlyPostRule",
      address: "0x4f573ed906Cf23cb43f86ad461d10e43E29802ce",
      implementation: "0x71ee189620688D9199d92145E8f58fC516673F47",
    },
    GroupGatedGraphRuleImpl: {
      contractName: "GroupGatedGraphRule",
      address: "0xea1Bb2580F3Ef742B1c3f0247CfBEAA35572db66",
    },
    GroupGatedGraphRule: {
      name: "GroupGatedGraphRule",
      contractName: "GroupGatedGraphRule",
      address: "0x754839C5917a063EB923e83f1194E6737BbB451C",
      implementation: "0xea1Bb2580F3Ef742B1c3f0247CfBEAA35572db66",
    },
    SimplePaymentFollowRuleImpl: {
      contractName: "SimplePaymentFollowRule",
      address: "0x8F7F84D11Ea2454914900ccDaf834912597e4e36",
    },
    SimplePaymentFollowRule: {
      name: "SimplePaymentFollowRule",
      contractName: "SimplePaymentFollowRule",
      address: "0x10E044f026bD51f855a10F2277e35Ed4c896db7e",
      implementation: "0x8F7F84D11Ea2454914900ccDaf834912597e4e36",
    },
    TokenGatedFollowRuleImpl: {
      contractName: "TokenGatedFollowRule",
      address: "0xFB18116CC5fbDF492ecaa353F9BF915940A16E89",
    },
    TokenGatedFollowRule: {
      name: "TokenGatedFollowRule",
      contractName: "TokenGatedFollowRule",
      address: "0x8b39e5E2B7a4Ce8FcD8F4601Ca1a43486A9d7Ca4",
      implementation: "0xFB18116CC5fbDF492ecaa353F9BF915940A16E89",
    },
    MembershipApprovalGroupRuleImpl: {
      contractName: "MembershipApprovalGroupRule",
      address: "0xB07A14a7D743E054666AB72720562F6b8ba0235c",
    },
    MembershipApprovalGroupRule: {
      name: "MembershipApprovalGroupRule",
      contractName: "MembershipApprovalGroupRule",
      address: "0x353064B2EE992483398dAb32267E1aD597e502B9",
      implementation: "0xB07A14a7D743E054666AB72720562F6b8ba0235c",
    },
    SimplePaymentGroupRuleImpl: {
      contractName: "SimplePaymentGroupRule",
      address: "0x6B32CB6Bd0F966A3a1b8ea88819657aaC614a900",
    },
    SimplePaymentGroupRule: {
      name: "SimplePaymentGroupRule",
      contractName: "SimplePaymentGroupRule",
      address: "0x6d2251D69fba6D7e761c72d55Cf478d741cB4Ac1",
      implementation: "0x6B32CB6Bd0F966A3a1b8ea88819657aaC614a900",
    },
    TokenGatedGroupRuleImpl: {
      contractName: "TokenGatedGroupRule",
      address: "0x352E52D5Ba3d1141159490Ed2da9D09048Fcd09e",
    },
    TokenGatedGroupRule: {
      name: "TokenGatedGroupRule",
      contractName: "TokenGatedGroupRule",
      address: "0x0740653858863E8f4f0c734553c2bEf0Dc54Bfa9",
      implementation: "0x352E52D5Ba3d1141159490Ed2da9D09048Fcd09e",
    },
    TokenGatedNamespaceRuleImpl: {
      contractName: "TokenGatedNamespaceRule",
      address: "0x676f6A3ebED48a0E21118B0D98C5F20067983Eab",
    },
    TokenGatedNamespaceRule: {
      name: "TokenGatedNamespaceRule",
      contractName: "TokenGatedNamespaceRule",
      address: "0xd108e4215963f9CB13f47A4B08110D0fF51D52D8",
      implementation: "0x676f6A3ebED48a0E21118B0D98C5F20067983Eab",
    },
    UsernamePricePerLengthNamespaceRuleImpl: {
      contractName: "UsernamePricePerLengthNamespaceRule",
      address: "0xFDD1eD00eFAB19fD43217cD56217466720e33717",
    },
    UsernamePricePerLengthNamespaceRule: {
      name: "UsernamePricePerLengthNamespaceRule",
      contractName: "UsernamePricePerLengthNamespaceRule",
      address: "0xad917a20bca258020FF81590f62Ff05366eBb180",
      implementation: "0xFDD1eD00eFAB19fD43217cD56217466720e33717",
    },
    GroupFactoryImpl: {
      contractName: "GroupFactory",
      address: "0xd789934b2200ac1fC54Ba89fa24E2aE7BCEf6Be5",
    },
    LensNativePaymentHelperImpl: {
      contractName: "LensNativePaymentHelper",
      address: "0xf14155b9F77E2302A8a849038B94891F98909C7b",
    },
    LensNativePaymentHelper: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x1cCf0A481e3824E271C4b89a79E00c838D4A465B",
      implementation: "0x38Dc515EEaaeb0160Ff9F0CA4d326Dd04Ba32791",
    },
  },
  testnet: {
    AppImpl: {
      contractName: "App",
      address: "0x72937a847162b079A6D41a3337FD6D384aDA3C8E",
    },
    AccountImpl: {
      contractName: "Account",
      address: "0xBb507737f0686b71588d54d7758bCc4969D9a497",
    },
    FeedImpl: {
      contractName: "Feed",
      address: "0x5c42953E74fa9b1Be38304a3a99Ed0D3b4659df1",
    },
    GraphImpl: {
      contractName: "Graph",
      address: "0xa8E929435EC93956b055938930dbB134db984E49",
    },
    GroupImpl: {
      contractName: "Group",
      address: "0x9CEB814FE36C7613F0fB4841D8d2a0e4Ad59f817",
    },
    NamespaceImpl: {
      contractName: "Namespace",
      address: "0x1976ba9fFEeeD545A114C6Ae274b878F5E389deC",
    },
    AccessControlFactory: {
      name: "AccessControlFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x5eb740362F17815Ae67EBcA6420Cbb350f714C3E",
    },
    AccountFactory: {
      name: "AccountFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xE55C2154d1766a9C6319dBD989C89867b0457358",
    },
    AppFactory: {
      name: "AppFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xc650f3CcfF7801F5e95a99B99AAbD2f6319d38ed",
    },
    FeedFactory: {
      name: "FeedFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xb8169FB0FaB6a699854fd4fD2457b990988E1372",
    },
    GraphFactory: {
      name: "GraphFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x7cbB07bD2E80A27c59Ed707B79024cC5e54dEaF0",
    },
    GroupFactory: {
      name: "GroupFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xEF51808f8a2399282CDd156E897473b282998a29",
    },
    NamespaceFactory: {
      name: "NamespaceFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xb69CBb69041a30216e2fe13E9700b32761b859C3",
    },
    AccountBlockingRuleImpl: {
      name: "AccountBlockingRuleImpl",
      contractName: "AccountBlockingRule",
      address: "0x64CB53670D3938Fe919818470E909241a3FAB706",
    },
    AccountBlockingRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0xf3de16e99679243E36BB449CADEA247Cf61450e1",
      implementation: "0x64CB53670D3938Fe919818470E909241a3FAB706",
    },
    GroupGatedFeedRuleImpl: {
      name: "GroupGatedFeedRuleImpl",
      contractName: "GroupGatedFeedRule",
      address: "0x565b641724308948E383cbC396AaF12c0B3e5B7B",
    },
    GroupGatedFeedRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0xbDE71d01eC6d6c49b2bcc9067EcA352a17D25A91",
      implementation: "0x565b641724308948E383cbC396AaF12c0B3e5B7B",
    },
    UsernameSimpleCharsetNamespaceRuleImpl: {
      name: "UsernameSimpleCharsetNamespaceRuleImpl",
      contractName: "UsernameSimpleCharsetNamespaceRule",
      address: "0xA2eE714B73229c2C7102adDb9f56B38E22FC4AdE",
    },
    UsernameSimpleCharsetNamespaceRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x1dB51f49DE4D266B2ab7D62656510083e0AACe44",
    },
    BanMemberGroupRuleImpl: {
      name: "BanMemberGroupRuleImpl",
      contractName: "BanMemberGroupRule",
      address: "0x99f398Bfc70339D2244a7e999357386CC0902528",
    },
    BanMemberGroupRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0xd12E1aD028d550F85F2a8d9130C46dB77A6A0a41",
      implementation: "0x99f398Bfc70339D2244a7e999357386CC0902528",
    },
    AdditionRemovalPidGroupRuleImpl: {
      name: "AdditionRemovalPidGroupRuleImpl",
      contractName: "AdditionRemovalPidGroupRule",
      address: "0x6edf951cADdd5450EfFfA09413195d454D74D53B",
    },
    AdditionRemovalPidGroupRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x90d39577A9a6C76ED8a5b2B908a7053ef5430194",
      implementation: "0x6edf951cADdd5450EfFfA09413195d454D74D53B",
    },
    LensFactory: {
      name: "LensFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0x408BC8704Ce76DDcd00cf3a83Acd24de4101eE2D",
    },
    LensFees: {
      name: "LensFactory",
      contractName: "TransparentUpgradeableProxy",
      address: "0xFd577b6317F4ab53D5675E85b8DEB7A814165C3C",
    },
    LensFeesImpl: {
      name: "LensFeesImpl",
      contractName: "LensFees",
      address: "0xc66f5B177DD54b86b154717f533C1B8Ac7a0773e",
      constructorArguments: ["0xcB6C7b2E340D50701d45d55507f19A5cE5d72330", 150],
    },
    LensExampleAccount: {
      name: "LensExampleAccount",
      contractName: "Account",
      address: "0xAA496C6e94fC5254313cfB9B34f5A499ee9dA771",
    },
    LensGlobalGroup: {
      name: "LensGlobalGroup",
      contractName: "Group",
      address: "0x2550c78610A2Db16A6919034b7A81D6CF652cc50",
    },
    LensGlobalFeed: {
      name: "LensGlobalFeed",
      contractName: "Feed",
      address: "0x31232Cb7dE0dce17949ffA58E9E38EEeB367C871",
    },
    LensGlobalGraph: {
      name: "LensGlobalGraph",
      contractName: "Graph",
      address: "0x4d97287FF1A0e030cA4604EcDa9be355dd8A8BaC",
    },
    LensGlobalNamespace: {
      name: "LensGlobalNamespace",
      contractName: "Namespace",
      address: "0xFBEdC5C278cc01A843D161d5469202Fe4EDC99E4",
    },
    LensGlobalApp: {
      name: "LensGlobalApp",
      contractName: "App",
      address: "0xC75A89145d765c396fd75CbD16380Eb184Bd2ca7",
    },
    ActionHubImpl: {
      name: "ActionHubImpl",
      contractName: "ActionHub",
      address: "0x865856952cceF0C3CBa5589543A6e4Fdac00B5fA",
    },
    ActionHub: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x4A92a97Ff3a3604410945ae8CA25df4fBB2fDC11",
    },
    OwnerAdminOnlyAccessControl: {
      contractName: "OwnerAdminOnlyAccessControl",
      address: "0xbcBd368a8251BD06918D3edef68e1C8e8F853633",
    },
    SimplePaymentFeedRuleImpl: {
      contractName: "SimplePaymentFeedRule",
      address: "0x22A9a270A599f535518C830bac25401cB569eCb1",
    },
    SimplePaymentFeedRule: {
      name: "SimplePaymentFeedRule",
      contractName: "TransparentUpgradeableProxy",
      address: "0x55efA60BE4fd711C114B853A5d251b95bdCC4F66",
      implementation: "0x22A9a270A599f535518C830bac25401cB569eCb1",
    },
    TokenGatedFeedRuleImpl: {
      name: "TokenGatedFeedRuleImpl",
      contractName: "TokenGatedFeedRule",
      address: "0x50f2049e507Db26c6EA47E9c08ed140da3C31f19",
    },
    TokenGatedFeedRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x54649BfA8Ea33eDD90f93592Fe87627be6C76013",
      implementation: "0x50f2049e507Db26c6EA47E9c08ed140da3C31f19",
    },
    FollowersOnlyPostRuleImpl: {
      name: "FollowersOnlyPostRuleImpl",
      contractName: "FollowersOnlyPostRule",
      address: "0x58d264095F45B597Fd17ABF46bC837061E3D844b",
    },
    FollowersOnlyPostRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x8956af058dF5Cb3609Fc10B2ea293764f55F5B0c",
      implementation: "0x58d264095F45B597Fd17ABF46bC837061E3D844b",
    },
    GroupGatedGraphRuleImpl: {
      name: "GroupGatedGraphRuleImpl",
      contractName: "GroupGatedGraphRule",
      address: "0x2A2E15533320F25E170362905a3DFF039865aCde",
    },
    GroupGatedGraphRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x2Cb90d67d4396385060F4f18B036176005B21d56",
      implementation: "0x2A2E15533320F25E170362905a3DFF039865aCde",
    },
    TokenGatedGraphRuleImpl: {
      name: "TokenGatedGraphRuleImpl",
      contractName: "TokenGatedGraphRule",
      address: "0x8FAaC49C588d19f5F723590fFd8d094bA396230e",
    },
    TokenGatedGraphRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x2662F99dC985d3dC710D3c13142e2D156874878d",
      implementation: "0x8FAaC49C588d19f5F723590fFd8d094bA396230e",
    },
    SimplePaymentFollowRuleImpl: {
      contractName: "SimplePaymentFollowRule",
      address: "0xE3C9a3d257E3B73edc2feD080A0eE97BD5229381",
    },
    SimplePaymentFollowRule: {
      name: "SimplePaymentFollowRule",
      contractName: "TransparentUpgradeableProxy",
      address: "0x7EA84D750E8C2b7D0EB5e8114f54111d78Eeb992",
      implementation: "0xE3C9a3d257E3B73edc2feD080A0eE97BD5229381",
    },
    TokenGatedFollowRuleImpl: {
      name: "TokenGatedFollowRuleImpl",
      contractName: "TokenGatedFollowRule",
      address: "0xb4e6d4F6a753e88eb108b304b35d1D8DeC7D7A12",
    },
    TokenGatedFollowRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x51BB76bae8eb8f1B69B8F4c3e310d49423a9aF33",
      implementation: "0xb4e6d4F6a753e88eb108b304b35d1D8DeC7D7A12",
    },
    MembershipApprovalGroupRuleImpl: {
      name: "MembershipApprovalGroupRuleImpl",
      contractName: "MembershipApprovalGroupRule",
      address: "0xC76fDa79062F63083c65c5Ce639e1C02F1EdEd00",
    },
    MembershipApprovalGroupRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x6d467E7f34e87C0D7185FAf692B43eD5792B86f5",
      implementation: "0xC76fDa79062F63083c65c5Ce639e1C02F1EdEd00",
    },
    SimplePaymentGroupRuleImpl: {
      contractName: "SimplePaymentGroupRule",
      address: "0x2dbA07936cAAB8B77d1bd7C0D87486DCB05C1903",
    },
    SimplePaymentGroupRule: {
      name: "SimplePaymentGroupRule",
      contractName: "TransparentUpgradeableProxy",
      address: "0xC99b11687d91EC4f6e65EcFa205795101BbaB5B2",
      implementation: "0x2dbA07936cAAB8B77d1bd7C0D87486DCB05C1903",
    },
    TokenGatedGroupRuleImpl: {
      name: "TokenGatedGroupRuleImpl",
      contractName: "TokenGatedGroupRule",
      address: "0x6E44365C406c1B0e9a257d03Af8001182192925D",
    },
    TokenGatedGroupRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x3e3a35d2A67583975569c4a19761268AFB958cEF",
      implementation: "0x6E44365C406c1B0e9a257d03Af8001182192925D",
    },
    UsernameLengthNamespaceRuleImpl: {
      name: "UsernameLengthNamespaceRuleImpl",
      contractName: "UsernameLengthNamespaceRule",
      address: "0xE097df1c30F0fff2475C4A2aE81f3F97649ee81e",
    },
    UsernameLengthNamespaceRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x0F0Fe596bAfddbd2Eb4037Fc111b9C4aE5192C5C",
      implementation: "0xE097df1c30F0fff2475C4A2aE81f3F97649ee81e",
    },
    UsernameReservedNamespaceRuleImpl: {
      name: "UsernameReservedNamespaceRuleImpl",
      contractName: "UsernameReservedNamespaceRule",
      address: "0x05006b08Bd61869cAe36D2e85cEB5062e8BE3F6a",
    },
    UsernameReservedNamespaceRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x9a8b0e3344f5ca5f6fc9FcEb8fF543FDeF5eb2b9",
      implementation: "0x05006b08Bd61869cAe36D2e85cEB5062e8BE3F6a",
    },
    TokenGatedNamespaceRuleImpl: {
      name: "TokenGatedNamespaceRuleImpl",
      contractName: "TokenGatedNamespaceRule",
      address: "0xF879a56cBc43f0d79dA839d75bbE80a162f01340",
    },
    TokenGatedNamespaceRule: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x87A69174530aA735768096c5F24a0F559553Dd84",
      implementation: "0xF879a56cBc43f0d79dA839d75bbE80a162f01340",
    },
    UsernamePricePerLengthNamespaceRuleImpl: {
      contractName: "UsernamePricePerLengthNamespaceRule",
      address: "0x5eEFE4a92ABcb6F5B0963598c7b0607047d0BB21",
    },
    UsernamePricePerLengthNamespaceRule: {
      name: "UsernamePricePerLengthNamespaceRule",
      contractName: "TransparentUpgradeableProxy",
      address: "0x4aBdf719Bc6659e91233c62D4d08D6F4229989e8",
      implementation: "0x5eEFE4a92ABcb6F5B0963598c7b0607047d0BB21",
    },
    TippingAccountActionImpl: {
      name: "TippingAccountActionImpl",
      contractName: "TippingAccountAction",
      address: "0xdB82512F84B3E46B0fc7f6A38eE89E55e7a75447",
    },
    TippingAccountAction: {
      contractName: "TransparentUpgradeableProxy",
      address: "0xda614A06972C70a8d50D494FB678d48cf536f769",
      implementation: "0xdB82512F84B3E46B0fc7f6A38eE89E55e7a75447",
    },
    TippingPostActionImpl: {
      name: "TippingPostActionImpl",
      contractName: "TippingPostAction",
      address: "0xEE4C444Bd08BC202324D88EB1FC954B08Be77c77",
    },
    TippingPostAction: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x34EF0F5e41cB6c7ad9438079c179d70C7567ae00",
      implementation: "0xEE4C444Bd08BC202324D88EB1FC954B08Be77c77",
    },
    SimpleCollectActionImpl: {
      name: "SimpleCollectActionImpl",
      contractName: "SimpleCollectAction",
      address: "0xD2f90542be809d10C416a6f6E0619100A6B0FdC5",
    },
    SimpleCollectAction: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x17d5B3917Eab14Ab4923DEc597B39EF64863C830",
      implementation: "0xD2f90542be809d10C416a6f6E0619100A6B0FdC5",
    },
    LensCreate2: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x52AF9CF29976C310E3DE03C509E108edB6edb8c0",
    },
    LensCreate2Impl: {
      contractName: "LensCreate2",
      address: "0xdd7Aa96DE3CccCb5dF635227869a6E7c5a301D6F",
    },
    GroupFactoryImpl: {
      contractName: "GroupFactory",
      address: "0xa27e1e5d44da3F8113d11E35574390f24b1056E8",
    },
    LensFactoryImpl: {
      contractName: "LensFactory",
      address: "0xa9484f961f2896cA9FFA6AAE1F93bC789F2fAc03",
      constructorArguments: [
        {
          accessControlFactory: "0x5eb740362F17815Ae67EBcA6420Cbb350f714C3E",
          accountFactory: "0xE55C2154d1766a9C6319dBD989C89867b0457358",
          appFactory: "0xc650f3CcfF7801F5e95a99B99AAbD2f6319d38ed",
          groupFactory: "0xEF51808f8a2399282CDd156E897473b282998a29",
          feedFactory: "0xb8169FB0FaB6a699854fd4fD2457b990988E1372",
          graphFactory: "0x7cbB07bD2E80A27c59Ed707B79024cC5e54dEaF0",
          namespaceFactory: "0xb69CBb69041a30216e2fe13E9700b32761b859C3",
        },
        {
          accountBlockingRule: "0xf3de16e99679243E36BB449CADEA247Cf61450e1",
          groupGatedFeedRule: "0xbDE71d01eC6d6c49b2bcc9067EcA352a17D25A91",
          usernameSimpleCharsetRule: "0x1dB51f49DE4D266B2ab7D62656510083e0AACe44",
          banMemberGroupRule: "0xd12E1aD028d550F85F2a8d9130C46dB77A6A0a41",
          addRemovePidGroupRule: "0x90d39577A9a6C76ED8a5b2B908a7053ef5430194",
          usernameReservedNamespaceRule: "0x9a8b0e3344f5ca5f6fc9FcEb8fF543FDeF5eb2b9",
        },
      ],
    },
    LensNativePaymentHelperImpl: {
      contractName: "LensNativePaymentHelper",
      address: "0x38Dc515EEaaeb0160Ff9F0CA4d326Dd04Ba32791",
    },
    LensNativePaymentHelper: {
      contractName: "TransparentUpgradeableProxy",
      address: "0x1cCf0A481e3824E271C4b89a79E00c838D4A465B",
      implementation: "0x38Dc515EEaaeb0160Ff9F0CA4d326Dd04Ba32791",
    },
  },
} as const;
