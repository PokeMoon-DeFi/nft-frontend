import React from "react";
import styled from "styled-components";
import { Button, BalanceCounter } from "nft-uikit";
import { useAppSelector } from "providers";

const Page = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  flex-direction: column;
`;

const Header = styled.div`
  flex-basis: 200px;
  width: 100%;
`;
const Content = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const StyledImage = styled.img`
  width: clamp(7rem, 100%, 500px);
`;

const BuyPage = () => {
  const { pb2114 } = useAppSelector((state) => state.user.balance);

  return (
    <Page>
      <Header>
        <BalanceCounter
          imgUrl={"images/packs/blastoff.png"}
          balance={pb2114 ? pb2114.toNumber() : 0}
        />
      </Header>
      <Content>
        <StyledImage src={"images/packs/blastoff.png"} />
        <Button label="Buy" icon="Buy" />
      </Content>
    </Page>
  );
};

export default BuyPage;
