// 97 = BSC test
// 56 = BSC main
// 777 = cTH :P

const contracts = {
  // Infrastructure
  // Unova
  unova: {
    97: "0x700b57582d08620966adb67396D6723Fa38b0370",
    56: "0x283e3AB66889E49dAFac461eC983E81B49Fb3Cb3",
  },
  // Wynaut Bridge
  wynautBridge: {
    97: "0x342292935A16d9655D54663083763A6012CF945a",
    56: "0x1b830890347768297100DD5dc4f38af34aAF38b8",
  },
  // Meowth Bridge
  meowthBridge: {
    97: "0xd7aC26A8125E0AD80049AD59f72d7ffE67D4117b",
    56: "0xcf39DEC43eAB07D70C3D32776F3ae255ADF69f22",
  },
  // BrindletonBay (PB-2114 Bank)
  brindletonBay: {
    56: "0xa3448A6D8862cc5F481655D65fcAAAD206BD5964",
  },
  // BNB-BUSD
  bnbBusd: {
    56: "0x7b9c5504A3ae1DD3649e97D0Ff36aC80Ec7fb409",
  },
  // MNT-BNB
  mntBnb: {
    56: "0x85d1C8091CCD6aC92774C4FF38b82B4df42c6662",
  },
  // MNT-BUSD
  mntBusd: {
    56: "0x5726887Ee7648968996Cc6dEbF997D5c831BcDa7",
  },
  // KBN-BNB
  kbnBnb: {
    56: "0x290836C9e6bDC2b89a26AD91B039564F5fa3A731",
  },
  // KBN-BUSD
  kbnBusd: {
    56: "0xE81BdBD70DE7d324f23525d3f97c11F028D237b8",
  },
  // PB-BNB
  pb2114Bnb: {
    56: "0xf65bB897fdCc3e734957BA479EA90F3559b838C2",
  },
  // Final Tokens
  // Meownaut
  meownaut: {
    97: "0xa96D0F886d9017011DB9405946dDc8ce8F8D244B",
    56: "0x498e3739d58AAe82656030BCBcCf5ac63E0E57e1",
  },
  // Koban
  koban: {
    56: "0x030708208dC29B1688b212081F31cDB59097A67D",
  },
  // Pokeballs
  pb2114: {
    56: "0xBEEa03a1768b8CFa0496B4e3aCf3bf5Cc7d69904",
  },
  // Meowth
  meowth: {
    97: "0x6310b990B73a284cC212e8c113CD9868A2CCaE5C",
    56: "0xe561479bebee0e606c19bb1973fc4761613e3c42",
  },
  // Wyanut
  wynaut: {
    97: "0xabEA66590051496808C79317201E5C9d8Ab517F9",
    56: "0x067a5ad3f0f91acf512ffe66ea77f37b4dcaaf18",
  },
  // OTHER TOKENS
  cake: {
    97: "0xa35062141Fa33BCA92Ce69FeD37D0E8908868AAe",
    56: "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
  },
  // Pegs
  wbnb: {
    97: "0x4921a7ba7e795ecaf4da59da536a5563e88cea0f",
    56: "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
  },
  btc: {
    56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    97: "",
  },
  eth: {
    56: "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
    97: "",
  },
  link: {
    56: "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
    97: "",
  },
  belt: {
    56: "0xc9FBedC033a1c479a6AD451ffE463025E92a1d38",
    97: "",
  },
  // Stables
  busd: {
    56: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    97: "0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee",
  },
  usdt: {
    56: "0x55d398326f99059ff775485246999027b3197955",
    97: "",
  },
  dai: {
    56: "0x23396cF899Ca06c4472205fC903bDB4de249D6fC",
    97: "0xec5dcb5dbf4b114c9d0f65bccab49ec54f6a0867",
  },
  ust: {
    56: "0x23396cf899ca06c4472205fc903bdb4de249d6fc",
    97: "",
  },

  // PCS (to be removed later, requires refactoring)
  syrup: {
    97: "0xfE1e507CeB712BDe086f3579d2c03248b2dB77f9",
    56: "0x009cF7bC57584b7998236eff51b98A168DceA9B0",
  },
  masterChef: {
    97: "0x700b57582d08620966adb67396D6723Fa38b0370",
    56: "0x73feaa1eE314F8c655E354234017bE2193C9E24E",
  },
  sousChef: {
    97: "0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a",
    56: "0x6ab8463a4185b80905e05a9ff80a2d6b714b9e95",
  },
  lottery: {
    97: "0x99c2EcD51d52c036B00130d882Bc65f20Fdecf9f",
    56: "0x3C3f2049cc17C136a604bE23cF7E42745edf3b91",
  },
  lotteryNFT: {
    97: "0x8175c10383511b3a1C68f9dB222dc14A19CC950e",
    56: "0x5e74094Cd416f55179DBd0E45b1a8ED030e396A1",
  },
  mulltiCall: {
    56: "0x1ee38d535d541c55c9dae27b12edf090c608e6fb",
    97: "0x67ADCB4dF3931b0C5Da724058ADC2174a9844412",
  },
  pancakeProfile: {
    56: "0xDf4dBf6536201370F95e06A0F8a7a70fE40E388a",
    97: "0x4B683C7E13B6d5D7fd1FeA9530F451954c1A7c8A",
  },
  pancakeRabbits: {
    56: "0xDf7952B35f24aCF7fC0487D01c8d5690a60DBa07",
    97: "0x60935F36e4631F73f0f407e68642144e07aC7f5E",
  },
  bunnyFactory: {
    56: "0xfa249Caa1D16f75fa159F7DFBAc0cC5EaB48CeFf",
    97: "0x707CBF373175fdB601D34eeBF2Cf665d08f01148",
  },
  claimRefund: {
    56: "0xE7e53A7e9E3Cf6b840f167eF69519175c497e149",
    97: "",
  },
  pointCenterIfo: {
    56: "0x3C6919b132462C1FEc572c6300E83191f4F0012a",
    97: "0xd2Ac1B1728Bb1C11ae02AB6e75B76Ae41A2997e3",
  },
  bunnySpecial: {
    56: "0xFee8A195570a18461146F401d6033f5ab3380849",
    97: "0x7b7b1583De1DeB32Ce6605F6deEbF24A0671c17C",
  },
};

export default contracts;
