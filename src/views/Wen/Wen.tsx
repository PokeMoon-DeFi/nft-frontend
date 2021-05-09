import {
  Content,
  Page,
  Particles,
  WiggleBall,
  ConnectScreen,
  VideoPlayer,
  Button,
} from "nft-uikit";
import { useState, useEffect } from "react";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { useWeb3React } from "@web3-react/core";
import { Box, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";

const StyledBox = styled(Box)`
  background: linear-gradient(180deg, #ff77f1 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: inset 0px 4px 4px rgba(253, 253, 253, 0.25);
  border: 10px solid white;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to top, #ff77f1, white);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Bulletin = styled(Box)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wen = () => {
  const [open, setOpen] = useState(true);
  const [pending, setPending] = useState(false);
  const { login } = useAuth();
  const { account } = useWeb3React();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    if (pending && account) {
      setOpen(false);
    }
  }, [account, pending]);

  return (
    <Content
      maxWidth="xl"
      style={{
        paddingTop: 32,
        paddingLeft: 0,
        paddingRight: 0,
        justifyContent: "space-around",
      }}
    >
      <Typography style={{ color: "white" }}>
        Blast-off! Booster Packs
      </Typography>
      <StyledBox>
        <Typography style={{ color: "#E751FF", fontStyle: "italic" }}>
          Now Available
        </Typography>
      </StyledBox>
      <VideoPlayer
        url={"https://www.youtube.com/watch?v=7dMQ1MonGBY"}
        playing
        muted
        width={isMobile ? "auto" : 800}
      />
      <Button>Buy Now</Button>
      <Bulletin>
        <Typography>Welcome to the world of Pokemoon</Typography>
        <Divider
          style={{
            width: "80%",
            height: 6,
            backgroundColor: "pink",
            borderRadius: 30,
          }}
        />
        <Typography>Feeling lost? Check out our Docs</Typography>
        <Typography>Explore the Pokemoon Universe</Typography>
        <Typography>Join the Pokemoon Community Discord</Typography>
      </Bulletin>
    </Content>
  );
};

export default Wen;
