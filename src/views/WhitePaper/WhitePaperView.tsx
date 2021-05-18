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
import Kobandit from "./Kobandit";

const kbnText =
  "Koban are the central rewards of our platform, and eventually will be integrated with the most utilities. Koban can be earned in the Gyms and Daycare by staking Meownaut and other token pairs! After earning some Koban, they can be sent to the Bank and stored in order to secure a portion of the ever-rotating PokÃ©ball supply and eventually that season's special NFT packs!";
const mntText =
  "A deflationary token, as our long-term project stretches on, you will notice the supply of Meownaut getting lower and lower, making this fortuitous genetic anomaly an ever-rarer commodity! There is a 4% moving fee 2% will be burned the other 2% will go the the meownaut holders (Unless you staked your MNT in daycare)";
const pbText =
  "All PB tokens have a number designation that indicates what season they are (PB-2114 is the firstset, PB-2116 is the second set, etc.). PB has a limited total supply and when it is drained there will be no more! Stake your Koban in the Bank to earn PB until the PB runs out. There is a 20% Koban Penalty for unstaking your Koban before the PB runs out, so hang tight! Once the total supply of PB has been distributed, the Koban Withdrawal fee is waived and the NFT exchange opens!";
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
  font-size: 14pt;
  margin: 5px;
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
  /* height: 55vh; */
  height: auto;
  border-radius: 15px 30px 0px 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;
  flex: 1;
  min-width: 200;
`;

const StyledBlurbContainer = styled.div``;

const HeroTitle = styled(Typography)`
  color: white;
  font-size: 26pt;
  text-shadow: 12px 12px 20px #34036d;
`;

const HeroBlurb = styled(Typography)`
  text-shadow: 12px 12px 20px #34036d;
  margin-bottom: 20px;
`;

const OutlinedBlurb = styled(Paper)`
  background-color: rgb(246 216 244 / 86%);
  border: 4px purple solid;
  padding: 40px;
  border-radius: 30px;
`;

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
        }}
      >
        <StyledHeader>
          <Grid container justify="center">
            <Grid
              item
              xs={12}
              md={6}
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 40,
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <HeroTitle>Pokemoon</HeroTitle>
              <HeroBlurb style={{ color: "white" }}>
                An innovative new decentralized exchange and dApp platform
                running on Binance Smart Chain. With layered farming, an
                Automated Market Maker, fully 3-D rendered NFT trading cards,
                and more! With lots of upcoming features that will let you earn
                tokens to play with and exchange for NFTs within a constantly
                expanding creative universe created and curated by the best damn
                community in crypto.
              </HeroBlurb>
              <Button style={{ maxWidth: 170, marginBottom: 40 }}>
                {"White Paper >"}
              </Button>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              style={{
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Kobandit />
            </Grid>
          </Grid>
        </StyledHeader>

        <StyledSection
          style={{
            zIndex: -1,
            borderRadius: "0px 0px 30px 30px",
          }}
        >
          <Waves style={{ zIndex: 2 }} />
          {/* Info boxes */}
          <Grid
            spacing={8}
            container
            justify="space-around"
            style={{ marginTop: -250, paddingLeft: 20, paddingRight: 10 }}
          >
            <Grid item>
              <InfoBox
                title="Meownaut (MNT)"
                content={mntText}
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
                title="Koban (KBN)"
                content={kbnText}
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
                title="PB-XXXX"
                content={pbText}
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
              <OutlinedBlurb elevation={7}>
                <StyledBlurb style={{ fontSize: 32, marginBottom: 24 }}>
                  About Our NFT Platform
                </StyledBlurb>
                <StyledBlurb>
                  Our NFT card packs are limited edition, time-restricted sets
                  of fully 3D rendered trading cards that will have all kinds of
                  abilities, utilities, and tradability as our platform expands.
                  PB earned at the Bank is the only currency for purchasing our
                  NFT packs. Each pack contains 5 random cards of varying rarity
                  (Common, Uncommon, Rare, Legendary, and Moonlike) Buy card
                  packs at <Link>https://nft.pokemoon.app/buy</Link>
                  <br /> {"View your collection at "}
                  <Link>https://nft.pokemoon.app/gallery</Link>
                </StyledBlurb>
              </OutlinedBlurb>
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
                content={kbnText}
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
                content={pbText}
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
              <OutlinedBlurb>
                <Typography>Tokens</Typography>
                <Typography>
                  The deflationary mechanics work in three directions. Automatic
                  Liquidity Pool ensures a solid price floor and the advantage
                  of holders over sellers, as the latter are forced to pay a
                  penalty. Passive Rewards also encourage holders not to sell
                  the coin in order to harvest the highest income. Finally, the
                  Manual Burn is a transparent process that starts with the
                  team’s tokens burn before the launch.
                </Typography>
              </OutlinedBlurb>
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
                justifyContent: "center",
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
              <OutlinedBlurb>
                <Typography style={{ marginBottom: 30 }}>
                  NFT Marketplace
                </Typography>
                <Typography>
                  PocMon aims to become the #1 platform for the trade and
                  exchange of gaming NFT'S on Binance Smart Chain. The
                  popularity of blockchain games will ensure the massive nature
                  of this marketplace. Besides, there’ll be an easy-to-follow
                  and use interface for conducting auctions, including those
                  with charity purposes. Selected artists and designers from the
                  community of PocMon Trainers will be invited to release the
                  first PocMon Branded NFTs and NFT Game Cards. We believe that
                  unique pocket monsters will instill excitement within our
                  community and beyond, with the prospect of turning the heads
                  of NFT collectors on the BSC.
                </Typography>
                <Button style={{ marginTop: 30 }}>{"Read More Info >"}</Button>
              </OutlinedBlurb>
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
        }}
      >
        <Grid
          container
          justify="center"
          style={{
            width: "100%",
            padding: 50,
          }}
        >
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
            <Typography style={{ fontSize: 28 }}>PokeMoon</Typography>
            <Typography style={{ textAlign: "center" }}>
              An innovative new decentralized exchange and dApp platform running
              on Binance Smart Chain. With layered farming, an Automated Market
              Maker, fully 3-D rendered NFT trading cards, and more! With lots
              of upcoming features that will let you earn tokens to play with
              and exchange for NFTs within a constantly expanding creative
              universe created and curated by the best damn community in crypto.
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
              flex: 1,
            }}
          >
            <Typography style={{ fontSize: 28 }}>Socials</Typography>
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
