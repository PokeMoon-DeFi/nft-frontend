import Box from "@material-ui/core/Box";
import { PokemoonNft, TokenUriResponse } from "config/constants/nfts/types";
import React, { FC } from "react";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";

interface InfoBoxProps {
  data: TokenUriResponse;
}

const Text = styled(Typography)`
  color: white;
  text-shadow: 2px 2px 4px black;
`;

const StyledBox = styled(Box)`
  border: 4px purple solid;
  border-radius: 16px;
`;

const background1 = "#e784eb";
const background2 = "#6d406e";

const InfoBox: FC<InfoBoxProps> = ({ data }) => {
  const { attributes } = data;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        height: "100%",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "white",
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          {data.description}
        </Typography>
      </div>
      <StyledBox
        style={{
          width: "100%",
          // display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          // flex: 1,
          // height: "100%",
        }}
      >
        {attributes.map((attr, index) => {
          return (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
                // height: 40,
                flex: 1,
                padding: 12,
                alignItems: "center",
                background: index % 2 === 0 ? background1 : background2,
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
