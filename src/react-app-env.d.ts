/// <reference types="react-scripts" />
interface WindowChain {
  ethereum?: {
    isMetaMask?: true;
    request: (...args: any[]) => void;
  };
}

// Target the module containing the `ProcessEnv` interface
// https://www.typescriptlang.org/docs/handbook/declaration-merging.html#module-augmentation
declare namespace NodeJS {
  // Merge the existing `ProcessEnv` definition with ours
  // https://www.typescriptlang.org/docs/handbook/declaration-merging.html#merging-interfaces
  export interface ProcessEnv {
    NODE_ENV: "development" | "production" | "test";
    REACT_APP_CHAIN_ID: string;
  }
}
