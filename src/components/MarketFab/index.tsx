import { FC, useMemo, useState } from "react";
import SpeedDial from "@material-ui/lab/SpeedDial";
import Hidden from "@material-ui/core/Hidden";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import { useTheme } from "@material-ui/core/styles";
import SendIcon from "@material-ui/icons/Send";
import { Buy } from "nft-uikit";
import ShareIcon from "@material-ui/icons/Share";
import CallMadeIcon from "@material-ui/icons/CallMade";

interface Props {
  onSend: () => void;
  onSell: () => void;
  onShare: () => void;
  onScan: () => void;
  isOwner?: boolean;
}

const MarketFab: FC<Props> = ({ isOwner, onSend, onSell, onShare, onScan }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <Hidden smUp>
      <SpeedDial
        style={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
        ariaLabel="Speed Dial"
        onClick={() => setOpen(!open)}
        open={open}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          tooltipOpen
          key={"Scan"}
          tooltipTitle={"Scan"}
          icon={<CallMadeIcon />}
          onClick={onScan}
        />
        <SpeedDialAction
          tooltipOpen
          key={"Share"}
          tooltipTitle={"Share"}
          icon={<ShareIcon />}
          onClick={onShare}
        />
        {isOwner && (
          <SpeedDialAction
            tooltipOpen
            key={"Sell"}
            tooltipTitle={"Sell"}
            icon={<Buy style={{ fontSize: 10 }} />}
            onClick={onSell}
          />
        )}
        {isOwner && (
          <SpeedDialAction
            tooltipOpen
            key={"Send"}
            tooltipTitle={"Send"}
            icon={<SendIcon />}
            onClick={onSend}
          />
        )}
      </SpeedDial>
    </Hidden>
  );
};

export default MarketFab;
