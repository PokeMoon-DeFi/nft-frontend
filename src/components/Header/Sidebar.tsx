import { FC, useState } from "react";
import Drawer, { DrawerProps } from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SwipeableDrawer, {
  SwipeableDrawerProps,
} from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Collapse from "@material-ui/core/Collapse";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ExpandLess from "@material-ui/icons/ExpandLess";
import { Run } from "nft-uikit";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { NavLink } from "react-router-dom";
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

const LinkGroup: FC<LinkGroupState> = ({ linkConfig, label, icon }) => {
  const [open, setOpen] = useState(false);

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
                <ListItemText primary={label}></ListItemText>
              </ListItem>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

const Sidebar: FC<SidebarProps> = ({ open, onOpen, onClose, linkConfig }) => {
  const updatedLinkConfig = [...linkConfig, logout];
  return (
    <Drawer open={open} anchor="right" onClose={onClose} style={{ width: 200 }}>
      <List
        style={{
          width: 200,
          display: "flex",
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
          <ArrowBackIcon />
        </IconButton>
        <Divider />
        {updatedLinkConfig?.map((item, index) => {
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
                  <ListItemIcon style={{ justifyContent: "center" }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText primary={label}></ListItemText>
                </ListItem>
                {item.divider && <Divider />}
              </NavLink>
            </div>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Sidebar;
