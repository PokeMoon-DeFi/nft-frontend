import React from "react";
import { useParams } from "react-router-dom";
import { Content } from "components/layout";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import ModeButton from "components/ModeButton";
import { useGetUserBidInfo } from "hooks/useBid";

const Text = styled(Typography)`
  color: white;
`;

const ViewOwner = () => {
  const { owner } = useParams();
  const bidInfo = useGetUserBidInfo();
  return (
    <Content
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
        <ModeButton>Active Bids</ModeButton>
        <div style={{ width: 40 }} />
        <ModeButton>Inactive Bids</ModeButton>
      </div>
    </Content>
  );
};

export default ViewOwner;
