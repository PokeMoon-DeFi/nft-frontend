import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import React, { FC, useCallback, useState } from "react";
import { PokemoonPack } from "config/constants/nfts/types";
import { Button, Backpack, Buy, SendToAddress, Notification } from "nft-uikit";
import {
  getAddress,
  getAmpedUpContract,
  useAmpedUpContract,
} from "utils/contractHelpers";
import { sendGiftPack } from "utils/callHelpers";
import web3 from "web3";

const PrimaryInfo = styled.div`
  display: flex;
  flex-direction: row;
  padding: 6px;
  margin-bottom: 6px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
const Pokeball = styled.div`
  flex: 1;
  margin-left: 6px;
`;
const Pack = styled.span`
  flex: 1;
  color: #ffffff;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 12px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  h4,
  p {
    text-align: center;
  }
`;

const DescriptionText = styled.div`
  text-align: center;
  font-style: oblique;
  padding: 6px;
  justify-content: center;
  padding-bottom: 12px;
  font-weight: bold;
  font-size: 14pt;
`;
const FooterIcon = styled.div`
  text-align: center;
`;

interface BuyInfoProps {
  pack: PokemoonPack;
  price: number;
  lastPackId: number;
  pbPrice: number;
  account: string;
  allowance: number;
  balance: number;
  onConnectClicked: () => void;
  onApproveClicked: () => void;
  onBuyClicked: () => void;
}

const Blurb: FC<BuyInfoProps> = ({
  onConnectClicked,
  onApproveClicked,
  onBuyClicked,
  account,
  balance,
  price,
  allowance,
}) => {
  const [collectedPackId, setCollectedPackId] = React.useState<number>(-1);
  const [openNotty, setOpenNotty] = React.useState(false);

  const [openPackNotty, setOpenPackNotty] = React.useState(false);
  const ampedUpContract = useAmpedUpContract();

  const sendGift = useCallback(
    async (receiver: string) => {
      setOpenNotty(true);
      const res = await sendGiftPack(ampedUpContract, account, receiver);
      const packId = res.events.EntreatPacked.returnValues.packId;
      setCollectedPackId(packId);
      setOpenPackNotty(true);
    },
    [account, ampedUpContract]
  );

  const [openTransferModal, setOpenTransferModal] = useState(false);

  // return (`
  //   padding: 12px;
  //   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  //   h4,
  //   p {
  //     text-align: center;
  //   }
  // `);

  const DescriptionText = styled.div`
    text-align: center;
    font-style: oblique;
    padding: 6px;
    justify-content: center;
    padding-bottom: 12px;
    font-weight: bold;
    font-size: 14pt;
  `;

  return (
    <Container>
      <PrimaryInfo
        style={{
          background: `linear-gradient(120deg, #ffffff 0%, #ffffff 47%, #111111 47.3%, #111111 100%)`,
        }}
      >
        <Pokeball>{"PB-2116"}</Pokeball>
        <Pack>{"DEGEN BALL"}</Pack>
      </PrimaryInfo>
      <Description>
        <Typography variant="h4" style={{ padding: 10 }}>
          PokeMoon presents: AMPED UP!
        </Typography>
        <Typography style={{ padding: 10, textAlign: "center" }}>
          Spend {price} PB and receive 5 special cards from PokeMoon's 2nd
          premiere pack. Still meticulously designed by our most clever and
          creative community artists! With all PB 2116 in existence already
          minted, these packs are set to be scarce! Set at an initial price of
          roughly 10 BUSD/pack at announcement,
        </Typography>
        <Typography
          style={{
            padding: 10,
            paddingLeft: 50,
            paddingRight: 50,
            textAlign: "center",
          }}
        >
          Each pack contains 5 NFTs that represent ownership of official
          PokeMoon Virtual Trading Cards and their accompanying media.
        </Typography>

        {/* <DescriptionText>
          Packs Minted: {lastPackId} ({lastPackId * 5} Cards)
        </DescriptionText> */}
        <DescriptionText>Price: {price} PB 2116</DescriptionText>
        {!account ? (
          <Button
            endIcon={<Backpack fontSize="large" />}
            onClick={onConnectClicked}
          >
            Connect
          </Button>
        ) : allowance <= 0 ? (
          <Button endIcon={<Buy />} onClick={onApproveClicked}>
            Approve
          </Button>
        ) : balance >= price ? (
          <div style={{ display: "flex", flex: 1 }}>
            <Button endIcon={<Buy />} onClick={onBuyClicked}>
              Buy
            </Button>
            <div style={{ width: 20 }} />
            <Button
              endIcon={<Buy />}
              onClick={() => {
                setOpenTransferModal(true);
              }}
            >
              Buy For A Friend!
            </Button>
          </div>
        ) : (
          <Button endIcon={<Buy />}>Not enough pokeballs 😕</Button>
        )}
      </Description>
      <SendToAddress
        open={openTransferModal}
        handleClose={() => setOpenTransferModal(false)}
        handleConfirm={(destAddress) => {
          if (web3.utils.isAddress(destAddress)) {
            sendGift(destAddress);
            setOpenTransferModal(false);
          }
        }}
      />
      <Notification
        message={"gassin' it!"}
        open={openNotty}
        handleClose={() => setOpenNotty(false)}
        style={{ pointerEvents: "auto" }}
      />
      <Notification
        message={"pack secured 😎"}
        open={openPackNotty}
        linkLabel={"GO TO PACK"}
        href={`/pack/ampedUp/${collectedPackId}`}
        handleClose={() => {
          setOpenPackNotty(false);
          setCollectedPackId(-1);
        }}
      />
    </Container>
  );
};

export default Blurb;
