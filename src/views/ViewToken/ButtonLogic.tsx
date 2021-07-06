import Button from "components/Button";
import {
  useBuyListing,
  useCancelListing,
  useGiftNft,
  usePostListing,
  useUpdateListing,
} from "hooks/useMarket";
import React, { FC, useState } from "react";
import PriceModal from "./PriceModal";
import { useParams } from "react-router-dom";
import { SendToAddress } from "components/Modal";
import { getMarketAddress } from "utils";
import { useApproveMarket, useGetKobanAllowance } from "hooks/useAllowance";
import styled from "styled-components";
import Send from "components/Icons/Send";

interface LogicProps {
  isOwner: boolean;
  activeListing: boolean;
  set: string;
}

const ButtonDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  width: 350px;
  margin-top: 10px;
`;
const ButtonLogic: FC<LogicProps> = ({ isOwner, activeListing }) => {
  const handleBuyListing = useBuyListing();
  const handlePostListing = usePostListing();
  const handleCancelListing = useCancelListing();
  const handleUpdateListing = useUpdateListing();
  const handleSendGift = useGiftNft();

  const [showPriceModal, setShowPriceModal] = useState(false);
  const [showGiftModal, setShowGiftModal] = useState(false);

  const { set, id: tokenId } = useParams();
  const marketAddress = getMarketAddress(set);
  const handleApprove = useApproveMarket(set);
  const allowance = useGetKobanAllowance(marketAddress);

  if (allowance.isEqualTo(0) && marketAddress) {
    return <Button onClick={handleApprove}>Approve</Button>;
  } else if (isOwner && activeListing) {
    return (
      <ButtonDiv>
        <Button onClick={() => handleCancelListing(tokenId)}>Cancel</Button>
        <Button onClick={() => setShowPriceModal(true)}>Update</Button>
        <PriceModal
          handleConfirm={(price) => {
            setShowPriceModal(false);
            handleUpdateListing(tokenId, price);
          }}
          handleClose={() => setShowPriceModal(false)}
          open={showPriceModal}
        />
      </ButtonDiv>
    );
  } else if (isOwner) {
    return (
      <ButtonDiv style={{ marginTop: 20 }}>
        <Button startIcon={<Send />} onClick={() => setShowGiftModal(true)}>
          Send
        </Button>
        <Button
          disabled={!marketAddress}
          onClick={() => setShowPriceModal(true)}
        >
          Sell
        </Button>
        <PriceModal
          handleConfirm={(price) => {
            setShowPriceModal(false);
            handlePostListing(tokenId, price);
          }}
          handleClose={() => setShowPriceModal(false)}
          open={showPriceModal}
        />
        <SendToAddress
          open={showGiftModal}
          handleClose={() => setShowGiftModal(false)}
          handleConfirm={(account) => {
            handleSendGift(account, tokenId, set);
            setShowGiftModal(false);
          }}
        />
      </ButtonDiv>
    );
  } else if (activeListing) {
    return (
      <>
        <Button onClick={handleBuyListing}>Buy</Button>
      </>
    );
  } else {
    return <> </>;
  }
};

export default ButtonLogic;
