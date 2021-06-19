import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { ModelViewer, Button } from "nft-uikit";
import {
  getCardData,
  getNftOwner,
  getTokenUriResponse,
} from "utils/nftHelpers";
import { useEffect } from "react";
import { PokemoonNft, TokenUriResponse } from "config/constants/nfts/types";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { useMediaQuery } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import MarketFab from "components/MarketFab";
import useCards from "hooks/useCards";
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import styled from "styled-components";
import { useAppSelector } from "providers";
import { usePostListing } from "hooks/useMarket";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 0,
    paddingRight: 0,
    background: "red",
  },
});

const Text = styled(Typography)`
  color: white;
`;

const PriceText = styled(Typography)`
  color: gold;
  font-size: 24pt;
`;

const ViewToken = () => {
  const params = useParams();
  const { set, id } = params;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [nft, setNft] = useState<PokemoonNft>();
  const [metadata, setMetadata] = useState<TokenUriResponse>();
  const [owner, setOwner] = useState("");

  //gets all nfts using useAppSelector
  const cards = useCards();

  const listings = useAppSelector((state) => state.market.listings);
  const isOwner = cards.map((c) => c.tokenId).includes(id);
  const activeListing = useMemo(() => {
    return listings.find((listing) => listing.id.toString() === id);
  }, [listings, id]);

  useEffect(() => {
    async function fetchNft() {
      const data = await getCardData(id, set);
      const owner = await getNftOwner(data);
      setNft(data);
      setOwner(owner);
    }
    fetchNft();
  }, [id, set, setNft]);

  useEffect(() => {
    async function fetchUriResponse() {
      if (!nft) return;
      const data = await getTokenUriResponse(nft);
      setMetadata(data);
    }
    fetchUriResponse();
  }, [nft, setMetadata]);

  const handlePostListing = usePostListing();

  return (
    <>
      <div style={{ width: "100%", height: 80 }} />
      <Hidden smUp>
        <div>
          <Text>{owner}</Text>
          <Text display="inline" style={{ color: "white" }}>
            {nft?.name}
          </Text>{" "}
          <Text display="inline">#{nft?.tokenId}</Text>
        </div>
      </Hidden>
      <Grid
        style={{ width: "100%", justifyContent: "center", display: "flex" }}
        container
        direction={isMobile ? "column" : "row"}
      >
        <Grid
          item
          sm={12}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {nft && <ModelViewer style={{ width: 275, height: 400 }} nft={nft} />}
        </Grid>
        <Grid item>
          {/* <Box style={{ height: 400, background: "purple" }}>
            <Typography>Stats</Typography>
          </Box> */}
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        {activeListing && <PriceText>{activeListing.price} KBN</PriceText>}
        {activeListing ? (
          isOwner ? (
            <Button>Cancel Listing</Button>
          ) : (
            <Button>Buy</Button>
          )
        ) : isOwner ? (
          <>
            <Button
              onClick={() => {
                handlePostListing(id, 90000);
              }}
            >
              Sell
            </Button>
            <Button>Send</Button>
          </>
        ) : (
          <></>
        )}
        <Text>{metadata?.name}</Text>
      </div>

      {/* <MarketFab
        isOwner={isOwner}
        onScan={() => {}}
        onSell={() => {}}
        onShare={() => {}}
        onSend={() => {}}
      /> */}
    </>
  );
};

export default ViewToken;
