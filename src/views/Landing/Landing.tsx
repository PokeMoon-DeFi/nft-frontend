import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import Container from "@material-ui/core/Container";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography, Link } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ModelCarousel } from "nft-uikit";
import { PokemoonNft } from "config/constants/nfts/types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import styled from "styled-components";
import Box from "@material-ui/core/Box";
import Divider from "@material-ui/core/Divider";

function AdCarousel(props) {
  var items = [
    {
      desktop: "/images/banners/AmpedUpSoonPC.png",
      mobile: "/images/banners/AmpedUpSoonMobile.png",
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysInvisible
      timeout={750}
      interval={7500}
      indicators={false}
      className={"carousel"}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item({ item }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const bi = `url( "${isMobile ? item.mobile : item.desktop}")`;
  return (
    <div>
      <img
        src={isMobile ? item.mobile : item.desktop}
        height={isMobile ? "auto" : "100%"}
        width={isMobile ? "100%" : "auto"}
        style={{ maxHeight: 250 }}
        alt={"banner-ad"}
      />
    </div>
  );
}

//This is fake data just to render the carousel!!!
const n: PokemoonNft = {
  tokenId: "11000002",
  imageUrl: "001meownautC.png",
  number: 1,
  name: "DeGen Meownaut",
  type: "Psychic",
  description:
    "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
  artist: {
    name: "Armilo Barrios",
  },
  rarity: "Common",
  glbUrl: "/models/ampedUp/006degenmntL.glb",
  set: "blastOff",
  packId: "5",
};

const p: PokemoonNft = {
  tokenId: "37000002",
  imageUrl: "010kadalaxslimUC.png",
  number: 10,
  name: "Graffing",
  type: "Psychic",
  description:
    "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
  artist: {
    name: "Ilya",
    instagram: "@ilyaspb2019",
  },
  rarity: "Uncommon",
  glbUrl: "/models/ampedUp/003graffingL.glb",
  set: "blastOff",
  packId: "5",
};

const d: PokemoonNft = {
  tokenId: "18000013",
  imageUrl: "011zapduckC.png",
  number: 11,
  name: "Artducko",
  type: "Lightning",
  description: "Strike one, you're out.",
  artist: {
    name: "Morlux",
    instagram: "@morlux_artista",
  },
  rarity: "Common",
  glbUrl: "/models/ampedUp/009artduckoL.glb",
  set: "blastOff",
  packId: "66",
};

const Bulletin = styled(Box)`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0px 4px 14px 7px rgb(149 74 137);
  padding: 20px;
`;
const CTALabel = styled(Typography)`
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

const CTALink = styled(Link)`
  cursor: pointer;
`;

const Landing: React.FC = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={"lg"}
      style={{
        flex: 1,
        height: "100%",
        padding: "10px 8px 80px 8px",
        display: "flex",

        flexDirection: "column",
      }}
    >
      <AdCarousel />
      <Grid
        container
        spacing={8}
        style={{
          alignItems: "center",
          flex: 1,
          padding: `${isMobile ? "40px" : "40px"} 10px 60px 10px`,
          height: "100%",
        }}
      >
        <Grid item xs={12} md={6}>
          <ModelCarousel
            nfts={[p, d, n]}
            style={{ height: "100%" }}
            modelViewerStyle={{ width: "100%", height: "500px" }}
          />
        </Grid>
        <Grid item xs={12} md={6} style={{ display: "flex" }}>
          <Bulletin>
            <Typography
              style={{
                textDecoration: "underlined",
                fontStyle: "italic",
                fontSize: 35,
                textAlign: "center",
                margin: 20,
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
                marginBottom: 30,
              }}
            />
            <CTALabel>
              🛍️ <CTALink href="/buy">Buy</CTALink> our latest packs!
            </CTALabel>
            <CTALabel>
              📚 Feeling lost? Check out our{" "}
              <CTALink href="https://docs.pokemoon.app/">Docs</CTALink>
            </CTALabel>
            <CTALabel>
              🗺️ <Link href="/gallery">Explore</Link> the Pokemoon Universe
            </CTALabel>
            <CTALabel>
              🦄 Join the{" "}
              <Link href="https://discord.gg/mz2yY2vUMM">
                Pokemoon Community Discord
              </Link>
            </CTALabel>
          </Bulletin>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
