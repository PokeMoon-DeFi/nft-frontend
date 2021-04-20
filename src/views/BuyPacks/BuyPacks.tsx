import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "nft-uikit";
import { useAppSelector } from "providers";
import { useNftAllowance } from "hooks/useAllowance";
import { useWeb3React } from "@web3-react/core";
import { getPackInfo, sendApproveBep20, sendBuyPack } from "utils/callHelpers";
import {
  getAddressFromSymbol,
  getAddress,
  useContractFromSymbol,
  useNftContract,
} from "utils/contractHelpers";
import { Modal, Notification } from "nft-uikit";

const StyledImage = styled.img`
  width: clamp(7rem, 100%, 500px);
`;

const waitForPack = (packId) => {
  return new Promise<void>((resolve, reject) => {
    (async () => {
      const interval = setInterval(() => checkPack(packId), 500);
      async function checkPack(packId) {
        try {
          const res = await getPackInfo(packId);
          if (res[4].length === 8) {
            clearInterval(interval);
            resolve();
          }
        } catch (err) {
          reject(err);
        }
      }
    })();
  });
};

const BuyPage = () => {
  const { pb2114 } = useAppSelector((state) => state.user.balance);
  const allowance = useNftAllowance();
  const { account } = useWeb3React();
  const pballAddress = getAddressFromSymbol("testPb");

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openNotty, setOpenNotty] = React.useState(false);
  const [openPackNotty, setOpenPackNotty] = React.useState(false);
  const pballContract = useContractFromSymbol("testPb");
  const nftContract = useNftContract();
  const [collectedPackId, setCollectedPackId] = React.useState<number>(-1);

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

  const handleConfirm = useCallback(async () => {
    const res = await sendBuyPack(nftContract, account);
    const packId = res.events.OnElevation.returnValues.packId;
    await waitForPack(packId);
    setCollectedPackId(packId);
    setOpenPackNotty(true);
  }, [account, nftContract]);

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
                label="Not enough pokeballs 😕"
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
              handleConfirm();
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
        linkLabel={"GO TO PACK"}
        href={`/pack/${collectedPackId}`}
        handleClose={() => {
          setOpenPackNotty(false);
          setCollectedPackId(-1);
        }}
      />
    </>
  );
};

export default BuyPage;
