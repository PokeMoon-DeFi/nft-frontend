import { useWeb3React } from "@web3-react/core";
import useAuth from "hooks/useAuth";
import Container from "@material-ui/core/Container";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { ModelCarousel } from "nft-uikit";
import { PokemoonNft } from "config/constants/nfts/types";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

function AdCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible
      timeout={750}
      interval={7500}
      animation={"slide"}
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <Paper>
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

const n: PokemoonNft = {
  tokenId: "11000002",
  imageUrl: "001meownautC.png",
  number: 1,
  name: "Meownaut",
  type: "Psychic",
  description:
    "Legend says that the bioluminescent coin in a Meownaut's chest is the source of its resilience and good fortune.",
  artist: {
    name: "Armilo Barrios",
  },
  rarity: "Common",
  glbUrl: "/models/001meownautC.glb",
  set: "blastOff",
  packId: "5",
};

const p: PokemoonNft = {
  tokenId: "37000002",
  imageUrl: "010kadalaxslimUC.png",
  number: 10,
  name: "Kadalax Slim",
  type: "Psychic",
  description:
    "Some Kadalax, having conquered their material vices, are able to sustain themselves off air and thought alone.",
  artist: {
    name: "Ilya",
    instagram: "@ilyaspb2019",
  },
  rarity: "Uncommon",
  glbUrl: "/models/010kadalaxslimUC.glb",
  set: "blastOff",
  packId: "5",
};

const d: PokemoonNft = {
  tokenId: "18000013",
  imageUrl: "011zapduckC.png",
  number: 11,
  name: "Zapduck",
  type: "Lightning",
  description: "Strike one, you're out.",
  artist: {
    name: "Morlux",
    instagram: "@morlux_artista",
  },
  rarity: "Common",
  glbUrl: "/models/011zapduckC.glb",
  set: "blastOff",
  packId: "66",
};

const Landing: React.FC = () => {
  const { account } = useWeb3React();
  const { login, logout } = useAuth();
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth={"lg"}
      style={{ flex: 1, height: "100%", padding: "20px 8px 80px 8px" }}
    >
      <AdCarousel />
      <Grid
        container
        spacing={8}
        style={{
          alignItems: "center",
          flex: 1,
          padding: "20px 10px 60px 10px",
        }}
      >
        <Grid item xs={12} md={6}>
          <ModelCarousel nfts={[p, d, n]} style={{ height: 300, width: 200 }} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper>
            <Button className="CheckButton">Check it out!</Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
