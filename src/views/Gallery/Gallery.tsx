import { Gallery, PackCard, Content } from "nft-uikit";
import { useAppSelector } from "providers";
import Grid from "@material-ui/core/Grid";
import { useEffect, useMemo, useState } from "react";
import { getPackInfo } from "utils/callHelpers";
import { parseConfigFileTextToJson } from "typescript";

const imgUrl = "/images/packs/blastoff.png";

const GalleryView = () => {
  const packIds = useAppSelector((state) => state.user.nfts.packs);
  const [packs, setPacks] = useState<any[]>();

  useEffect(() => {
    async function fetchData() {
      const result: any[] = [];

      for (const id of packIds) {
        const res = await getPackInfo(id);
        const pack = { packId: id, imgUrl, cards: res };
        result.push(pack);
      }
      setPacks(result);
    }

    fetchData();
  }, [packIds]);

  return (
    <Grid container spacing={2} justify="center">
      {packs?.map((pack, index) => (
        <Grid item key={index.toString()}>
          <PackCard
            pack={pack}
            onPackSelected={(id) => {
              window.location.href = `/pack/${id}`;
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default GalleryView;
