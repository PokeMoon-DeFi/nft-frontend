import { Carousel, InspectCard, Button } from "nft-uikit";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPackInfo } from "utils/callHelpers";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonNft } from "config/constants/nfts/types";

const ViewPack = () => {
  let { id } = useParams();
  const [nfts, setNfts] = useState<PokemoonNft[]>();
  const [activeNft, setActiveNft] = useState<PokemoonNft | null>(null);

  console.log(getPackInfo(id));
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

  const handleSubMenuCommand = (command: string, idx: number) => {
    if (!nfts || idx >= nfts?.length) {
      return;
    }

    switch (command) {
      case "info": {
        const nft = nfts[idx];
        console.log("inspecting", nft);
        setActiveNft(nft);
        break;
      }
    }
  };

  return (
    <>
      <div style={{ pointerEvents: "auto" }}>
        <Carousel nfts={nfts} handleSubMenuCommand={handleSubMenuCommand} />
        <Button
          label="Transfer Pack"
          onClick={() => {
            console.log("transfer modal goes here");
          }}
        />

        <InspectCard
          nft={activeNft}
          handleClose={() => {
            setActiveNft(null);
          }}
          open={!!activeNft}
        />
      </div>
    </>
  );
};

export default ViewPack;
