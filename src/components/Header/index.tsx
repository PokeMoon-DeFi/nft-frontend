import { FC, useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import Hidden from "@material-ui/core/Hidden";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";
import Sidebar, { NavHeaderProps } from "./Sidebar";
import Button from "components/Button";
import { Logo } from "components/Icons";
import { Modal } from "components/Modal";
import Flip from "react-reveal/Flip";

const StyledLink = styled(Link)`
  color: white;
  font-size: 1.3em;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
    transition: 0.33s ease;
  }
  font-family: "Josefin Sans";
`;

const NavHeader: FC<NavHeaderProps> = ({
  account,
  onLogout,
  onConnect,
  linkConfig,
}) => {
  const [logoutModalOpen, setLogoutModalOpen] = useState(false);
  const [openSidebar, setOpenSidebar] = useState(false);
  return (
    <>
      <AppBar
        style={{
          background:
            "radial-gradient(58.94% 58.94% at 50% 50%, #014482 0%, #210035 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
        position="relative"
      >
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Logo
            style={{
              height: 70,
              flexShrink: 5,
              minWidth: 150,
              marginRight: 10,
              cursor: "pointer",
            }}
            onClick={() => (window.location.href = "https://pokemoon.app")}
          />

          {/* SIDEBAR */}
          <Hidden mdUp>
            <IconButton onClick={() => setOpenSidebar(true)}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
            <Sidebar
              linkConfig={linkConfig}
              open={openSidebar}
              onOpen={() => {
                setOpenSidebar(true);
              }}
              onClose={() => {
                setOpenSidebar(false);
              }}
            />
          </Hidden>
          <Hidden smDown>
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                display: "flex",
                margin: 10,
                flexDirection: "row",
              }}
            >
              {linkConfig.map((link, index) => (
                <StyledLink
                  key={index.toString()}
                  style={{ margin: 20 }}
                  to={link.target}
                >
                  {link.label}
                </StyledLink>
              ))}
            </div>
            <div
              style={{
                flexDirection: "column",
                height: "80%",
                alignContent: "center",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {account ? (
                <Button
                  style={{ width: "100%" }}
                  onClick={() => setLogoutModalOpen(true)}
                >
                  {[account.slice(0, 5), account.slice(-5)].join("...")}
                </Button>
              ) : (
                <Button onClick={onConnect}>Connect</Button>
              )}

              {/*  <BalanceCounter imgUrl={"/images/balls/MAXRBALL.png"} balance={0} /> */}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Modal
        open={logoutModalOpen}
        title={"Log Out?"}
        handleClose={() => setLogoutModalOpen(false)}
        handleConfirm={() => {
          setLogoutModalOpen(false);
          if (onLogout) {
            onLogout();
          }
        }}
      ></Modal>
    </>
  );
};

export default NavHeader;
