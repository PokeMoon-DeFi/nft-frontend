import BlastoffMarketAbi from "config/abi/Marketplace.json";

export const getMarketAbi = (name: string) => {
  switch (name) {
    case "blastOff": {
      return BlastoffMarketAbi;
    }
    // case "ampedUp":{}
    // case "meanGreens": {}
    // default: {}
  }
};
