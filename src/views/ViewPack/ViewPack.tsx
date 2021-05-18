import {
  InspectCard,
  Button,
  SendToAddress,
  Gallery,
  rawMaterialTheme,
  Content,
  NftCard,
} from "nft-uikit";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getPackedOwned,
  getPackInfo,
  sendTransferPack,
} from "utils/callHelpers";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";
import { useBlastOffContract } from "utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";
import { Input, Typography } from "@material-ui/core";
import { useInput } from "hooks/useInput";
import Grid from "@material-ui/core/Grid";
import { getCardData } from "utils/nftHelpers";

const ViewPack = () => {
  let { id, set } = useParams();
  const [nfts, setNfts] = useState<PokemoonNft[]>([]);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const nftContract = useBlastOffContract();
  const { account } = useWeb3React();
  const [accountOwnsPack, setAccountOwnsPack] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getPackInfo(id, set);

      for (let i = 0; i < 5; i++) {
        const tokenId = res[i];

        if (tokenId.length === 8) {
          const card = await getCardData(tokenId, set);

          setNfts((state) => [...state, card]);
        }
      }
    };

    fetch();
  }, [id, set]);

  useEffect(() => {
    const fetch = async () => {
      if (!account) return;
      const ownedPacks: number[] = await getPackedOwned(account);
      setAccountOwnsPack(ownedPacks && ownedPacks.includes(id));
    };
    fetch();
  }, [id, account]);

  const confirmTransferCallback = useCallback(
    async (destAddress) => {
      const res = await sendTransferPack(nftContract, account, destAddress, id);
      // console.log(res);
    },
    [nftContract, account, id]
  );

  const [pId, userInput] = useInput({ type: "text" });

  return (
    <Content
      maxWidth="xl"
      style={{ paddingTop: 60, justifyContent: "flex-start", height: "100%" }}
    >
      <Grid
        container
        spacing={4}
        justify="space-around"
        style={{
          display: "flex",
          marginBottom: 24,
          alignItems: "center",
        }}
      >
        <Grid item>
          {accountOwnsPack && (
            <Button
              style={{ alignSelf: "center" }}
              onClick={() => {
                setOpenTransferModal(true);
              }}
            >
              Transfer Pack
            </Button>
          )}
        </Grid>
        <Grid item style={{ alignItems: "center", display: "flex" }}>
          {userInput}
          <Button
            onClick={() =>
              !!pId ? (window.location.href = `/pack/${pId}`) : null
            }
            style={{ marginLeft: "6px" }}
          >
            View Pack
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        justify="center"
        style={{ alignItems: "center", flex: 1, paddingBottom: "10%" }}
      >
        {nfts.map((nft, index) => {
          return (
            <Grid
              item
              md={2}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
              key={index.toString()}
            >
              <NftCard nft={nft} imageUrl={nft.imageUrl} />
            </Grid>
          );
        })}
      </Grid>
      <SendToAddress
        open={openTransferModal}
        handleClose={() => setOpenTransferModal(false)}
        handleConfirm={(destAddress) => {
          setOpenTransferModal(false);
          confirmTransferCallback(destAddress);
        }}
      />
    </Content>
  );
};

export default ViewPack;
