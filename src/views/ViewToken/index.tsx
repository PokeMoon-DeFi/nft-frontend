import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
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
import { makeStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import styled from "styled-components";
import { useAppSelector } from "providers";
import {
  useBuyListing,
  useCancelListing,
  useGiftNft as useSendGiftNft,
  usePostListing,
  useUpdateListing,
} from "hooks/useMarket";
import Notifications from "components/Snackbar";
import PriceModal from "./PriceModal";
import { SendToAddress } from "components/Modal";
import Button from "components/Button";
import { ModelViewer } from "components/ModelViewer";
import InfoBox from "./InfoBox";
import { numberWithCommas } from "utils";
import ButtonLogic from "./ButtonLogic";
import { useWeb3React } from "@web3-react/core";

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
  color: #fce14c;
  font-size: 20pt;
`;

const ViewToken = () => {
  const params = useParams();
  const { set, id } = params;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [nft, setNft] = useState<PokemoonNft | undefined>();
  const [metadata, setMetadata] = useState<TokenUriResponse>();
  const [owner, setOwner] = useState("");
  const [isOwner, setIsOwner] = useState(false);
  const { account } = useWeb3React();
  const listings = useAppSelector((state) => state.market.listings);
  const [showModal, setShowModal] = useState(false);
  const [showGiftmodal, setShowGiftModal] = useState(false);

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
      if (!nft || metadata) return;
      const data = await getTokenUriResponse(nft);
      //@ts-ignore
      setNft((state) => ({ ...state, tokenUriResponse: data }));
      setMetadata(data);
    }
    fetchUriResponse();
  }, [nft, setMetadata, setNft, metadata]);

  useEffect(() => {
    if (!account) return;
    setIsOwner(owner.toLowerCase() === account.toLowerCase());
  }, [owner, account]);

  const handleBuyListing = useBuyListing();
  const handlePostListing = usePostListing();
  const handleCancelListing = useCancelListing();
  const handleUpdateListing = useUpdateListing();
  const handleSendGift = useSendGiftNft();
  return (
    <div style={{ zIndex: 2 }}>
      <Container maxWidth="lg">
        <img
          width="100%"
          src={"/images/banners/Marketplace.png"}
          alt="banner"
          style={{ marginTop: 8 }}
        />
      </Container>
      <Notifications />
      {/* <div style={{ width: "100%", height: 80 }} /> */}
      {/* <Hidden smUp> */}

      {/* <Text>{owner}</Text> */}

      {/* </Hidden> */}
      <Grid
        style={{
          width: "100%",
          // height: "100%",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
        container
        direction={isMobile ? "column" : "row"}
      >
        <Grid
          item
          sm={12}
          md={4}
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            padding: 24,
          }}
        >
          {nft && (
            <ModelViewer style={{ width: 350, height: "50vh" }} nft={nft} />
          )}
          {activeListing && (
            <PriceText display="inline" style={{ marginTop: 10 }}>
              {"Price: " + numberWithCommas(activeListing.price)} KBN
            </PriceText>
          )}
          <ButtonLogic
            isOwner={isOwner}
            activeListing={!!activeListing}
            set={set}
          />
        </Grid>
        <Grid
          item
          sm={12}
          md={4}
          style={{
            flex: 1,
            display: "flex",
            // height: 500,
            height: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%",
            padding: 24,
          }}
        >
          {/* <Box style={{ height: 400, background: "purple" }}>
            <Typography>Stats</Typography>
          </Box> */}

          {nft && <InfoBox nft={nft} />}
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",

          flexDirection: "column",
          justifyContent: "center",
          marginTop: 20,
          marginBottom: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        {/* <Text>{metadata?.name}</Text> */}
        {/* <Text>{metadata?.description}</Text>
        {metadata?.attributes.map((val, index) => {
          return (
            <div key={val.display_type + index.toString()}>
              <Text>{val.display_type}</Text>
              <Text>{val.max_value}</Text>
              <Text>{val.trait_type}</Text>
              <Text>{val.value}</Text>
            </div>
          );
        })}
        {/* <Text>{metadata?.attributes}</Text> */}
        {/* <Text>{metadata?.animation_url}</Text>
        <Text>{metadata?.external_url}</Text>  */}
      </div>
      <PriceModal
        handleConfirm={(price) => {
          setShowModal(false);
          if (activeListing) {
            handleUpdateListing(id, price);
          } else {
            handlePostListing(id, price);
          }
        }}
        handleClose={() => setShowModal(false)}
        open={showModal}
      />
      <SendToAddress
        open={showGiftmodal}
        handleClose={() => setShowGiftModal(false)}
        handleConfirm={(account) => {
          handleSendGift(account, nft?.tokenId, nft?.set);
          setShowGiftModal(false);
        }}
      />
    </div>
  );
};

export default ViewToken;
