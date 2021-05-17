import { FC } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Waves from "./Waves";
import { Button, Logo } from "nft-uikit";
import InfoBox from "./InfoBox";
import Grid from "@material-ui/core/Grid";
import SyncIconOutlined from "@material-ui/icons/SyncOutlined";
import styled from "styled-components";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import BabyMeownaut from "./BabyMeownaut";
import Koban from "./Koban";
import MoonBall from "./MoonBall";
import TimelineStepper from "./Timeline";
import Faq from "./Faq";
import Box from "@material-ui/core/Box";
import { Link } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

const reflectionText =
  "Static rewards, also known as reflection — $PMON holders are rewarded simply by holding the PocBalls. 5% fee is redistributed to all existing holders.";

const lpText =
  "5% fee is split so that half of it is exchanged to BNB and paired up with the other half which stays in $PMON, becoming a liquidity pair on Pancake Swap.";

const burnText =
  "More than half of the total supply have been sent to a burned address — 580T supply. The team will also consider burning PocBalls manually.";

const IconWrapper = styled.div`
  padding: 8px 16px;
  box-sizing: content-box;
  border-radius: 4px;
  background-color: pink;
  margin: 8px;
`;

const Title = styled(Typography)``;

const StyledLink = styled(Link)`
  cursor: pointer;
`;

const StyledSection = styled.div`
  background-color: #eae1f7;
  background-image: url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e1a3f0' fill-opacity='0.28'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
`;

const StyledBlurb = styled(Typography)`
  text-align: center;
`;

const StyledHeader = styled.div`
  background: linear-gradient(
    0deg,
    rgba(238, 39, 255, 1) 0%,
    rgba(198, 100, 224, 1) 54%,
    rgba(134, 138, 246, 1) 100%
  );
  height: 55vh;
  border-radius: 15px 30px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const StyledBlurbContainer = styled.div``;

const WhitePaperView = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        display: "flex",
        justifyContent: "center",
        minWidth: 300,
        position: "relative",
        flexDirection: "column",
      }}
    >
      <section
        style={{
          height: "auto",
          marginTop: 40,
          marginBottom: 200,
        }}
      >
        <StyledHeader>
          <div style={{ width: 400, paddingLeft: 40 }}>
            <Typography style={{ fontSize: 26 }}>Pokemoon</Typography>
            <Typography>
              PocMon ($PMON) is a meme based & decentralized community
              experiment in Binance Smart Chain, Honouring the Pocket Monsters
              we all know and love.
            </Typography>
            <Button style={{ maxWidth: 170 }}>{"White Paper >"}</Button>
          </div>
        </StyledHeader>

        <StyledSection
          style={{
            zIndex: -1,
          }}
        >
          <Waves style={{ zIndex: 2 }} />
          {/* Info boxes */}
          <Grid
            spacing={8}
            container
            justify="space-around"
            style={{ marginTop: "-25vh", paddingLeft: 20, paddingRight: 10 }}
          >
            <Grid item>
              <InfoBox
                title="DEX"
                content={lpText}
                href="google.com"
                buttonLabel="Exchange Now"
                icon={
                  <IconWrapper>
                    <ShuffleIcon fontSize="large" />
                  </IconWrapper>
                }
              />
            </Grid>
            <Grid item>
              <InfoBox
                title="Yield Farming"
                content={reflectionText}
                href="google.com"
                buttonLabel="Start Farming"
                icon={
                  <IconWrapper>
                    <SyncIconOutlined fontSize="large" />
                  </IconWrapper>
                }
              />
            </Grid>
            <Grid item>
              <InfoBox
                title="NFTs"
                content={reflectionText}
                href="google.com"
                buttonLabel="Earn NFTs"
                icon={
                  <IconWrapper>
                    <SyncIconOutlined fontSize="large" />
                  </IconWrapper>
                }
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 60 }} justify="space-around">
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <BabyMeownaut />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                textAlign: "left",
                justifyContent: "space-around",
                flexDirection: "column",
                paddingBottom: 40,
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              <Paper
                elevation={7}
                style={{
                  backgroundColor: "rgb(246 216 244 / 86%)",
                  border: "4px purple solid",
                  padding: 40,
                }}
              >
                <StyledBlurb style={{ fontSize: 32, marginBottom: 24 }}>
                  About Pokemoon
                </StyledBlurb>
                <StyledBlurb>
                  The deflationary mechanics work in three directions. Automatic
                  Liquidity Pool ensures a solid price floor and the advantage
                  of holders over sellers, as the latter are forced to pay a
                  penalty. Passive Rewards also encourage holders not to sell
                  the coin in order to harvest the highest income. Finally, the
                  Manual Burn is a transparent process that starts with the
                  team’s tokens burn before the launch.
                </StyledBlurb>
              </Paper>
            </Grid>
          </Grid>
          <Grid
            container
            style={{ justifyContent: "space-around", marginTop: 40 }}
            spacing={8}
          >
            <Grid item>
              <InfoBox
                title="Meownaut"
                content={reflectionText}
                href="google.com"
                buttonLabel="Buy MNT"
                icon={
                  <IconWrapper>
                    <SyncIconOutlined fontSize="large" />
                  </IconWrapper>
                }
              />
            </Grid>

            <Grid item>
              <InfoBox
                title="Koban"
                content={burnText}
                href="google.com"
                buttonLabel="Buy KBN"
                icon={
                  <IconWrapper>
                    <WhatshotIcon fontSize="large" />
                  </IconWrapper>
                }
              />
            </Grid>
          </Grid>
          <Grid container style={{ marginTop: 60 }} justify="space-around">
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                textAlign: "right",
                justifyContent: "space-around",
                flexDirection: "column",
                paddingBottom: 40,
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              <Typography>Tokens</Typography>
              <Typography>
                The deflationary mechanics work in three directions. Automatic
                Liquidity Pool ensures a solid price floor and the advantage of
                holders over sellers, as the latter are forced to pay a penalty.
                Passive Rewards also encourage holders not to sell the coin in
                order to harvest the highest income. Finally, the Manual Burn is
                a transparent process that starts with the team’s tokens burn
                before the launch.
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Koban />
            </Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <MoonBall />
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                textAlign: "left",
                paddingLeft: 40,
                paddingRight: 40,
                flexDirection: "column",
                flex: 1,
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Typography style={{ marginBottom: 30 }}>
                NFT Marketplace
              </Typography>
              <Typography>
                PocMon aims to become the #1 platform for the trade and exchange
                of gaming NFT'S on Binance Smart Chain. The popularity of
                blockchain games will ensure the massive nature of this
                marketplace. Besides, there’ll be an easy-to-follow and use
                interface for conducting auctions, including those with charity
                purposes. Selected artists and designers from the community of
                PocMon Trainers will be invited to release the first PocMon
                Branded NFTs and NFT Game Cards. We believe that unique pocket
                monsters will instill excitement within our community and
                beyond, with the prospect of turning the heads of NFT collectors
                on the BSC.
              </Typography>
              <Button style={{ marginTop: 30 }}>{"Read More Info >"}</Button>
            </Grid>
          </Grid>
          <TimelineStepper />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: 60,
            }}
          >
            <Typography>F.A.W</Typography>
            <Typography>Frequently Asked Wens</Typography>
            <Faq />
          </div>
        </StyledSection>
      </section>
      <Box
        style={{
          background: "white",
          marginTop: 100,
          bottom: 0,
          left: 0,
          right: 0,
          position: "absolute",
        }}
      >
        <Grid container justify="center" style={{ height: 180, width: "100%" }}>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>PokeMoon</Typography>
            <Typography style={{ textAlign: "center" }}>
              PocMon ($PMON) is a meme based & decentralized community
              experiment in Binance Smart Chain, Honouring the Pocket Monsters
              we all know and love.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            style={{
              flexDirection: "column",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Typography>Socials</Typography>
            <StyledLink>🎮 Discord</StyledLink>
            <StyledLink>📖 Medium</StyledLink>
            <StyledLink>💬 Telegram</StyledLink>
            <StyledLink>🐣 Twitter</StyledLink>
          </Grid>
        </Grid>
        <Divider />
      </Box>
    </Container>
  );
};

export default WhitePaperView;
