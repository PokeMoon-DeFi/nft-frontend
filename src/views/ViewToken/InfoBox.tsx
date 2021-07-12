import Box from "@material-ui/core/Box";
import { PokemoonNft, TokenUriResponse } from "config/constants/nfts/types";
import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

interface InfoBoxProps {
  nft: PokemoonNft;
}

const Text = styled(Typography)`
  color: white;
  text-shadow: 2px 2px 4px black;
`;

const StyledBox = styled(Box)`
  border: 4px purple solid;
  border-radius: 16px;
  background: rgb(217, 39, 255);
  background: linear-gradient(
    0deg,
    rgba(217, 39, 255, 0) 0%,
    rgba(87, 11, 103, 1) 0%,
    rgba(53, 41, 149, 1) 85%,
    rgba(75, 34, 161, 1) 100%
  );
`;

const background1 = "#e784eb";
const background2 = "#6d406e";

const InfoBox: FC<InfoBoxProps> = ({ nft }) => {
  const { tokenUriResponse: data } = nft;
  if (!data) {
    return <></>;
  }

  const { attributes } = data;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        flex: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <StyledBox
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
          // flex: 1,
          // height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "baseline",
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <Typography
            variant="h4"
            style={{ textAlign: "center", color: "white", marginTop: 16 }}
          >
            {`${nft.name} #${nft.tokenId}`}
          </Typography>
        </div>
        <Typography
          variant="h6"
          style={{
            color: "white",
            textAlign: "center",
            fontStyle: "italic",
            margin: 20,
          }}
        >
          {data.description}
        </Typography>

        {attributes.map((attr, index) => {
          return (
            <div
              key={index.toString()}
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                height: 42,
                // flex: 1,
                padding: 12,
                alignItems: "center",
                // background: index % 2 === 0 ? background1 : background2,
              }}
            >
              <Text>{attr.trait_type}</Text>
              <Text>{attr.value}</Text>
            </div>
          );
        })}
      </StyledBox>
    </div>
  );
};
export default InfoBox;
