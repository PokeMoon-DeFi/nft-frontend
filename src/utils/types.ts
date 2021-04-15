import { FC } from "react";
import { SvgProps } from "nft-uikit";

export interface Config {
  title: string;
  icon?: FC<SvgProps>;
  connectorId: ConnectorNames;
}

export enum ConnectorNames {
  Injected = "injected",
  WalletConnect = "walletconnect",
  BSC = "bsc",
}
