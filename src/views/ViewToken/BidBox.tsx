import React, { useEffect, FC, useState, useMemo } from "react";
import useBid from "hooks/useBid";
import styled from "styled-components";
import Button from "components/Button";
import useRefresh from "hooks/useRefresh";
import PriceModal from "views/ViewToken/PriceModal";
import { useWeb3React } from "@web3-react/core";
import BidTable from "./BidTable";
import { useApproveMarket, useGetKobanAllowance } from "hooks/useAllowance";
import { getMarketAddress } from "utils";
import { useParams } from "react-router-dom";

interface Props {
  tokenId: string;
  set: string;
}

const Text = styled.p`
  color: white;
`;

const BidBox: FC<Props> = ({ tokenId, set }) => {
  const { bids, tokenOwner, setTokenId, offerBid, updateBid, cancelBid } =
    useBid();
  const { fastRefresh } = useRefresh();
  const [showModal, setShowModal] = useState(false);
  const { account } = useWeb3React();

  const marketAddress = getMarketAddress(set);
  const kobanAllowance = useGetKobanAllowance(marketAddress);
  const handleKobanApprove = useApproveMarket(set);

  useEffect(() => {
    setTokenId(tokenId, set);
  }, [tokenId, set, setTokenId, fastRefresh]);

  const currentBid = useMemo(() => {
    return bids.find((bid) => bid.bidder === account);
  }, [bids, account]);

  const isOwner = tokenOwner === account;
  const isDeadAddress =
    tokenOwner === "0x0000000000000000000000000000000000000000";

  console.log({ kobanAllowance });

  if (isDeadAddress) {
    return <></>;
  }
  return (
    <div>
      <Text style={{ color: "white" }}>TOKEN OWNER: {tokenOwner}</Text>
      {isOwner ? (
        <Text>YOU ARE THE OWNER</Text>
      ) : currentBid ? (
        <>
          <Text>YOUR BID: {currentBid.offering}</Text>
          <Button onClick={() => setShowModal(true)}>Update Bid</Button>
          <Button onClick={() => cancelBid(tokenId, set)}>Cancel Bid</Button>
        </>
      ) : !kobanAllowance ? (
        <>
          <Button onClick={handleKobanApprove}>Approve</Button>
        </>
      ) : (
        <>
          <Button onClick={() => setShowModal(true)}>Place a Bid</Button>
        </>
      )}
      <BidTable data={bids} isOwner={isOwner} />
      <PriceModal
        open={showModal}
        prompt={currentBid ? "Update Your Bid" : "Place Your Bid!"}
        handleConfirm={(offering) => {
          if (currentBid) {
            updateBid(offering);
          } else {
            offerBid(offering);
          }
          setShowModal(false);
        }}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default BidBox;
