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

const MarketFab: FC = () => {
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
        />
        <SpeedDialAction
          tooltipOpen
          key={"Share"}
          tooltipTitle={"Share"}
          icon={<ShareIcon />}
        />
        <SpeedDialAction
          tooltipOpen
          key={"Sell"}
          tooltipTitle={"Sell"}
          icon={<Buy style={{ fontSize: 10 }} />}
        />
        <SpeedDialAction
          tooltipOpen
          key={"Send"}
          tooltipTitle={"Send"}
          icon={<SendIcon />}
        />
      </SpeedDial>
    </Hidden>
  );
};

export default MarketFab;
