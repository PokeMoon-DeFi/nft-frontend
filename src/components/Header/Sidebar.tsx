import { FC, useState } from "react";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NavLink } from "react-router-dom";
import { Run } from "components/Icons";
import { makeStyles } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import Flip from "react-reveal/Flip";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { useLogin } from "hooks/useAuth";
import { useAppSelector } from "providers";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
export interface LinkConfigState {
  target?: string;
  label?: string;
  icon?: React.ReactElement;
  onClick?: () => void;
  divider?: boolean;
  group?: LinkConfigState[];
}

export interface NavHeaderProps {
  account: string;
  onConnect?: () => void;
  onLogout?: () => void;
  linkConfig: LinkConfigState[];
}

interface SidebarProps extends SwipeableDrawerProps {
  linkConfig: LinkConfigState[];
}

interface LinkGroupState {
  label?: string;
  icon?: React.ReactElement;
  linkConfig: LinkConfigState[];
}

const logout: LinkConfigState = {
  icon: <Run width={25} />,
  label: "Log Out",
  target: "/logout",
};

const useStyle = makeStyles({
  root: {
    color: "white",
  },
});

const LinkGroup: FC<LinkGroupState> = ({ linkConfig, label, icon }) => {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <>
      <ListItem
        key="back"
        button
        onClick={() => {
          setOpen(!open);
        }}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List component="div" disablePadding>
          {linkConfig.map((item, index) => {
            const { icon, label } = item;
            return (
              <ListItem button key={`${label}${index}`}>
                <ListItemIcon>{icon}</ListItemIcon>
                {/* <ListItemText
                  style={{ color: "white" }}
                  primary={label}
                ></ListItemText> */}
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

const Sidebar: FC<SidebarProps> = ({ open, onOpen, onClose, linkConfig }) => {
  const { login, logout } = useLogin();
  const account = useAppSelector((state) => state.user.address);
  return (
    <Drawer
      PaperProps={{
        style: {
          background: "#1C0A40",
        },
      }}
      open={open}
      anchor="right"
      onClose={onClose}
      style={{ width: 200 }}
    >
      <List
        style={{
          flex: 1,
          height: 400,
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-around",
          paddingTop: 20,
        }}
      >
        <IconButton
          onClick={onClose}
          style={{ marginLeft: 10, alignSelf: "flex-start" }}
        >
          <ArrowForwardIcon style={{ fill: "white" }} />
        </IconButton>

        <Divider />

        {/* THIS IS WHAT UR LOOKING FOR */}
        {linkConfig?.map((item, index) => {
          const { icon, label, target } = item;
          if (item.group) {
            return (
              <LinkGroup linkConfig={item.group} label={label} icon={icon} />
            );
          }
          return (
            <div key={label}>
              <NavLink to={target}>
                <ListItem
                  button
                  style={{
                    marginTop: 20,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingLeft: 20,
                  }}
                >
                  <ListItemIcon
                    style={{ justifyContent: "center", fill: "white" }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText style={{ color: "white" }} primary={label} />
                </ListItem>
                {item.divider && <Divider />}
              </NavLink>
            </div>
          );
        })}
      </List>

      <div
        style={{
          position: "absolute",
          bottom: 0,
          height: 100,
          width: "100%",
        }}
      >
        <ListItem
          button
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 20,
          }}
          onClick={account ? logout : login}
        >
          <ListItemIcon style={{ justifyContent: "center", fill: "white" }}>
            {account ? (
              <Run width={25} />
            ) : (
              <AccountBalanceWalletIcon style={{ fill: "white" }} width={25} />
            )}
          </ListItemIcon>
          <ListItemText
            style={{ color: "white" }}
            primary={account ? "Log Out" : "Connect Wallet"}
          />
        </ListItem>
      </div>
    </Drawer>
  );
};

export default Sidebar;
