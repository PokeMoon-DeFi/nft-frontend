import { FC, useMemo, useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import SpeedDial from "@material-ui/lab/SpeedDial";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import { useTheme } from "@material-ui/core/styles";
import DialogModal from "components/Modal/DialogModal";
import Run from "components/Icons/Run";
import { LinkConfigState } from "components/layout/types";

export interface FabProps {
  account: string;
  onConnect?: () => void;
  onLogout?: () => void;
  linkConfig: LinkConfigState[];
}

const Fab: FC<FabProps> = ({ account, onConnect, onLogout, linkConfig }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const reverseList = useMemo(() => {
    const config = linkConfig.slice(0);
    if (account) {
      config.push({
        target: "/logout",
        label: "Logout",
        icon: <Run width={25} />,
        onClick: () => {
          setModalOpen(true);
        },
      });
    } else {
      config.push({
        target: "/logout",
        label: "Connect",
        icon: <StoreOutlinedIcon />,
        onClick: onConnect,
      });
    }
    return config.reverse();
  }, [account, onConnect]);

  return (
    <Hidden smUp>
      <SpeedDial
        ariaLabel="Speed Dial"
        color="primary"
        aria-label="add"
        icon={<SpeedDialIcon />}
        onClick={() => setOpen(!open)}
        open={open}
        style={{
          position: "fixed",
          bottom: theme.spacing(2),
          right: theme.spacing(2),
        }}
      >
        {reverseList.map((link) => {
          return (
            <SpeedDialAction
              key={link.label}
              icon={link.icon}
              tooltipTitle={link.label}
              tooltipOpen
              onClick={() => {
                if (!!link.onClick) {
                  link.onClick();
                } else {
                  // @ts-ignore
                  window.location.href = link.target;
                }
              }}
            />
          );
        })}
      </SpeedDial>
      <DialogModal
        open={modalOpen}
        title={"Log Out?"}
        handleClose={() => {
          setModalOpen(false);
        }}
        handleConfirm={() => {
          setModalOpen(false);
          if (!!onLogout) {
            onLogout();
          }
        }}
      ></DialogModal>
    </Hidden>
  );
};

export default Fab;
