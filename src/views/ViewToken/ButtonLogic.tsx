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
import UpdatePrice from "components/Icons/UpdatePrice";
import Gift from "components/Icons/Gift";
import Typography from "@material-ui/core/Typography";
import { toNumber } from "utils/callHelpers";
import { BigNumber } from "ethers";
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
  margin-top: 24px;
`;

const Text = styled(Typography)`
  color: white;
  font-size: 24px;
  margin: 20px;
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
  const handleKobanApprove = useApproveMarket(set);
  const kobanAllowance = useGetKobanAllowance(marketAddress);
  const { isApproved: isNftApproved, sendApproval: sendNftApproval } =
    useApproveNft(set);

  //check if there is a market for this set
  //check if you are the owner
  //if yes
  //  check nft approval
  //  check if the token is an active listing
  //  the user can update the listing or make a new listing
  //if no
  //  check if active listing
  //  check koban approval
  //  user can buy

  if (!marketAddress) {
    return <Text>This Pack is not supported! Check back soon</Text>;
  } else if (isOwner) {
    if (isNftApproved) {
      if (activeListing) {
        return (
          <ButtonDiv>
            <Button
              startIcon={<Cancel />}
              onClick={() => handleCancelListing(tokenId)}
            >
              Cancel Listing
            </Button>
            <Button
              startIcon={<UpdatePrice />}
              onClick={() => setShowPriceModal(true)}
            >
              Update Price
            </Button>
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
      } else {
        return (
          <ButtonDiv>
            <Button startIcon={<Gift />} onClick={() => setShowGiftModal(true)}>
              Send
            </Button>
            <Button
              disabled={!marketAddress}
              startIcon={<Sell />}
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
      }
    } else {
      return (
        <ButtonDiv>
          <Button startIcon={<Approve />} onClick={sendNftApproval}>
            Approve To Sell
          </Button>
        </ButtonDiv>
      );
    }
  } else {
    if (activeListing) {
      if (BigNumber.from(kobanAllowance).gte(0)) {
        return (
          <ButtonDiv>
            <Button startIcon={<Approve />} onClick={handleKobanApprove}>
              Approve to Buy
            </Button>
          </ButtonDiv>
        );
      } else {
        return (
          <Button startIcon={<Buy />} onClick={() => handleBuyListing(tokenId)}>
            Buy
          </Button>
        );
      }
    } else {
      return <></>;
    }
  }
};

export default ButtonLogic;
