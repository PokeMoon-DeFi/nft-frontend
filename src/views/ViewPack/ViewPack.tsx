import {
  InspectCard,
  Button,
  SendToAddress,
  Gallery,
  rawMaterialTheme,
  Content,
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
import { useNftContract } from "utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";
import { useAppSelector } from "providers";
import { Input, Typography } from "@material-ui/core";
import { useInput } from "hooks/useInput";
import Grid from "@material-ui/core/Grid";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";

const ViewPack = () => {
  let { id } = useParams();
  const { packs } = useAppSelector((state) => state.user.nfts);
  const [nfts, setNfts] = useState<PokemoonNft[]>([]);
  const [activeNft, setActiveNft] = useState<PokemoonNft | null>(null);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const nftContract = useNftContract();
  const { account } = useWeb3React();
  const [accountOwnsPack, setAccountOwnsPack] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getPackInfo(id);

      for (let i = 0; i < 5; i++) {
        const tokenId = res[i];
        if (tokenId.length === 8) {
          const n: PokemoonNft = {
            ...BLAST_OFF_COLLECTION[tokenId.substr(0, 2)],
            uniqueId: tokenId,
          };
          n.glbUrl = `/models/${n.imageUrl.replace(/\..*/g, ".glb")}`;

          setNfts((state) => [...state, n]);
        }
      }
    };

    fetch();
  }, [id]);

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
    <Content maxWidth="lg">
      <Grid
        container
        spacing={4}
        justify="space-around"
        style={{ display: "flex", marginBottom: 24 }}
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
      <Gallery nfts={nfts} style={{ justifyContent: "center" }} />
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
