import React from "react";
import styled from "styled-components";
import Button from "../Button";
import BalanceCounter from "../BalanceCounter";

export interface PageProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

const Container = styled.div`
  background: radial-gradient(
    58.94% 58.94% at 50% 50%,
    #014482 0%,
    #210035 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
`;

const StyledBoosterPack = styled.img`
  max-width: 360px;
`;

export const Page: React.FC<PageProps> = ({
  user,
  onLogin,
  onLogout,
  onCreateAccount,
}) => (
  <Container>
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row-reverse",
        height: 100,
        paddingTop: "10px",
      }}
    >
      <BalanceCounter
        imgUrl="images/MAXRBALL.png"
        balance={1204.0239}
        style={{}}
      />
    </div>

    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "10%",
        alignItems: "center",
      }}
    >
      <StyledBoosterPack src="images/Blastoff.png" />
      <Button
        style={{ margin: "3rem", width: "100%", fontSize: 26 }}
        label="Buy"
        icon="Buy"
      />
    </div>
  </Container>
);
