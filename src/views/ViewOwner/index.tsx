import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Content } from "components/layout";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import ModeButton from "components/ModeButton";
import { useGetUserBidInfo } from "hooks/useBid";
import OwnerBids from "./OwnerBids";
import Container from "@material-ui/core/Container";

const Text = styled(Typography)`
  color: white;
`;

const ViewOwner = () => {
  const { owner } = useParams();
  const { activeBidInfo, inactiveBidInfo } = useGetUserBidInfo();
  const [showActiveBids, setShowActiveBids] = useState(true);
  console.log(activeBidInfo, inactiveBidInfo);

  return (
    <Container
      maxWidth="lg"
      style={{ paddingTop: 60, justifyContent: "flex-start", height: "100%" }}
    >
      <Text>{owner}</Text>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <ModeButton
          disabled={showActiveBids}
          onClick={() => setShowActiveBids(true)}
        >
          Active Bids
        </ModeButton>
        <div style={{ width: 40 }} />
        <ModeButton
          disabled={!showActiveBids}
          onClick={() => setShowActiveBids(false)}
        >
          Inactive Bids
        </ModeButton>
      </div>
      <OwnerBids data={showActiveBids ? activeBidInfo : inactiveBidInfo} />
    </Container>
  );
};

export default ViewOwner;
