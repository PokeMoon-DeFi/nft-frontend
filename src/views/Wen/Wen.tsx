import { useState, useEffect } from "react";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { useWeb3React } from "@web3-react/core";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  Grid,
  Link,
} from "@material-ui/core";
import styled from "styled-components";
import Divider from "@material-ui/core/Divider";
import { Content } from "components/layout";
import { VideoPlayer } from "components/VideoPlayer";

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
  box-shadow: 0px 4px 14px 7px rgb(149 74 137);
  padding: 20px;
`;

const CTALabel = styled(Typography)`
  font-size: 30px;
`;

const CTALink = styled(Link)`
  cursor: pointer;
`;

const Wen = () => {
  const [open, setOpen] = useState(true);
  const [pending, setPending] = useState(false);
  const { login } = useAuth();
  const { account } = useWeb3React();

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
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6}>
          <VideoPlayer
            url={"https://www.youtube.com/watch?v=7dMQ1MonGBY"}
            playing
            muted
            width={"100%"}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Bulletin>
            <Typography
              style={{
                textDecoration: "underlined",
                fontStyle: "italic",
                fontSize: 35,
              }}
            >
              Welcome to the world of Pokemoon!
            </Typography>
            <Divider
              style={{
                width: "80%",
                height: 6,
                backgroundColor: "pink",
                borderRadius: 30,
              }}
            />
            <CTALabel>
              <CTALink>Buy</CTALink> our latest packs!
            </CTALabel>
            <CTALabel>
              Feeling lost? Check out our <CTALink>Docs</CTALink>
            </CTALabel>
            <CTALabel>
              <Link>Explore</Link> the Pokemoon Universe
            </CTALabel>
            <CTALabel>
              Join the{" "}
              <Link href="https://discord.gg/q489KUr3TD">
                Pokemoon Community Discord
              </Link>
            </CTALabel>
          </Bulletin>
        </Grid>
      </Grid>
    </Content>
  );
};

export default Wen;
