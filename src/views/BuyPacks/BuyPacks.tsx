import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Button, BalanceCounter } from "nft-uikit";
import { useAppSelector } from "providers";
import { useNftAllowance } from "hooks/useAllowance";
import { useWeb3React } from "@web3-react/core";
import { approve } from "utils/callHelpers";
import { getContractFromSymbol, getNftContract } from "utils/contractHelpers";

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
  const allowance = useNftAllowance("pb2114");
  const { account } = useWeb3React();

  const handleApprove = useCallback(async () => {
    const nftContract = getNftContract();
    console.log(nftContract.options.address);
    console.log(account);
    const pballContract = getContractFromSymbol("pb2114");
    const result = await pballContract.methods
      .approve(nftContract.options.address, 100)
      .send({ from: account });
    console.log(result);
  }, [account]);

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
        {allowance?.toNumber() <= 0 ? (
          <Button label="Approve" icon="Buy" onClick={handleApprove} />
        ) : (
          <Button label="Buy" icon="Buy" />
        )}
      </Content>
    </Page>
  );
};

export default BuyPage;
