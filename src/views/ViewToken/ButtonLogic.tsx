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

interface LogicProps {
  isOwner: boolean;
  activeListing: boolean;
  set: string;
}
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

  if (allowance.isEqualTo(0)) {
    return <Button onClick={handleApprove}>Approve</Button>;
  } else if (isOwner && activeListing) {
    return (
      <>
        <Button onClick={() => setShowPriceModal(true)}>Update</Button>
        <div style={{ height: 10 }} />
        <Button onClick={handleCancelListing}>Cancel</Button>
        <PriceModal
          handleConfirm={(price) => {
            setShowPriceModal(false);
            handleUpdateListing(tokenId, price);
          }}
          handleClose={() => setShowPriceModal(false)}
          open={showPriceModal}
        />
      </>
    );
  } else if (isOwner) {
    return (
      <>
        <Button onClick={() => setShowPriceModal(true)}>Sell</Button>
        <Button onClick={() => setShowGiftModal(true)}>Gift</Button>
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
      </>
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
