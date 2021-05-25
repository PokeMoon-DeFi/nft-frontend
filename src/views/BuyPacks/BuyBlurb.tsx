import Container from "@material-ui/core/Container";
import styled from "styled-components";
import { Typography } from "@material-ui/core";
import { FC } from "react";
import { PokemoonPack } from "config/constants/nfts/types";
import { Button, Backpack, Buy } from "nft-uikit";

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

export interface BuyInfoProps {
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

const Blurb = ({
  onConnectClicked,
  onApproveClicked,
  onBuyClicked,
  account,
  balance,
  price,
  allowance,
}) => {
  return (
    <Container>
      <PrimaryInfo
        style={{
          background: `linear-gradient(120deg, #ffffff 0%, #ffffff 47%, #111111 47.3%, #111111 100%)`,
        }}
      >
        <Pokeball>{2116}</Pokeball>
        <Pack>{"DEGEN BALL"}</Pack>
      </PrimaryInfo>
      <Description>
        <Typography variant="h4" style={{ paddingTop: 10 }}>
          Blast Off! is Closed!
        </Typography>
        <Typography style={{ padding: 20, textAlign: "center" }}>
          Spend 100 PB and receive 5 random, incredibly special cards
          meticulously designed by our most clever, creative community members.
        </Typography>
        <Typography style={{ paddingTop: 0, padding: 20, textAlign: "center" }}>
          Hang tight; these bad boys will have tons of utilities, abilities, and
          tradability as our platform expands!
        </Typography>

        {/* <DescriptionText>
          Packs Minted: {lastPackId} ({lastPackId * 5} Cards)
        </DescriptionText> */}
        <DescriptionText>Price: {price} PB</DescriptionText>
        {!account ? (
          <Button
            endIcon={<Backpack fontSize="large" />}
            onClick={onConnectClicked}
          >
            Connect
          </Button>
        ) : allowance <= 0 ? (
          <Button disabled endIcon={<Buy />} onClick={onApproveClicked}>
            Approve
          </Button>
        ) : balance >= price ? (
          <Button endIcon={<Buy />} onClick={onBuyClicked} disabled>
            Buy
          </Button>
        ) : (
          <Button endIcon={<Buy />} disabled>
            Not enough pokeballs 😕
          </Button>
        )}
        <Typography
          style={{
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          The Blast-Off! NFT Shop is now{" "}
          <span style={{ fontWeight: "bold" }}>
            closed as of 19:00 UTC May 23, 2021
          </span>
          <p>Keep your eyes peeled for the next release!</p>
        </Typography>
      </Description>
    </Container>
  );
};

export default Blurb;
