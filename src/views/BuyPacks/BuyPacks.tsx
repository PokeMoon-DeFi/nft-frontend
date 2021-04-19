import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "nft-uikit";
import { useAppSelector } from "providers";
import { useNftAllowance } from "hooks/useAllowance";
import { useWeb3React } from "@web3-react/core";
import { sendApproveBep20 } from "utils/callHelpers";
import {
  getAddressFromSymbol,
  getAddress,
  useContractFromSymbol,
} from "utils/contractHelpers";
import { Modal, Notification } from "nft-uikit";

const StyledImage = styled.img`
  width: clamp(7rem, 100%, 500px);
`;

const BuyPage = () => {
  const { pb2114 } = useAppSelector((state) => state.user.balance);
  const allowance = useNftAllowance();
  const { account } = useWeb3React();
  const pballAddress = getAddressFromSymbol("testPb");

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openNotty, setOpenNotty] = React.useState(false);
  const [openPackNotty, setOpenPackNotty] = React.useState(false);
  const pballContract = useContractFromSymbol("testPb");

  const handleApprove = useCallback(async () => {
    const contractAddress = getAddress("pokemoonNft");
    if (account) {
      const res = await sendApproveBep20(
        pballContract,
        contractAddress,
        account
      );
      console.log(
        `sendApproveBep20(${pballAddress}, ${contractAddress}, ${account})`,
        res
      );
    }
  }, [account, pballAddress, pballContract]);

  const handlePending = useCallback(async () => {
    await new Promise((res) => setTimeout(res, 1000));
    setOpenPackNotty(true);
  }, [setOpenPackNotty]);

  return (
    <>
      <StyledImage src={"images/packs/blastoff.png"} />
      {allowance?.toNumber() <= 0 ? (
        <Button
          label="Approve"
          icon="Buy"
          onClick={handleApprove}
          style={{ pointerEvents: "auto" }}
        />
      ) : (
        <>
          {pb2114.toNumber() >= 100 ? (
            <>
              <Button
                label="Buy"
                icon="Buy"
                onClick={() => {
                  setOpenConfirm(true);
                }}
                style={{ pointerEvents: "auto" }}
              />
            </>
          ) : (
            <>
              <Button
                label="Not enough pokeballs 😔"
                icon="Buy"
                onClick={() => {
                  setOpenConfirm(true);
                }}
                style={{ pointerEvents: "auto" }}
                disabled
              />
            </>
          )}

          <Modal
            title="Are you sure?"
            content="100 PBs will be burned in this transaction."
            open={openConfirm}
            handleClose={() => {
              setOpenConfirm(false);
            }}
            handleConfirm={() => {
              setOpenConfirm(false);
              setOpenNotty(true);
              handlePending();
            }}
            style={{ pointerEvents: "auto" }}
          />
        </>
      )}
      <Notification
        message={"gassin' it!"}
        open={openNotty}
        handleClose={() => setOpenNotty(false)}
        style={{ pointerEvents: "auto" }}
      />
      <Notification
        message={"pack secured 😎"}
        open={openPackNotty}
        handleClose={() => setOpenPackNotty(false)}
        style={{ pointerEvents: "auto" }}
      />
    </>
  );
};

export default BuyPage;
