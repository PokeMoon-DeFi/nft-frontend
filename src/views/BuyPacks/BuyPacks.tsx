import React, { useCallback } from "react";
import styled from "styled-components";
import { Button } from "nft-uikit";
import { useAppSelector } from "providers";
import { useBlastOffAllowance } from "hooks/useAllowance";
import { useWeb3React } from "@web3-react/core";
import { getPackInfo, sendApproveBep20, sendBuyPack } from "utils/callHelpers";
import {
  getAddressFromSymbol,
  getAddress,
  useContractFromSymbol,
  useBlastOffContract,
} from "utils/contractHelpers";
import {
  Modal,
  Content,
  Notification,
  BuyInfoProps,
  VideoPlayer,
} from "nft-uikit";
import Grid from "@material-ui/core/Grid";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import useAuth from "hooks/useAuth";
import { ConnectorNames } from "utils/types";
import { convertToObject } from "typescript";
import BigNumber from "bignumber.js";
import BuyBlurb from "./BuyBlurb";

const StyledImage = styled.img`
  width: clamp(7rem, 100%, 500px);
  // height: clamp(200px, 70%, 1200px);
`;

const waitForPack = (packId, set: string) => {
  return new Promise<void>((resolve, reject) => {
    (async () => {
      const interval = setInterval(() => checkPack(packId), 500);
      async function checkPack(packId) {
        try {
          const res = await getPackInfo(packId, set);
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
  pack: {
    name: "Blast Off",
    pokeball: "PB-2114",
    packId: "0",
    imageUrl: "/images/packs/Blastoff.png",
  },
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

const StyledBackground = styled.div`
  background: rgb(238, 39, 255);
  background: radial-gradient(
    circle,
    rgba(238, 39, 255, 0) 0%,
    rgba(252, 238, 255, 0) 35%,
    #d889e7 55%,
    rgba(95, 101, 250, 0) 75%,
    rgba(95, 101, 250, 0) 100%
  );
  margin-top: 20px;
  margin-bottom: 20px;
`;

const BuyPage = () => {
  const pb2114 = new BigNumber(
    useAppSelector((state) => state.user.balance.pb2114)
  );
  const allowance = useBlastOffAllowance();
  const { account } = useWeb3React();
  const pballAddress = getAddressFromSymbol("pb2116");

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openNotty, setOpenNotty] = React.useState(false);
  const [openPackNotty, setOpenPackNotty] = React.useState(false);
  const pballContract = useContractFromSymbol("pb2116");
  const nftContract = useBlastOffContract();
  const [collectedPackId, setCollectedPackId] = React.useState<number>(-1);

  const handleApprove = useCallback(async () => {
    const contractAddress = getAddress("ampedUp");
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
    await waitForPack(packId, "blastOff");
    setCollectedPackId(packId);
    setOpenPackNotty(true);
  }, [account, nftContract]);

  const { login, logout } = useAuth();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container
      maxWidth="xl"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "space-between",
      }}
    >
      <StyledBackground
        style={{
          display: "flex",

          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <VideoPlayer url="https://streamable.com/0y8y8d" height={200} />
      </StyledBackground>
      <Grid
        container
        justify="center"
        spacing={6}
        style={{
          padding: "0px 8px 72px 8px",
          display: "flex",
          flex: 1,
          height: !isMobile ? "100%" : "auto",
          alignContent: "center",
        }}
      >
        <Grid
          item
          sm={12}
          md={3}
          style={{
            paddingTop: 12,
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <img
            src="/images/packs/Blastoff.png"
            alt="pack"
            style={{ width: 250, offset: 10 }}
          />
        </Grid>

        <Grid item sm={12} md={5} xs={12}>
          <BuyBlurb
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
      {/* <div style={{ height: 20, width: "100%" }} /> */}
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
    </Container>
  );
};

export default BuyPage;
