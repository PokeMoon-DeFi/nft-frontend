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
import { Modal, Notification, BuyInfoProps, BuyInfo } from "nft-uikit";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { convertToObject } from "typescript";

const StyledImage = styled.img`
  width: clamp(7rem, 100%, 500px);
  // height: clamp(200px, 70%, 1200px);
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

//@ts-ignore
const p: BuyInfoProps = {
  pack: { name: "Blast Off", pokeball: "PB-2114" },
  price: 100,
  lastPackId: 42,
  pbPrice: 0.1,
  balance: 200,
  account: "", //override
  onConnectClicked: () => {
    console.log("on connect clicked");
  },
  onApproveClicked: () => {
    console.log("approve clicked");
  },
  onBuyClicked: () => {
    console.log("buy clicked ");
  },
};

const BuyPage = () => {
  const { pb2114 } = useAppSelector((state) => state.user.balance);
  const allowance = useNftAllowance();
  console.log(pb2114, allowance);
  const { account } = useWeb3React();
  const pballAddress = getAddressFromSymbol("pb2114");

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openNotty, setOpenNotty] = React.useState(false);
  const [openPackNotty, setOpenPackNotty] = React.useState(false);
  const pballContract = useContractFromSymbol("pb2114");
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
      // console.log(
      //   `sendApproveBep20(${pballAddress}, ${contractAddress}, ${account})`,
      //   res
      // );
    }
  }, [account, pballAddress, pballContract]);

  const handleConfirm = useCallback(async () => {
    const res = await sendBuyPack(nftContract, account);
    const packId = res.events.OnElevation.returnValues.packId;
    await waitForPack(packId);
    setCollectedPackId(packId);
    setOpenPackNotty(true);
  }, [account, nftContract]);

  const { login, logout } = useAuth();

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={0}
        style={{ flex: matches ? 0 : 1 }}
      >
        <Grid
          item
          sm={6}
          xs={12}
          justify={matches ? "center" : "flex-end"}
          style={{ display: "flex", alignItems: "center" }}
        >
          <StyledImage src="/images/packs/blastoff.png" alt="pack" />
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          justify={matches ? "center" : "flex-start"}
          alignItems={"flex-start"}
          style={{
            marginTop: matches ? 0 : 0,
            display: "flex",
            flex: 1,
          }}
        >
          <BuyInfo
            {...p}
            allowance={!!allowance ? allowance.toNumber() : 0}
            account={account ?? ""}
            balance={pb2114.toNumber()}
            onConnectClicked={() => login(ConnectorNames.Injected)}
            onApproveClicked={handleApprove}
            onBuyClicked={() => setOpenConfirm(true)}
          />
        </Grid>
      </Grid>
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
