import {
  Gallery,
  PackCard,
  Content,
  WiggleBall,
  FilterDashboard,
} from "nft-uikit";
import { useAppSelector } from "providers";
import Grid from "@material-ui/core/Grid";
import { useEffect, useMemo, useState } from "react";
import { getPackInfo } from "utils/callHelpers";
import BLAST_OFF_COLLECTION from "config/constants/nfts/2114";
import { PokemoonPack } from "config/constants/nfts/types";
import Container from "@material-ui/core/Container";

const imageUrl = "/images/packs/Blastoff.png";
const name = "Blastoff";

const GalleryView = () => {
  const packIds = useAppSelector((state) => state.user.nfts.packs);
  const [packs, setPacks] = useState<PokemoonPack[]>([]);

  useEffect(() => {
    async function fetchData() {
      for (const id of packIds) {
        const res = await getPackInfo(id);
        if (res[4].length === 8) {
          const reduced = [res[0], res[1], res[2], res[3], res[4]];
          const nfts = reduced.map((r) => BLAST_OFF_COLLECTION[r.slice(0, 2)]);
          const pack: PokemoonPack = { packId: id, imageUrl, nfts, name };
          setPacks((state) => [...state, pack]);
        } else {
          const reduced = [res[0], res[1], res[2], res[3]];
          const nfts = reduced.map((r) => BLAST_OFF_COLLECTION[r]);
          const pack: PokemoonPack = { packId: id, imageUrl, nfts, name };
          setPacks((state) => [...state, pack]);
        }
      }
    }

    fetchData();
  }, [packIds]);

  return (
    <Container
      maxWidth="lg"
      style={{
        marginTop: 60,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* <FilterDashboard /> */}
      <Grid
        container
        spacing={2}
        justify="center"
        style={{ padding: 12, height: "100%" }}
      >
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
    </Container>
  );
};

export default GalleryView;
