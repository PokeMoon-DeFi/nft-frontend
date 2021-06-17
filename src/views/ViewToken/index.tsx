import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ModelViewer } from "nft-uikit";
import { getCardData } from "utils/nftHelpers";
import { useEffect } from "react";
import { PokemoonNft } from "config/constants/nfts/types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MarketFab from "components/MarketFab";

const ViewToken = () => {
  const params = useParams();
  const { set, id } = params;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [nft, setNft] = useState<PokemoonNft>();
  useEffect(() => {
    async function fetchNft() {
      const data = await getCardData(id, set);
      setNft(data);
    }
    fetchNft();
  }, [id, set, setNft]);

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      <div style={{ width: "100%", height: 300 }} />
      <Grid container justify="center" direction={isMobile ? "column" : "row"}>
        <Grid
          item
          alignItems="center"
          justify="center"
          sm={12}
          style={{ display: "flex" }}
        >
          {nft && <ModelViewer style={{ width: 275, height: 400 }} nft={nft} />}
        </Grid>
        <Grid item>
          {/* <Box style={{ height: 400, background: "purple" }}>
            <Typography>Stats</Typography>
          </Box> */}
        </Grid>
      </Grid>
      <MarketFab />
    </Container>
  );
};

export default ViewToken;
