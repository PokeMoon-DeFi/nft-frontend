import { FC, SVGAttributes } from "react";

interface SvgProps extends SVGAttributes<HTMLOrSVGElement> {}

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
