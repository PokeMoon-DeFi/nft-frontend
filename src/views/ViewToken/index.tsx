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
  const [isOwner, setIsOwner] = useState(false);
  const account = useAppSelector((state) => state.user.address);
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
      if (!nft) return;
      const data = await getTokenUriResponse(nft);
      setMetadata(data);
    }
    fetchUriResponse();
  }, [nft, setMetadata]);

  useEffect(() => {
    setIsOwner(owner.toLowerCase() === account.toLowerCase());
  }, [owner, account]);

  const handleBuyListing = useBuyListing();
  const handlePostListing = usePostListing();
  const handleCancelListing = useCancelListing();
  const handleUpdateListing = useUpdateListing();
  const handleSendGift = useSendGiftNft();
  return (
    <div style={{ zIndex: 2 }}>
      <Notifications />
      {/* <div style={{ width: "100%", height: 80 }} /> */}
      {/* <Hidden smUp> */}
      <Box margin={2}>
        <Typography display={"inline"} variant="h3" style={{ color: "white" }}>
          {nft?.name}
        </Typography>{" "}
        <Typography variant="h6" style={{ color: "white" }} display="inline">
          #{nft?.tokenId}
        </Typography>
        {/* <Text>{owner}</Text> */}
      </Box>
      {/* </Hidden> */}
      <Grid
        style={{ width: "100%", justifyContent: "center", display: "flex" }}
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
          }}
        >
          {nft && (
            <ModelViewer style={{ width: "90%", height: "50vh" }} nft={nft} />
          )}
          {activeListing && (
            <>
              <Typography
                variant="h5"
                display="inline"
                style={{ color: "yellow", margin: 10 }}
              >
                {"Price: "}
                <PriceText display="inline">
                  {numberWithCommas(activeListing.price)} KBN
                </PriceText>
              </Typography>
            </>
          )}
          {activeListing ? (
            isOwner ? (
              <>
                <Button onClick={() => setShowModal(true)}>
                  Update Listing
                </Button>
                <Button
                  onClick={() => {
                    handleCancelListing(id);
                  }}
                >
                  Cancel Listing
                </Button>
              </>
            ) : (
              <Button
                style={{ width: "80%" }}
                onClick={() => handleBuyListing(id)}
              >
                Buy
              </Button>
            )
          ) : isOwner ? (
            <>
              <Button onClick={() => setShowModal(true)}>Sell</Button>
              <Button onClick={() => setShowGiftModal(true)}>Send</Button>
            </>
          ) : (
            <></>
          )}
        </Grid>
        <Grid item sm={12} md={6}>
          {/* <Box style={{ height: 400, background: "purple" }}>
            <Typography>Stats</Typography>
          </Box> */}
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
        {metadata && <InfoBox data={metadata} />}
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
