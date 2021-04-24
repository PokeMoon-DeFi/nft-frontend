import { InspectCard, Button, SendToAddress, Gallery } from "nft-uikit";
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
import { Input } from "@material-ui/core";
import { useInput } from "hooks/useInput";

const ViewPack = () => {
  let { id } = useParams();
  const { packs } = useAppSelector((state) => state.user.nfts);
  const [nfts, setNfts] = useState<PokemoonNft[]>();
  const [activeNft, setActiveNft] = useState<PokemoonNft | null>(null);
  const [openTransferModal, setOpenTransferModal] = useState(false);
  const nftContract = useNftContract();
  const { account } = useWeb3React();
  const [accountOwnsPack, setAccountOwnsPack] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      const res = await getPackInfo(id);
      console.log(res);
      const raw: PokemoonNft[] = [];
      for (let i = 0; i < 5; i++) {
        const tokenId = res[i];
        if (tokenId.length === 8) {
          raw.push(BLAST_OFF_COLLECTION[tokenId.substr(0, 2)]);
        }
      }
      setNfts(raw);
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
      console.log(res);
    },
    [nftContract, account, id]
  );

  const handleSubMenuCommand = (command: string, idx: number) => {
    if (!nfts || idx >= nfts?.length) {
      return;
    }

    switch (command) {
      case "info": {
        const nft = nfts[idx];
        setActiveNft(nft);
        break;
      }
    }
  };

  const [pId, userInput] = useInput({ type: "text" });

  return (
    <>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: accountOwnsPack ? "row" : "row-reverse",
        }}
      >
        {accountOwnsPack && (
          <Button
            label="Transfer Pack"
            style={{ marginTop: 50, alignSelf: "center", marginBottom: 50 }}
            onClick={() => {
              setOpenTransferModal(true);
            }}
          />
        )}
        <div style={{ display: "flex" }}>
          {userInput}
          <Button
            label="View Pack"
            onClick={() => (window.location.href = `/pack/${pId}`)}
            style={{ marginLeft: "6px" }}
          />
        </div>
      </div>

      <Gallery nfts={nfts} style={{ justifyContent: "center" }} />
      <SendToAddress
        open={openTransferModal}
        handleClose={() => setOpenTransferModal(false)}
        handleConfirm={(destAddress) => {
          setOpenTransferModal(false);
          confirmTransferCallback(destAddress);
        }}
      />
    </>
  );
};

export default ViewPack;
