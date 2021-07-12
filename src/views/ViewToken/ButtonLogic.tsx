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
import {
  useApproveMarket,
  useGetKobanAllowance,
  useApproveNft as useApproveNft,
} from "hooks/useAllowance";
import styled from "styled-components";
import Send from "components/Icons/Send";
import Cancel from "components/Icons/Cancel";
import Sell from "components/Icons/Sell";
import Buy from "components/Icons/Buy";
import Approve from "components/Icons/Approve";

interface LogicProps {
  isOwner: boolean;
  activeListing: boolean;
  set: string;
}

const ButtonDiv = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
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
  const kobanAllowance = useGetKobanAllowance(marketAddress);
  const { isApproved, sendApproval } = useApproveNft(set);

  if (kobanAllowance.isEqualTo(0) && marketAddress) {
    return <Button onClick={handleApprove}>Approve</Button>;
  } else if (isOwner && activeListing) {
    return (
      <ButtonDiv>
        <Button
          startIcon={<Cancel />}
          onClick={() => handleCancelListing(tokenId)}
        >
          Cancel Listing
        </Button>
        <Button onClick={() => setShowPriceModal(true)}>Update Price</Button>
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
        {isApproved ? (
          <Button
            disabled={!marketAddress}
            startIcon={<Sell />}
            onClick={() => setShowPriceModal(true)}
          >
            Sell
          </Button>
        ) : (
          <Button
            disabled={!marketAddress}
            startIcon={<Approve />}
            onClick={sendApproval}
          >
            Approve To Sell
          </Button>
        )}
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
        <Button startIcon={<Buy />} onClick={() => handleBuyListing(tokenId)}>
          Buy
        </Button>
      </>
    );
  } else {
    return <> </>;
  }
};

export default ButtonLogic;
