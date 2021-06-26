export interface LinkConfigState {
  target?: string;
  label?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  group?: LinkConfigState[];
}

export interface NavHeaderProps {
  account: string;
  onConnect?: () => void;
  onLogout?: () => void;
  linkConfig: LinkConfigState[];
}
