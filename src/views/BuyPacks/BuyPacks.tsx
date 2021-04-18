import React, { useCallback, useMemo } from "react";
import styled from "styled-components";
import { Button, BalanceCounter } from "nft-uikit";
import { useAppSelector } from "providers";
import { useNftAllowance } from "hooks/useAllowance";
import { useWeb3React } from "@web3-react/core";
import { approve } from "utils/callHelpers";
import { useContractFromSymbol, getNftContract } from "utils/contractHelpers";
import { Modal, Notification } from "nft-uikit";

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
  const pballContract = useContractFromSymbol("pb2114");

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openNotty, setOpenNotty] = React.useState(false);

  const handleApprove = useCallback(async () => {
    const nftContract = getNftContract();
    if (account) {
      const result = await approve(pballContract, nftContract, account);
    }
  }, [account, pballContract]);

  return (
    <>
      <StyledImage src={"images/packs/blastoff.png"} />
      {allowance?.toNumber() <= 0 ? (
        <Button label="Approve" icon="Buy" onClick={handleApprove} />
      ) : (
        <>
          <Button
            label="Buy"
            icon="Buy"
            onClick={() => {
              setOpenConfirm(true);
            }}
          />
          <Modal
            title="you sure?"
            content="ur about to buy cool shit y/n"
            open={openConfirm}
            handleClose={() => {
              setOpenConfirm(false);
            }}
            handleConfirm={() => {
              console.log("clicked");
              setOpenConfirm(false);
              setOpenNotty(true);
            }}
          />
        </>
      )}
      <Notification
        message={"gassin' it!"}
        open={openNotty}
        handleClose={() => setOpenNotty(false)}
      />
    </>
  );
};

export default BuyPage;
