import { Gallery, PackCard, Content, WiggleBall } from "nft-uikit";
import { useAppSelector } from "providers";
import Grid from "@material-ui/core/Grid";
import { useEffect, useMemo, useState } from "react";
import { getPackInfo } from "utils/callHelpers";
import { parseConfigFileTextToJson } from "typescript";
import { Typography } from "@material-ui/core";
import { useTheme } from "styled-components";

const imgUrl = "/images/packs/blastoff.png";

const GalleryView = () => {
  const packIds = useAppSelector((state) => state.user.nfts.packs);
  const [packs, setPacks] = useState<any[]>();
  const theme = useTheme();

  useEffect(() => {
    async function fetchData() {
      const result: any[] = [];

      for (const id of packIds) {
        const res = await getPackInfo(id);
        if (res[4].length === 8) {
          const reduced = [res[0], res[1], res[2], res[3], res[4]];
          const pack = { packId: id, imgUrl, cards: reduced };
          result.push(pack);
        } else {
          const reduced = [res[0], res[1], res[2], res[3]];
          const pack = { packId: id, imgUrl, cards: reduced };
          result.push(pack);
        }
      }
      setPacks(result);
    }

    fetchData();
  }, [packIds]);

  return (
    <>
      <Grid container spacing={2} justify="center">
        {packs && packs.length === 0 && (
          <WiggleBall src={"/images/balls/MAXRBALL.png"} />
        )}
        {packs?.map((pack, index) => (
          <Grid
            item
            sm={6}
            md={4}
            lg={4}
            key={index.toString()}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <PackCard
              pack={pack}
              onPackSelected={(id) => {
                window.location.href = `/pack/${id}`;
              }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default GalleryView;
