import React, { useCallback } from "react";
import styled from "styled-components";
import { useAppSelector } from "providers";
import { useAPBAllowance, useBlastOffAllowance } from "hooks/useAllowance";
import { useWeb3React } from "@web3-react/core";
import {
  getPackInfo,
  sendApproveBep20,
  sendBuyPack,
  sendBuyMultiple,
} from "utils/callHelpers";
import {
  getAddressFromSymbol,
  getAddress,
  useContractFromSymbol,
  useBlastOffContract,
  useAmpedUpContract,
  useMeanGreensContract,
} from "utils/contractHelpers";
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
import ConfirmationModal from "./ConfirmationModal";
import { PACK_COST } from "config";
import { VideoPlayer } from "components/VideoPlayer";
import { Notification } from "components/Notification";

//@ts-ignore
const p: BuyInfoProps = {
  pack: {
    name: "Blast Off",
    pokeball: "PB-2114",
    packId: "0",
    imageUrl: "/images/packs/Blastoff.png",
  },
  //not used
  price: 750,
  //not used
  lastPackId: 0,
  //not used
  pbPrice: 0.1,
  //this gets overridden
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
    #a6e98b 55%,
    rgba(95, 101, 250, 0) 75%,
    rgba(95, 101, 250, 0) 100%
  );
  margin-top: 20px;
  margin-bottom: 20px;
`;

const setName = "meanGreens";

const BuyPage = () => {
  const apb = new BigNumber(useAppSelector((state) => state.user.balance.apb));
  const allowance = useAPBAllowance();
  const { account } = useWeb3React();

  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [openNotty, setOpenNotty] = React.useState(false);
  const [openPackNotty, setOpenPackNotty] = React.useState(false);
  const pballContract = useContractFromSymbol("apb");
  const nftContract = useMeanGreensContract();
  const [collectedPackId, setCollectedPackId] = React.useState<number>(-1);

  const handleApprove = useCallback(async () => {
    const contractAddress = getAddress("meanGreens");
    if (account) {
      const res = await sendApproveBep20(
        pballContract,
        contractAddress,
        account
      );
    }
  }, [account, pballContract]);

  const handleConfirm = useCallback(
    async (packAmount) => {
      let res, packId;
      if (packAmount === 1) {
        res = await sendBuyPack(nftContract, account);
        packId = res.events["EntreatPacked"].returnValues.packId;
      } else {
        res = await sendBuyMultiple(nftContract, account, packAmount);
        packId = res.events["EntreatPacked"][0].returnValues.packId;
      }

      setCollectedPackId(packId);
      setOpenPackNotty(true);
    },
    [account, nftContract]
  );

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
        <VideoPlayer url="https://streamable.com/880ur4" height={200} />
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
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <img
            src="/images/packs/mgpack-glow.png"
            alt="pack"
            style={{ maxHeight: 400 }}
          />
        </Grid>

        <Grid item sm={12} md={5} xs={12}>
          <BuyBlurb
            {...p}
            allowance={!!allowance ? allowance.toNumber() : 0}
            account={account ?? ""}
            balance={apb.toNumber()}
            onConnectClicked={() => login(ConnectorNames.Injected)}
            onApproveClicked={handleApprove}
            onBuyClicked={() => setOpenConfirm(true)}
            price={PACK_COST}
          />
        </Grid>
      </Grid>
      {/* <div style={{ height: 20, width: "100%" }} /> */}
      <ConfirmationModal
        open={openConfirm}
        handleClose={() => {
          setOpenConfirm(false);
        }}
        handleConfirm={(packAmount) => {
          setOpenConfirm(false);
          setOpenNotty(true);
          handleConfirm(packAmount);
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
        href={`/pack/${setName}/${collectedPackId}`}
        handleClose={() => {
          setOpenPackNotty(false);
          setCollectedPackId(-1);
        }}
      />
    </Container>
  );
};

export default BuyPage;
