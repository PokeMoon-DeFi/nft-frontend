import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Contract as ethersContract } from "ethers";

import {
  getPackedOwned,
  getPackInfo,
  safeAwait,
  sendTransferPack,
} from "utils/callHelpers";
import { PokemoonNft } from "config/constants/nfts/types";
import { BigNumber, ethers } from "ethers";

import {
  getNftContractByName,
  getNftAddressByName,
  getNftAbiByName,
  useNftContractbyName,
} from "utils/contractHelpers";
import { useWeb3React } from "@web3-react/core";
import { useInput } from "hooks/useInput";
import Grid from "@material-ui/core/Grid";
import { getCardData } from "utils/nftHelpers";
import multicall from "utils/multicall";
import Button from "components/Button";
import { Content } from "components/layout";
import { NftCard } from "components/Card";
import { SendToAddress } from "components/Modal";
import { useAppSelector } from "providers";

const ViewPack = () => {
  let { id, set } = useParams();
  const [nfts, setNfts] = useState<PokemoonNft[]>([]);

  const [openTransferModal, setOpenTransferModal] = useState(false);
  const nftContract = useNftContractbyName(set);
  const { account } = useWeb3React();
  const [accountOwnsPack, setAccountOwnsPack] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getPackInfo(id, set);
      let packNfts: PokemoonNft[] = [];

      for (let i = 0; i < 5; i++) {
        const tokenId = res[i];

        if (tokenId.length === 8) {
          const card = await getCardData(tokenId, set);

          packNfts.push(card);
        }
      }
      setNfts(packNfts);

      if (account) {
        const calls = packNfts.map((nft) => {
          return {
            address: getNftAddressByName(set),
            name: "ownerOf",
            params: [nft.tokenId],
          };
        });

        const ownedPacks: number[] = await getPackedOwned(account, set);
        const response: string[] = await multicall(getNftAbiByName(set), calls);
        setAccountOwnsPack(
          ownedPacks &&
            ownedPacks.includes(id) &&
            response.every(
              (response) => response[0].toLowerCase() === account.toLowerCase()
            )
        );
      }
    };

    fetch();
  }, [id, set, account]);

  const confirmTransferCallback = useCallback(
    async (destAddress) => {
      const res = await sendTransferPack(nftContract, account, destAddress, id);

      // const provider = new ethers.providers.Web3Provider(

      //   window.ethereum,
      //   "any"
      // );

      // const contract = new ethersContract(
      //   getNftAddressByName(set),
      //   getNftAbiByName(set),
      //   provider.getSigner()
      // );
      // const [tx, error] = await safeAwait(
      //   contract.functions.transferPackedFrom(
      //     account,
      //     destAddress,
      //     id.toString()
      //   )
      // );

      // if (!error) {
      //   const [receipt, e] = await safeAwait(
      //     provider.waitForTransaction(tx.hash)
      //   );
      // }
    },
    [id, account, nftContract]
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
              !!pId ? (window.location.href = `/pack/${set}/${pId}`) : null
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
